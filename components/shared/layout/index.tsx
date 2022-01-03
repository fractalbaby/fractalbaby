import Head from 'next/head'
import React, { FC } from 'react'
import Navbar from '../../navbar'

const Layout: FC = ({children}) => (
	<div className="flex flex-col items-center justify-center min-h-screen">
		<Head>
			<title>Fractal Baby</title>
			<meta name="description" content="Where are my flapjacks?" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar />
		<main className="flex flex-col w-full bg-fractal flex-1 ">
			<div className='bg-layer-dark flex items-center justify-center flex-1 text-center'>
				{children}
			</div>
		</main>
		<footer className='w-full'>
			<iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1373599183&color=%239a123d&auto_play=true&show_comments=true&show_user=true&show_reposts=false"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: '100'}}><a href="https://soundcloud.com/fractal-baby" title="Fractal Baby" target="_blank" rel="noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Fractal Baby</a> · <a href="https://soundcloud.com/fractal-baby/sets/fractal-baby" title="Fractal Baby" target="_blank" rel="noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>Fractal Baby</a></div>
		</footer>
	</div>
)

export default Layout
