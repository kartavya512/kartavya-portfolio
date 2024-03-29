
import './globals.css'

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Kartavya Gupta',
  description: 'Full Stack Web Developer and SEO Expert',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
