import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/images/logo.png'
import Twitter from '../../../public/images/twitter.jpg'
import Facebook from '../../../public/images/facebook.png'

const Footer = () => {
  return (
    <footer
      // Footer container styling using Tailwind CSS classes
      className={
        'p-3 flex w-full justify-around shadow-[0px_0px_10px_rgba(0,0,0,0.5)] bg-white text-black'
      }
    >
      {/* Logo section */}
      <div className={'inline w-10 md:w-12'}>
        <Link href='/'>
          {/* Logo with a link to the homepage */}
          <Image
            loading={'eager'}
            src={Logo}
            className={'mx-auto'}
            width={50}
            height={50}
            alt='Footer Logo'
          />
        </Link>
      </div>

      {/* Navigation links section */}
      <div className={'flex'}>
        {/* Home link */}
        <Link
          href='/'
          className={
            'block mt-auto mb-auto mr-4 ml-4 hover:text-gray-400 hover:underline sm:text-xs'
          }
        >
          Home
        </Link>

        {/* About Us link */}
        <Link
          href='/about-us'
          className={
            'block mt-auto mb-auto mr-4 ml-4 hover:text-gray-400 hover:underline sm:text-xs'
          }
        >
          About Us
        </Link>

        {/* Contact Us link */}
        <Link
          href='/contact-us'
          className={
            'block mt-auto mb-auto mr-4 ml-4 hover:text-gray-400 hover:underline sm:text-xs'
          }
        >
          Contact Us
        </Link>
      </div>

      {/* Social media links section */}
      <div className={'flex'}>
        {/* Facebook link */}
        <Link href='/' target='_blank' className={'m-auto'}>
          <Image src={Facebook} width={20} height={20} alt='facebook' />
        </Link>

        {/* Twitter link */}
        <Link href='/' target='_blank' className={'m-auto'}>
          <Image src={Twitter} alt='Twitter' width={20} height={20} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
