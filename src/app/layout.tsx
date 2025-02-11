import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felix Ndunda (Efen) Portfolio',
  description: 'My name is Felix Ndunda and this is my portfolio',
  keywords: "Portfolio, Software Engineer, Software Engineering, Felix, Felix Ndunda, Felix Ndunda Muoki, Efen",
  applicationName: "Felix Ndunda Muoki",
  publisher: "Felix Ndunda Muoki",
  authors: [ { name: "Felix Ndunda Muoki", url: "https://felixportfolio-ea3f1.web.app" }, ],
  creator: "Felix Ndunda Muoki (Efen)",
  icons: [{ rel: "icon", url: "./favicon.png" }, { rel: "apple-touch-icon", url: "./favicon.png" }],
  robots: { index: true, follow: true },
  formatDetection: { email: true, telephone: true, },
  classification: "Portfolio, Software Engineer.",
  themeColor: "#A267D7",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
