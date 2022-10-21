import React from 'react'
import { PropagateLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex items-center space-x-2 mb-10'>
            <img className='rounded-lg h-20 w-20'src="/dice-svgrepo-com.svg" alt="dice" />
            <h1 className='text-lg text-white font-bold'>Loading Lottery Dapp</h1>
        </div>
        <PropagateLoader color='white' size={30}></PropagateLoader>
    </div>
  )
}

export default Loading