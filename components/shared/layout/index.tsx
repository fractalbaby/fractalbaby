import styled, { keyframes } from '@xstyled/emotion'
import Head from 'next/head'
import React, { FC } from 'react'
import Navbar from '../../navbar'

const Content = styled.main({
	overflow: 'hidden',
	position: 'relative',
})

const bounce = keyframes`
  from, to {
    transform: rotate(0);
  }

  50% {
    transform: rotate(20deg) scale(1.5);
  }
`
const Background = styled.div({
	position: 'absolute',
	zIndex: -1,
	animation: `${bounce} 180s ease infinite`,
})



const Layout: FC = ({children}) => (
	<div className="flex flex-col items-center justify-center min-h-screen">
		<Head>
			<title>Fractal Baby</title>
			<meta name="description" content="Where are my flapjacks?" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar />
		<Content className="flex w-full flex-1 ">
			<Background className="flex w-full h-full bg-fractal flex-1 " />
			<div className='bg-layer-dark flex flex-col items-center justify-center flex-1 text-center'>
				{children}
			</div>
		</Content>
	</div>
)

export default Layout
