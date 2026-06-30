import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/ui/theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kruthish Portfolio | Full Stack Developer',
  description: 'Modern portfolio showcasing full stack development projects and expertise. Built with Next.js and shadcn/ui.',
  keywords: ['portfolio', 'developer', 'full stack', 'Next.js', 'React', 'kruthish kandula'],
  authors: [{ name: 'Kruthish' }],
  creator: 'Kruthish',
  publisher: 'Kruthish',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kruthishkandula.onrender.com/',
    title: 'Kruthish Portfolio | Full Stack Developer',
    description: 'Modern portfolio showcasing full stack development projects and expertise. Built with Next.js and shadcn/ui.',
    siteName: 'Kruthish Portfolio',
    images: [
      {
        url: 'https://i.ibb.co/hFhySVS7/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Kruthish Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kruthish Portfolio | Full Stack Developer',
    description: 'Modern portfolio showcasing full stack development projects and expertise. Built with Next.js and shadcn/ui.',
    creator: '@kruthish',
    images: ['https://i.ibb.co/hFhySVS7/portfolio.png'],
  },
  alternates: {
    canonical: 'https://kruthishkandula.onrender.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kruthish Kandula',
              url: 'https://kruthishkandula.onrender.com',
              sameAs: [
                'https://www.linkedin.com/in/kruthish-kandula/',
                'https://github.com/kruthishkandula'
              ],
              jobTitle: 'Full Stack Developer',
              image: 'https://i.ibb.co/hFhySVS7/portfolio.png',
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
