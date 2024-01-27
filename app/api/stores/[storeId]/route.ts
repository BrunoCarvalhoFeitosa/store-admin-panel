import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prismadb from "@/lib/prismadb"

export async function PATCH(req: Request, { params }: { params: { storeId: string } }) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name } = body

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400 })
        }

        if (!params) {
            return new NextResponse("Store Id is required", { status: 404 })
        }

        const store = await prismadb.store.updateMany({
            where: {
                id: params.storeId,
                userId
            },
            data: {
                name
            }
        })

        return NextResponse.json(store)
    } catch (error) {
        console.error("[STORE_PATCH_ERROR]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { storeId: string } }) {
    try {
        const { userId } = auth()

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }

        if (!params) {
            return new NextResponse("Store Id is required", { status: 404 })
        }

        const store = await prismadb.store.deleteMany({
            where: {
                id: params.storeId,
                userId
            }
        })

        return NextResponse.json(store)
    } catch (error) {
        console.error("[STORE_DELETE_ERROR]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}