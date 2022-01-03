import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Fractal Baby</title>
        <meta name="description" content="Where are my flapjacks?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-white">
            Where are my flapjacks?
          </h1>
        </main>
    </div>
  )
}

export default Home
