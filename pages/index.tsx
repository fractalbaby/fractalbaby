import type { NextPage } from 'next'
import Layout from '../components/shared/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl font-bold text-white">
        Where are my flapjacks?
      </h1>
    </Layout>
  )
}

export default Home
