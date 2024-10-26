import type { Metadata } from "next"

import "./globals.css"

import { Montserrat, Open_Sans, Poppins, Volkhov } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
})

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-volkhov",
})

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
})
const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Jadoo Travel",
  description: "Best services in the travel industry",
  authors: {
    name: "Khoa Nguyen",
    url: "https://github.com/nguyenvoanhkhoa1",
  },
  icons: {
    icon: "/favicon.svg",
  },
  keywords: ["Jadoo", "Travel", "Jadoo Travel"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${volkhov.variable} ${openSans.variable} ${montserrat.variable}`}
    >
      <body className={`${poppins.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
