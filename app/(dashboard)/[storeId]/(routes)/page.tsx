import { getTotalRevenue } from "@/actions/get-total-revenue"
import { getSalesCount } from "@/actions/get-sales-count"
import { getStockCount } from "@/actions/get-stock-count"
import { getGraphRevenue } from "@/actions/get-graph-revenue"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { CreditCardIcon, DollarSignIcon, PackageIcon } from "lucide-react"

interface DashboardPageProps {
    params: { storeId: string }
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
    const totalRevenue = await getTotalRevenue(params.storeId)
    const salesCount = await getSalesCount(params.storeId)
    const stockCount = await getStockCount(params.storeId)
    const graphRevenue = await getGraphRevenue(params.storeId)

    return (
        <div className="flex-col">
            <div className="flex-1 p-8 pt-6">
                <Heading title="Dashboard" description="Overview of your store" />
                <Separator />
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <DollarSignIcon className="w-6 h-6" />
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            ${totalRevenue.toFixed(2)}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Sales
                            </CardTitle>
                            <CreditCardIcon className="w-6 h-6" />
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            +{salesCount}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Products in stock
                            </CardTitle>
                            <PackageIcon className="w-6 h-6" />
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            {stockCount}
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-6">
                    <Card>
                        <CardHeader>
                            Overview
                        </CardHeader>
                        <CardContent>
                            <Overview data={graphRevenue} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
 
export default DashboardPage