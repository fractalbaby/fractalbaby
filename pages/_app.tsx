import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { defaultTheme, ThemeProvider, Preflight } from '@xstyled/emotion'
import { useEffect, useState } from 'react'

const theme = {
  ...defaultTheme,
	animations: {
    spin: 'x-spin 1s linear infinite',
    ping: 'x-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'x-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'x-bounce 1s infinite',
  },
}

const trackList = [
	'663488027',
	'974430214',
	'974430154',
	'974430100',
	'974430055',
	'974430031',
	'618003534',
	'726682450',
	'809553616',
	'767327164',
	'1175300887',
	'1175300827',
	'1175300791',
	'1175300743',
	'1175300731',
	'1175300692',
	'1175300659',
	'1175300602',
]

function App({ Component, pageProps }: AppProps) {
  const [trackId, setTrackId] = useState<string | undefined>()

	const setRandomTrack = () => {
		const index = Math.floor(Math.random() * 100) % trackList.length
		setTrackId(trackList[index])
	}

	useEffect(() => {
		setRandomTrack()
	}, [])

  return(
    <ThemeProvider theme={theme}>
      <Preflight />
      <Component {...pageProps} />
      {
        trackId !== undefined &&
        <footer className='w-full absolute bottom-0'>
					<button onClick={setRandomTrack} className='bg-white p-2 float-right font-bold change-track'>Change Track</button>
          <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%239a123d&auto_play=true&show_comments=true&show_user=true&show_reposts=false`}></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: '100'}}><a href="https://soundcloud.com/fractal-baby" title="Fractal Baby" target="_blank" rel="noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Fractal Baby</a> · <a href="https://soundcloud.com/fractal-baby/sets/fractal-baby" title="Fractal Baby" target="_blank" rel="noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Fractal Baby</a></div>
        </footer>
      }
    </ThemeProvider>
  ) 
}

export default App
