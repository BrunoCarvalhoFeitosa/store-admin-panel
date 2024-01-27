"use client"
import { useParams, useRouter } from "next/navigation"
import { OrderColumn, columns } from "./colums"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"

interface OrderClientProps {
    data: OrderColumn[]
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()

    const addBillboard = () => {
        router.refresh()
        router.push(`/${params.storeId}/billboards/new`)
    }

    return (
        <div>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store."
            />
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey="products"
            />
        </div>
    )
}
 
export default OrderClient