"use client"
import { useState } from "react"
import axios from "axios"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"

const formSchema = z.object({
    name: z.string().min(1)
})

export const StoreModal = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const storeModal = useStoreModal()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
            const response = await axios.post("/api/stores", values)
            window.location.assign(`/${response.data.id}`)
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal
            title="Create store"
            description="Create a new store to manage products and categories."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="py-2 pb-4 space-y-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            E-Commerce name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="Type the name of the store"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 flex justify-end items-center space-x-2">
                                <Button
                                    disabled={loading}
                                    type="button"
                                    variant="outline"
                                    onClick={storeModal.onClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    disabled={loading}
                                    type="submit"
                                    className="bg-black hover:bg-black/90"
                                >
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}