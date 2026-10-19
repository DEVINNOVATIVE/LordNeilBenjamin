import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { PageTransition } from '@/components/shared/page-transition'
import './globals.css'

const siteUrl = 'https://www.lordneilbenjamingibson.com'
const siteTitle = 'Lord Neil Benjamin | Purpose in Motion'
const siteDescription =
  'The official blog and portfolio of Lord Neil Benjamin Gibson — businessman, philanthropist, international investor, and founder of LNBG International Investments.'
const socialImage = '/og-banner.png'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Lord Neil Benjamin',
  },
  description: siteDescription,
  applicationName: 'Lord Neil Benjamin',
  manifest: '/favicon_io/site.webmanifest',
  keywords: [
    'Lord Neil Benjamin',
    'Lord Neil Benjamin Gibson',
    'businessman',
    'philanthropist',
    'international investor',
    'LNBG International Investments',
  ],
  authors: [{ name: 'Lord Neil Benjamin Gibson', url: siteUrl }],
  creator: 'Lord Neil Benjamin Gibson',
  publisher: 'Lord Neil Benjamin Gibson',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/feed/', title: 'Lord Neil Benjamin Feed' },
        { url: '/comments/feed/', title: 'Lord Neil Benjamin Comments Feed' },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
   icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon_io/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon_io/android-chrome-512x512.png',
      },
    ],
  },
  // icons: {
  //   icon: [
  //     {
  //       url: '/icon-light-32x32.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon-dark-32x32.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '/icon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  //   other: [
  //     {
  //       rel: 'android-chrome-192x192',
  //       url: '/apple-icon.png',
  //       sizes: '180x180',
  //       type: 'image/png',
  //     },
  //     {
  //       rel: 'android-chrome-512x512',
  //       url: '/icon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  // },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Lord Neil Benjamin',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
           url: '/og-banner.png',
        alt: 'Lord Neil Benjamin Gibson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="profile" href="https://gmpg.org/xfn/11" />
      </head>
      <body className="antialiased">
        <PageTransition>{children}</PageTransition>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
