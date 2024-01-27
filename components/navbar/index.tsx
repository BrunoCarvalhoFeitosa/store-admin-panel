import { redirect } from "next/navigation"
import { UserButton, auth } from "@clerk/nextjs"
import StoreSwitcher from "@/components/store-switcher"
import MainNav from "@/components/main-nav"
import prismadb from "@/lib/prismadb"
import ThemeToggle from "@/components/theme-toggle"

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in')
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId
        }
    })

    return (
        <div className="border-b">
            <div className="px-4 py-4 flex items-start 2xl:items-center justify-between">
                <div className="flex flex-col 2xl:flex-row items-start gap-x-6 2xl:items-center">
                    <StoreSwitcher items={stores} />
                    <MainNav className="flex-1 2xl:mx-6" />
                </div>
                <div className="flex items-center gap-x-3">
                    <ThemeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}
 
export default Navbar