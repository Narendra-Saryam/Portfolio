import './globals.css'

export const metadata = {
  metadataBase: new URL('https://narendrasaryam.com'),
  title: {
    default: 'Narendra Saryam | MERN Stack Developer & Machine Learning Engineer | Portfolio',
    template: '%s | Narendra Saryam - Developer Portfolio'
  },
  description: 'Narendra Saryam is a skilled MERN Stack Developer and Machine Learning Engineer with expertise in React.js, Next.js, Node.js, Python, TensorFlow, and PyTorch. Explore Narendra Saryam\'s portfolio featuring innovative web development and AI projects. Contact Narendra Saryam for freelance opportunities.',
  keywords: [
    'Narendra Saryam',
    'Narendra Saryam Portfolio',
    'Narendra Saryam Developer',
    'Narendra Saryam MERN Stack',
    'Narendra Saryam Machine Learning',
    'Narendra Saryam React Developer',
    'Narendra Saryam Next.js',
    'Narendra Saryam Projects',
    'Narendra Saryam GitHub',
    'Narendra Saryam LinkedIn',
    'MERN Stack Developer',
    'Machine Learning Engineer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'JavaScript Developer',
    'Python Developer',
    'TensorFlow',
    'PyTorch',
    'Web Development',
    'AI Engineer',
    'Software Engineer',
    'Portfolio',
    'Developer Portfolio',
    'India Developer',
    'Freelance Developer'
  ],
  authors: [{ name: 'Narendra Saryam', url: 'https://github.com/Narendra-Saryam' }],
  creator: 'Narendra Saryam',
  publisher: 'Narendra Saryam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/n1nobg.webp',
    apple: '/n1nobg.webp',
  },
  alternates: {
    canonical: 'https://narendrasaryam.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://narendrasaryam.com',
    title: 'Narendra Saryam | MERN Stack Developer & Machine Learning Engineer',
    description: 'Narendra Saryam - Professional MERN Stack Developer and Machine Learning Engineer. Portfolio showcasing web development and AI projects. Experienced in React, Next.js, Node.js, Python, TensorFlow, and PyTorch.',
    siteName: 'Narendra Saryam - Developer Portfolio',
    images: [
      {
        url: '/n1nobg.webp',
        width: 1200,
        height: 630,
        alt: 'Narendra Saryam - Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narendra Saryam | MERN Stack Developer & ML Engineer',
    description: 'Narendra Saryam - Professional developer specializing in MERN Stack and Machine Learning. View projects and get in touch.',
    images: ['/n1nobg.webp'],
    creator: '@NarendraSaryam',
    site: '@NarendraSaryam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://narendrasaryam.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Narendra Saryam" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <link rel="author" href="https://narendrasaryam.com/humans.txt" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO tags */}
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:creator" content="@NarendraSaryam" />
        <meta name="application-name" content="Narendra Saryam Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Narendra Saryam" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <noscript>
          <div style={{padding: '20px', textAlign: 'center'}}>
            <h1>Narendra Saryam - MERN Stack Developer</h1>
            <p>Please enable JavaScript to view this portfolio website.</p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
