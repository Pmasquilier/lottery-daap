import React from 'react'

function NextDraw() {
  return (
    <div className='p-3 w-96 text-center bg-[#09191C] text-white border-2 border-[#004337]'>
        <p className='text-3xl pb-2'>NextDraw</p>
        <div className='flex flex-row justify-around'>
            <div className='px-4 py-2 m-1 w-48 border-2 border-[#004337] flex flex-col text-left'>
                <p className='text-xs'>Total pool</p>
                <p>0.0 Matic</p>
            </div>
            <div className='px-4 py-2 m-1 w-48 border-2 border-[#004337] flex flex-col text-left'>
                <p className='text-xs'>Tickets Remaining</p>
                <p>100</p>
            </div>
        </div>
        <p className='text-l pt-2 pb-1'>Ticket Sales have now CLOSED for this draw!</p>
        <div className='flex justify-evenly'>
            <div>
                <div className='w-24 h-16 flex bg-[#004337]'>
                    <p className='m-auto text-4xl text-white'>0</p>
                </div>
                <p className='text-xs m-1 font-bold'>HOURS</p>
            </div>
            <div>
                <div className='w-24 h-16 flex bg-[#004337]'>
                    <p className='m-auto text-4xl text-white'>0</p>
                </div>
                <p className='text-xs m-1 font-bold'>MINUTES</p>
            </div>
            <div>
                <div className='w-24 h-16 flex bg-[#004337]'>
                    <p className='m-auto text-4xl text-white'>0</p>
                </div>
                <p className='text-xs m-1 font-bold'>SECONDS</p>
            </div>
           
        </div>

    </div>
  )
}

export default NextDraw