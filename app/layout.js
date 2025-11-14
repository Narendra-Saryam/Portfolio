import './globals.css'

export const metadata = {
  title: 'Narendra Saryam - Portfolio',
  description: 'MERN Stack Developer Portfolio',
  icons: {
    icon: '/n1nobg.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
