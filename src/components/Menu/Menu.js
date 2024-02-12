import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

const Menu = ({ show }) => {
  return (
    <ul
      // Conditional classes for mobile and desktop views
      className={`flex-col max-h-full fixed justify-center top-0 right-0 left-0 list-none bg-white max-w-full md:flex md:static md:flex-row md:justify-end md:w-100 z-10 ${
        show ? 'flex' : 'hidden'
      }`}
    >
      <li>
        <ul className={'mt-12 mb-12 mr-0 ml-0 list-none md:hidden'}>
          <li className='text-center'>
            {/* Logo link */}
            <Link
              href='/'
              className={
                'w-12 bg-white rounded-full hover:bg-gray-200 inline-block'
              }
            >
              <picture>
                {/* Logo image */}
                <Image
                  src={logo}
                  width={46}
                  height={46}
                  alt='logo'
                  loading={'eager'}
                  className='m-auto'
                />
              </picture>
            </Link>
          </li>
        </ul>
      </li>

      {/* Home link */}
      <li className='text-center'>
        <Link
          href='/'
          className='max-w-full p-8 text-black block hover:bg-gray-200'
        >
          Home
        </Link>
      </li>

      {/* About Us link */}
      <li className='text-center'>
        <Link
          href='/about-us'
          className='max-w-full p-8 text-black block hover:bg-gray-200'
        >
          About Us
        </Link>
      </li>

      {/* Contact Us link */}
      <li className='text-center'>
        <Link
          href='/contact-us'
          className='max-w-full p-8 text-black block hover:bg-gray-200'
        >
          Contact Us
        </Link>
      </li>
    </ul>
  )
}

export default Menu
