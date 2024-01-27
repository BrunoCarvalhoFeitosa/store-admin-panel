"use client"
import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
    id: string
    phone: string
    address: string
    isPaid: boolean
    totalPrice: string
    products: string
    createdAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
    },
    {
        accessorKey: "totalPrice",
        header: "Total price",
    },
    {
        accessorKey: "products",
        header: "Products",
    }
]