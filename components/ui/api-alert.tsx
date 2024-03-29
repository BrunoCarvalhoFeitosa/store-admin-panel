"use client"
import toast from "react-hot-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge, BadgeProps } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CopyIcon, ServerIcon } from "lucide-react"

interface ApiAlertProps {
    title: string
    description: string
    variant: "public" | "admin"
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin",
}

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive"
}

export const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant = "public"
}) => {
    const onCopy = () => {
        navigator.clipboard.writeText(description)
        toast.success("API Route copied to clipboard.")
    }

    return (
        <Alert className="my-10">
            <ServerIcon className="w-4 h-4" />
            <AlertTitle className="flex items-center gap-x-2">
                {title}
                <Badge variant={variantMap[variant]}>
                    {textMap[variant]}
                </Badge>
            </AlertTitle>
            <AlertDescription className="flex justify-between items-center">
                <code className="relative px-[0.3rem] py-[0.2rem] rounded bg-muted font-mono text-sm font-semibold">
                    {description}
                </code>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={onCopy}
                >
                    <CopyIcon className="w-4 h-4" />
                </Button>
            </AlertDescription>
        </Alert>
    )
}