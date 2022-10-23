import { useContract, useContractRead } from '@thirdweb-dev/react';
import React from 'react'
import { CURRENCY } from '../constants';
import { ethers } from 'ethers';

function History() {

  const { contract } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
  const { data: lastWinner } = useContractRead(contract, "lastWinner")
  const { data: lastWinningAmount } = useContractRead(contract, "lastWinnerAmount")


  return (
    <div className='flex flex-col md:flex-row ml-auto md:space-x-2 mr-2'>
        <p className='text-white'>
            Last Winner: {lastWinner} 
        </p>
        <p className='text-white'>
            Previous Winnings: {lastWinningAmount && ethers.utils.formatEther(lastWinningAmount.toString())} {CURRENCY}
        </p>
    </div>
  )
}

export default History