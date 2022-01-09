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
		<main className="flex w-full bg-fractal flex-1 ">
			<div className='bg-layer-dark flex flex-col items-center justify-center flex-1 text-center'>
				{children}
			</div>
		</main>
	</div>
)

export default Layout
