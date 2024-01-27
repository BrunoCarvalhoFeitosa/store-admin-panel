"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { CldUploadWidget } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import { PlusIcon, TrashIcon } from "lucide-react"

interface ImageUploadProps {
    disabled?: boolean
    onChange: (value: string) => void
    onRemove: (value: string) => void
    value: string[]
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const onUpload = (result: any) => {
        onChange(result.info.secure_url)
    }

    if (!isMounted) {
        return null
    }

    return (
        <div>
            <div className="flex items-center gap-4 mb-3">
                {value.map((url) => (
                    <div
                        key={url}
                        className="relative w-52 h-52 rounded-md overflow-hidden"
                    >
                        <div className="absolute top-2 right-2 z-10">
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => onRemove(url)}
                            >
                                <TrashIcon className="w-4 h-4" />
                            </Button>
                        </div>
                        <div>
                            <Image
                                fill
                                className="object-cover"
                                src={url}
                                alt="Image"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <CldUploadWidget onUpload={onUpload} uploadPreset="cz3yezst">
                {({ open }) => {
                    const onClick = () => {
                        open()
                    }

                    return (
                        <Button
                            disabled={disabled}
                            type="button"
                            variant="secondary"
                            onClick={onClick}
                        >
                            <PlusIcon className="mr-2 w-4 h-4" />
                            Upload an image
                        </Button>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
}