import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'

function Login() {

  const connectWithMetamask = useMetamask();
  return (
    <div  className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
            <img className='rounded w-56 h-56 mb-10'src="/dice-svgrepo-com.svg" alt="dice" />
            <h1 className='text-white text-6xl font-bold'>Welcome to Lottery Dapp</h1>
            <h2 className='text-white mt-5'>Get started by login with Metamask</h2>
            <button onClick={connectWithMetamask} className='bg-white px-8 py-5 rounded-lg mt-10 font-bold shadow-lg'>Login</button>
        </div>
    </div>
  )
}

export default Login