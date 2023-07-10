import React, { useEffect } from 'react'
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import NavbarItems from './NavbarItems'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'
import { useState } from 'react';
import { useCallback } from 'react';

const TOP_OFFSET = 25

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.screenY)
      if (window.screenY >= TOP_OFFSET) {
        setShowBackground(true)
        console.log("1");
      } else {
        console.log("2");
        setShowBackground(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    console.log("3");
    return () => {
      console.log("4");
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(
    () => {
      setShowMobileMenu(current => !current)
    },
    [],
  )

  const toggleAccountMenu = useCallback(
    () => {
      setShowAccountMenu(current => !current)
    },
    [],
  )


  return (
    <div className='w-full fixed z-40'>
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>

        <img className='h-4 lg:h-7' src="/images/logo.png" />

        <div className="flex-row  ml-8 gap-7 hidden lg:flex">
          <NavbarItems label="Home" />
          <NavbarItems label="Series" />
          <NavbarItems label="Films" />
          <NavbarItems label="New & Popular" />
          <NavbarItems label="My List" />
          <NavbarItems label="Browse by languages" />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">
            Browse
          </p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative" onClick={toggleAccountMenu}>
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden ">
              <img src="/images/default-blue.png" />
            </div>
            <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
