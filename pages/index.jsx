import Head from 'next/head'
import Link from 'next/link'
import { config } from '../dapp.config'

const Home = () => {
  return (
    <div className=" flex h-full min-h-screen w-full flex-col overflow-hidden bg-brand-light">
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This is Start Point
    </div>
  )
}

export default Home
