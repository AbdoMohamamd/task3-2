'use client'
import React from 'react'
import Menu from '../Menu/Menu'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import { useState } from 'react'

const NavBar = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-white'>
      {/* Navbar container */}
      <div
        className={
          'min-w p-2 flex m-auto justify-between items-center md:justify-center md:min-w md:p-0'
        }
      >
        {/* Logo */}
        <Link
          href='/'
          className='m-2 rounded-full bg-white hover:bg-gray-300 p-1'
        >
          <Image
            src={logo}
            width={46}
            height={46}
            alt='logo'
            loading={'eager'}
          />
        </Link>

        {/* Menu component */}
        <Menu show={isMenuOpen} />

        {/* Hamburger menu icon */}
        <div
          onClick={() => {
            setMenuOpen(!isMenuOpen)
          }}
          className={`${
            isMenuOpen ? 'fixed right-2 z-10' : ''
          } ${'inline cursor-pointer md:hidden'}`}
        >
          {/* Hamburger menu bars */}
          <div
            className={`${
              isMenuOpen
                ? 'transition-transform transform translate-y-[12px] translate-x-[0px] rotate-[-45deg]'
                : ''
            } ${'w-8 h-1 bg-gray-800 mt-2 mb-2 transition-all duration-400'}`}
          ></div>
          <div
            className={`${
              isMenuOpen ? 'opacity-0' : ''
            } ${'w-8 h-1 bg-gray-800 mt-2 mb-2 transition-all duration-400'}`}
          ></div>
          <div
            className={`${
              isMenuOpen
                ? 'transition-transform transform translate-y-[-12px] translate-x-[0px] rotate-[45deg]'
                : ''
            } ${'w-8 h-1 bg-gray-800 mt-2 mb-2 transition-all duration-400'}`}
          ></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
