"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import { AlertModal } from "@/components/modals/alert-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ColorColumn } from "./colums"
import { CopyIcon, EditIcon, MoreHorizontalIcon, TrashIcon } from "lucide-react"

interface CellActionProps {
    data: ColorColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()
    const params = useParams()

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id)
        toast.success("Color Id copied to the clipboard.")
    }

    const onUpdate = () => {
        router.push(`/${params.storeId}/colors/${data.id}`)
    }

    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/${params.storeId}/colors/${data.id}`)
            router.refresh()
            toast.success("Color deleted.")
        } catch (error) {
            toast.error("Make sure you removed all products using this color first.")
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-8 h-8 p-0">
                        <span className="sr-only">
                            Open menu
                        </span>
                        <MoreHorizontalIcon className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => onCopy(data.id)}>
                        <CopyIcon className="mr-2 w-4 h-4" />
                        Copy Id
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onUpdate}>
                        <EditIcon className="mr-2 w-4 h-4" />
                        Update
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <TrashIcon className="mr-2 w-4 h-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}