import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ModalProvider } from "@/providers/modal-provider"
import { ToasterProvider } from "@/providers/toast-provider"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Painel administrador",
    description: "Painel administrador para gerenciar produtos, categorias, pedidos e faturamentos.",
    icons: {
        icon: "/favicon/favicon.png",
        shortcut: "/favicon/favicon.png"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="pt-BR">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                >
                    <ModalProvider />
                    <ToasterProvider />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    </ClerkProvider>
  )
}