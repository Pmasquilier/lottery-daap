import { useAddress, useContract } from '@thirdweb-dev/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Loading from '../components/Loading';
import Login from '../components/Login';

const Home: NextPage = () => {

  const address = useAddress();
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);

  if (!address) {
    return <Login></Login>
  }

  if (isLoading){
    return <Loading></Loading>
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
