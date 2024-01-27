import { format } from "date-fns"
import prismadb from "@/lib/prismadb"
import { formatter } from "@/lib/utils"
import ProductClient from "./components/client"
import { ProductColumn } from "./components/colums"

const ProductPage = async ({ params }: { params: { storeId: string }}) => {
    const products = await prismadb.product.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            category: true,
            size: true,
            color: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    const formattedProducts: ProductColumn[] = products.map((item) => ({
        id: item.id,
        name: item.name,
        price: formatter.format(item.price),
        category: item.category.name,
        size: item.size.name,
        color: item.color.value,
        isFeatured: item.isFeatured,
        isArchived: item.isArchived,
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }))

    return (
        <div className="flex-col">
            <div className="p-8 pt-6 flex-1 space-x-3">
                <ProductClient data={formattedProducts} />
            </div>
        </div>
    )
}
 
export default ProductPage