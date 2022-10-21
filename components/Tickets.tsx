import React from 'react'

function Tickets() {
  return (
    <div className='w-72 m-2 border-2 border-[#004337] text-white'>
        <div className='p-2 border-2 border-[#004337] m-4'>
            <div className='flex flex-row justify-between px-2'>
                <p className='text-sm'>Price per Ticket</p>
                <p className='text-sm'>0.01 MATIC</p>
            </div>
            <div className='flex flex-row justify-between p-2 border-2 border-[#004337] m-2'>
                <p>TICKETS</p>
                <p className='pr-2 text-lg'>1</p>
            </div>
            <div className='flex py-1 flex-row justify-between px-2 font-bold'>
                <p className='text-xs'>Price per Ticket</p>
                <p className='text-xs'>0.01 MATIC</p>
            </div>
            <div className='flex pt-1 flex-row justify-between px-2'>
                <p className='text-xs'>Service Fees</p>
                <p className='text-xs'>0.001 MATIC</p>
            </div>
            <div className='flex flex-row justify-between px-2'>
                <p className='text-xs'>+ Network fees</p>
                <p className='text-xs'>TBC</p>
            </div>
            <div className='py-2 flex'>
                <button className='m-auto p-2 bg-gray-800'>
                    Buy 1 ticket(s) for 0.01 MATIC
                </button>
            </div>
        </div>
    </div>
  )
}

export default Tickets