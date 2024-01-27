"use client"
import { useParams, useRouter } from "next/navigation"
import { ProductColumn, columns } from "./colums"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"
import { PlusIcon } from "lucide-react"

interface ProductClientProps {
    data: ProductColumn[]
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()

    const addProduct = () => {
        router.refresh()
        router.push(`/${params.storeId}/products/new`)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <Heading
                    title={`Products (${data.length})`}
                    description="Manage products for your store."
                />
                <Button
                    className="bg-black hover:bg-black/90"
                    onClick={addProduct}
                >
                    <PlusIcon className="mr-2 w-4 h-4" />
                    Add new
                </Button>
            </div>
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey="name"
            />
            <Heading
                title="API"
                description="API calls for Products."
            />
            <Separator />
            <ApiList
                entityName="products"
                entityIdName="productId"
            />
        </div>
    )
}
 
export default ProductClient