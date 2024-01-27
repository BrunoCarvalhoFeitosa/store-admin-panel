"use client"
import { useParams, useRouter } from "next/navigation"
import { BillboardColumn, columns } from "./colums"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"
import { PlusIcon } from "lucide-react"

interface BillboardClientProps {
    data: BillboardColumn[]
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()

    const addBillboard = () => {
        router.refresh()
        router.push(`/${params.storeId}/billboards/new`)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboards for your store."
                />
                <Button
                    className="bg-black hover:bg-black/90"
                    onClick={addBillboard}
                >
                    <PlusIcon className="mr-2 w-4 h-4" />
                    Add new
                </Button>
            </div>
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey="label"
            />
            <Heading
                title="API"
                description="API calls for Billboards."
            />
            <Separator />
            <ApiList
                entityName="billboards"
                entityIdName="billboardId"
            />
        </div>
    )
}
 
export default BillboardClient