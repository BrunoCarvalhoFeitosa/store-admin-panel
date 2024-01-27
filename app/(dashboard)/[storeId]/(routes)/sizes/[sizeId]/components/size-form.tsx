"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import * as z from "zod"
import toast from "react-hot-toast"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Size } from "@prisma/client"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AlertModal } from "@/components/modals/alert-modal"
import { TrashIcon } from "lucide-react"

type SizeFormValues = z.infer<typeof formSchema>

interface SizeFormProps {
    initialData: Size | null
}

const formSchema = z.object({
    name: z.string().min(1),
    value: z.string().min(1),
})

const SizeForm: React.FC<SizeFormProps> = ({ initialData }) => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const params = useParams()
    const router = useRouter()
    const title = initialData ? "Edit size" : "Create size"
    const description = initialData ? "Edit a size." : "Create a new size."
    const toastMessage = initialData ? "Size updated." : "Size created."
    const action = initialData ? "Save changes" : "Create"

    const form = useForm<SizeFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name: "",
            value: ""
        }
    })

    const onSubmit = async (data: SizeFormValues) => {
        try {
            setLoading(true)

            if (initialData) {
                await axios.patch(`/api/${params.storeId}/sizes/${params.sizeId}`, data)
            } else {
                await axios.post(`/api/${params.storeId}/sizes`, data)
            }

            router.refresh()
            window.location.assign(`/${params.storeId}/sizes`)
            toast.success(toastMessage)
        } catch (error) {
            toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/${params.storeId}/sizes/${params.sizeId}`)
            router.refresh()
            router.push(`/${params.storeId}/sizes`)
            toast.success('Size deleted.')
        } catch (error) {
            toast.error("Make sure you removed all products using this size first.")
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
            <div className="flex justify-between items-center">
                <Heading
                    title={title}
                    description={description}
                />
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <TrashIcon className="w-4 h-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-10 mb-5 space-y-4 w-full"
                >
                    <div className="grid grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Size name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder="Size name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="value"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Value
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder="Size value"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={loading}
                        type="submit"
                        className="bg-black hover:bg-black/90"
                    >
                        {action}
                    </Button>
                </form>
            </Form>
        </>
    )
}
 
export default SizeForm