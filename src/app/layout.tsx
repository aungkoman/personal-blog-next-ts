import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'jkelly', template: '%s · jkelly' },
  description: 'Writing on software, systems, and the web.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/" className="site-name">jkelly</a>
            <nav className="site-nav">
              <a href="/">Writing</a>
              <a href="https://github.com/jkelly" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
          </div>
        </header>

        <main className="container">
          {children}
        </main>

        <footer className="site-footer">
          <div className="container">
            © {new Date().getFullYear()} jkelly
          </div>
        </footer>
      </body>
    </html>
  )
}
