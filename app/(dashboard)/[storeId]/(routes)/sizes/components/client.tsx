"use client"
import { useParams, useRouter } from "next/navigation"
import { SizeColumn, columns } from "./colums"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"
import { PlusIcon } from "lucide-react"

interface SizeClientProps {
    data: SizeColumn[]
}

const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()

    const addSize = () => {
        router.refresh()
        router.push(`/${params.storeId}/sizes/new`)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <Heading
                    title={`Sizes (${data.length})`}
                    description="Manage sizes for your store."
                />
                <Button
                    className="bg-black hover:bg-black/90"
                    onClick={addSize}
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
                description="API calls for Sizes."
            />
            <Separator />
            <ApiList
                entityName="sizes"
                entityIdName="sizeId"
            />
        </div>
    )
}
 
export default SizeClient