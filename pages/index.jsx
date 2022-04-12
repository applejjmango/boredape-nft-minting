import Head from 'next/head'

import { Navbar } from '../components'
// import { getArts } from '../services/getArts'

const Home = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Umeevengers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  )
}

export default Home
