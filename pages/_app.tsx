import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { defaultTheme, ThemeProvider, Preflight } from '@xstyled/emotion'

const theme = {
  ...defaultTheme,
}

function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <Preflight />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default App
