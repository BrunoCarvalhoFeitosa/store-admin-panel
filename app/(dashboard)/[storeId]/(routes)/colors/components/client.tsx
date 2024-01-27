"use client"
import { useParams, useRouter } from "next/navigation"
import { ColorColumn, columns } from "./colums"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"
import { PlusIcon } from "lucide-react"

interface ColorClientProps {
    data: ColorColumn[]
}

const ColorClient: React.FC<ColorClientProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()

    const addColor = () => {
        router.refresh()
        router.push(`/${params.storeId}/colors/new`)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <Heading
                    title={`Colors (${data.length})`}
                    description="Manage colors for your store."
                />
                <Button
                    className="bg-black hover:bg-black/90"
                    onClick={addColor}
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
                description="API calls for Colors."
            />
            <Separator />
            <ApiList
                entityName="colors"
                entityIdName="colorId"
            />
        </div>
    )
}
 
export default ColorClient