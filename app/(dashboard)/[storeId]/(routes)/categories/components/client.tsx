"use client"
import { useParams, useRouter } from "next/navigation"
import { CategoryColumn, columns } from "./colums"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"
import { PlusIcon } from "lucide-react"

interface CategoryClientProps {
    data: CategoryColumn[]
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()

    const addCategory = () => {
        router.refresh()
        router.push(`/${params.storeId}/categories/new`)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <Heading
                    title={`Categories (${data.length})`}
                    description="Manage categories for your store."
                />
                <Button
                    className="bg-black hover:bg-black/90"
                    onClick={addCategory}
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
                description="API calls for Categories."
            />
            <Separator />
            <ApiList
                entityName="categories"
                entityIdName="categoryId"
            />
        </div>
    )
}
 
export default CategoryClient