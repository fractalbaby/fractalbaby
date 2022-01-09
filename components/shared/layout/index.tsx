import Head from 'next/head'
import React, { FC, useEffect, useState } from 'react'
import Navbar from '../../navbar'

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
const Layout: FC = ({children}) => {
	const [trackId, setTrackId] = useState<string | undefined>()

	useEffect(() => {
		const index = Math.floor(Math.random() * 100) % trackList.length
		setTrackId(trackList[index])
	}, [])

	return (
	<div className="flex flex-col items-center justify-center min-h-screen">
		<Head>
			<title>Fractal Baby</title>
			<meta name="description" content="Where are my flapjacks?" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar />
		<main className="flex w-full bg-fractal flex-1 ">
			<div className='bg-layer-dark flex flex-col items-center justify-center flex-1 text-center'>
				{children}
			</div>
		</main>
		{
			trackId !== undefined &&
			<footer className='w-full'>
				<iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%239a123d&auto_play=true&show_comments=true&show_user=true&show_reposts=false`}></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: '100'}}><a href="https://soundcloud.com/fractal-baby" title="Fractal Baby" target="_blank" rel="noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Fractal Baby</a> · <a href="https://soundcloud.com/fractal-baby/sets/fractal-baby" title="Fractal Baby" target="_blank" rel="noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Fractal Baby</a></div>
			</footer>
		}
	</div>
	)
}

export default Layout
