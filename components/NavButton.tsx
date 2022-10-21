import React from 'react'

interface Props {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

function NavButton({ title, isActive = false, onClick}: Props) {
  return (
    <button onClick={onClick} className={` ${isActive && "bg-[#036756]"} hover:bg-[#036756] px-2 py-2 text-white rounded font-bold`}>{title}</button>
  )
}

export default NavButton