import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import ThemeSwitcherClient from "@/components/ThemeSwitcherClient";

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Comforter&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Nothing+You+Could+Do&family=Rock+Salt&family=Zeyada&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <ThemeSwitcherClient />
          {children}
          <SmoothCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
