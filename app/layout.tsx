import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Messentra - Azure Service Bus Desktop Explorer',
  description: 'A cross-platform desktop GUI for Azure Service Bus - browse resources, inspect and send messages, manage dead-letter queues.',
  verification: {
    google: 'dDvOV-OPQ0_nnzHvZZ8mR8YiJrZB0RgsjP2ZtyJthbU',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5M7RVQ54');` }} />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5M7RVQ54" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        {children}
      </body>
    </html>
  )
}
