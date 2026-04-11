import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Cine Noir",
  description: "Your personal movie streaming platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${spaceGrotesk.variable}  antialiased`}
      suppressHydrationWarning
    >
      <body className='flex flex-col h-screen overflow-hidden'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SidebarProvider className="min-h-0! flex-1 overflow-hidden">
            <AppSidebar />
            <main className='flex flex-col w-full flex-1 overflow-y-auto'>
              <SidebarTrigger />
              {children}
              <Footer />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
