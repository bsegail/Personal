import '../styles/variables.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const monaSans = localFont({ src: '../public/fonts/Mona-Sans.woff2', variable: '--font-mona' })

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
