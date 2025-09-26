import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Apple Search Ads Dashboard",
  description: "Real-time analytics dashboard for Apple Search Ads performance tracking",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
