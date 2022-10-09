import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Drop Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className=''>Welcome to the NFT Drop Dapp</h1>
    </div>
  )
}

export default Home
