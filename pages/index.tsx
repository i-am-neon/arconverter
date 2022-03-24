import type { NextPage } from 'next'
import Head from 'next/head'
import Converter from '../components/Converter'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arweave Converter</title>
        <meta name="description" content="Convert Arweave to Winston, the atomic unit of AR" />
        <meta property="og:title" content="Arweave Converter" />
        <meta property="og:description" content="Convert Arweave to Winston, the atomic unit of AR" />
        <meta property="og:url" content="https://www.arconverter.com/" />
        <meta property="og:image" content="%PUBLIC_URL%/ogImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#7FF7F9" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col w-full min-h-screen overflow-x-hidden text-white bg-arweave-background selection:bg-arweave-primary selection:text-gray-800'>
        <Header />

        <main className="-mt-32 flex-grow">
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-xl font-semibold">Convert AR to Winston and back</h1>
              <p>
                <a href="https://arweave.news/winston-and-the-memory-hole-the-arweave-name-explained/" target='_blank' rel="noreferrer">Winstons</a> are
                Arweave&apos;s atomic units - the smallest denomination of AR.
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
