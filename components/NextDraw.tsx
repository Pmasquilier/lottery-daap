import { useContract, useContractRead } from '@thirdweb-dev/react';
import React from 'react'
import { ethers } from 'ethers';
import { CURRENCY } from '../constants';

function NextDraw() {

    const { contract } = useContract("0xe3072A0dDD8c79Fece6dc5679033207511ca637c");
    const { data: remainingTickets } = useContractRead(contract, "RemainingTickets")
    const { data: currentWinningReward } = useContractRead(contract, "CurrentWinningReward")

  return (
    <div className='p-3 w-96 text-center bg-[#09191C] text-white border-2 border-[#004337] rounded-lg'>
        <p className='text-3xl pb-2'>NextDraw</p>
        <div className='flex flex-row justify-around'>
            <div className='px-4 py-2 m-1 w-48 border-2 border-[#004337] flex flex-col text-left'>
                <p className='text-xs'>Total pool</p>
                <p>{currentWinningReward && ethers.utils.formatEther(currentWinningReward.toString())} {CURRENCY}</p>
            </div>
            <div className='px-4 py-2 m-1 w-48 border-2 border-[#004337] flex flex-col text-left'>
                <p className='text-xs'>Tickets Remaining</p>
                <p>{remainingTickets?.toNumber()}</p>
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