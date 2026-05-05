import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxTrack – Auto-Categorize Freelancer Expenses for Taxes',
  description: 'Connect your bank account and let AI automatically categorize your freelancer business expenses for tax preparation. Save hours at tax time.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="57ced14e-5f45-4f4d-b0c0-b34e6982b839"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
