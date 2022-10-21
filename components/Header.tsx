import React from 'react'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useAddress, useDisconnect } from "@thirdweb-dev/react";


const Header = () => {
    const address = useAddress();
    const disconnect = useDisconnect();

  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
        <div className='flex items-center space-x-2'>
            <img src="/dice-svgrepo-com.svg" alt="dice" className='rounded-sm h-20 w-20'/>
            <div>
                <h1 className='text-white text-lg font-bold'>Crypto draw</h1>
                <p className='text-xs text-emerald-500 truncate'>User {address?.substring(0,5)}...{address?.substring(address.length-5, address.length)}</p>
            </div>
        </div>
        <div className='hidden md:flex justify-center items-center rounded-md md:col-span-3'>
            <div className='bg-[#0A1F1C] flex space-x-2 p-4'>
                <NavButton isActive={true} title='Buy Ticket'></NavButton>
                <NavButton onClick={disconnect} title='Logout'></NavButton>
            </div>
        </div>

        <div className='flex flex-col ml-auto text-right'>
            <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer'></Bars3BottomRightIcon>
            <span className='md:hidden'>
                <NavButton onClick={disconnect} title="Logout"></NavButton>
            </span>
        </div>

    </header>
  )
}

export default Header