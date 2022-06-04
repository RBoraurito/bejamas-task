import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="pt-[124px] sm:pt-[186px]">
        <Head>
          <title>Bejamas - task</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </>
  )
}

export default Home
