import { useAddress } from '@thirdweb-dev/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';

const Home: NextPage = () => {

  const address = useAddress();
  console.log(address);

  if (!address) {
    return <Login></Login>
  }
  
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col'>
      <Head>
        <title>Dapp Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </div>

  )
}

export default Home
