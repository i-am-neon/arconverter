import type { NextPage } from 'next'
import Head from 'next/head'
import Converter from '../components/Converter'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sol Converter</title>
        <meta name="description" content="Convert Sol to Lamports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col w-full min-h-screen overflow-x-hidden text-white bg-arweave-background selection:bg-arweave-primary selection:text-gray-800'>
        <Header />

        <main className="-mt-32 flex-grow">
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-xl font-semibold">Convert Sol to Lamports and back</h1>
              <p>
                <a href="https://arweave.news/winston-and-the-memory-hole-the-arweave-name-explained/" target='_blank' rel="noreferrer">Winstons</a> are
                Solana&apos;s atomic units - the smallest denomination of Sol.
              </p>
            </div>
          </header>
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-solid border-gray-700 rounded-lg shadow px-5 py-6 sm:px-6">
              <Converter />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Home
