import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {
  return (
    <div className='w-full fixed z-40'>
        <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">

            <img className='h-4 lg:h-7' src="/images/logo.png"/>

            <div className="flex-row  ml-8 gap-7  lg:flex">
                <NavbarItems label="Home"/>
                <NavbarItems label="Series"/>     
                <NavbarItems label="Films"/>
                <NavbarItems label="New & Popular"/>
                <NavbarItems label="My List"/>
                <NavbarItems label="Browse by languages"/>
            </div>
            <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                
            </div>
        </div>
    </div>
  )
}
