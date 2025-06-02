import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibe Coding Kompetenz - KI-Workshops für Unternehmen',
  description: 'Bringen Sie Projekte, Prozesse & People innerhalb eines Tages auf Next-Level-Produktivität. KI-Power für Ihre Teams mit Vibe Coding Workshops.',
  keywords: 'KI Workshop, Vibe Coding, Künstliche Intelligenz, Unternehmen, Produktivität, Prototyping, Full-Stack, Digitalisierung',
  authors: [{ name: 'Jonas Jabari' }, { name: 'Steffen Ackermann' }],
  openGraph: {
    title: 'Vibe Coding Kompetenz - KI-Workshops für Unternehmen',
    description: 'Bringen Sie Projekte, Prozesse & People innerhalb eines Tages auf Next-Level-Produktivität. KI-Power für Ihre Teams.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Coding Kompetenz - KI-Workshops für Unternehmen',
    description: 'KI-Power für Ihre Teams - Workshop buchen und sofort produktiver werden.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
