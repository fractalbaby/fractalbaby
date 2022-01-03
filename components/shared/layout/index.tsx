import Head from 'next/head'
import React, { FC } from 'react'
import Navbar from '../../navbar'

const Layout: FC = ({children}) => (
	<div className="bg-gray-900 flex flex-col items-center justify-center min-h-screen">
		<Head>
			<title>Fractal Baby</title>
			<meta name="description" content="Where are my flapjacks?" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar />
		<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
			{children}
		</main>
	</div>
)

export default Layout
