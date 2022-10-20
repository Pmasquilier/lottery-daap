import React from 'react'

interface Props {
    title: string;
    isActive?: boolean;
}

function NavButton({ title, isActive = false}: Props) {
  return (
    <button className={` ${isActive && "bg-[#036756]"} hover:bg-[#036756] px-2 py-2 text-white rounded font-bold`}>{title}</button>
  )
}

export default NavButton