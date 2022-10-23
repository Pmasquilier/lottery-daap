import { useContract, useContractRead } from '@thirdweb-dev/react';
import React from 'react'
import { ethers } from 'ethers';
import { CURRENCY } from '../constants';
import Countdown from './CountdownTimer';

function NextDraw() {

    const { contract } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
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
        <Countdown></Countdown>
    </div>
  )
}

export default NextDraw