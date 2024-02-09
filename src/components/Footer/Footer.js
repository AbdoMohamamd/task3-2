import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/images/logo.png'
import Twitter from '../../../public/images/twitter.jpg'
import Facebook from '../../../public/images/facebook.png'
const Footer = () => {
  return (
    <footer
      className={
        'p-3 flex w-full justify-around shadow-[0px_0px_10px_rgba(0,0,0,0.5)] bg-white text-black '
      }
    >
      <div className={'inline w-10  md:w-12  '}>
        {' '}
        <Link href='/'>
          <Image
            loading={'eager'}
            src={Logo}
            className={'mx-auto '}
            width={50}
            height={50}
            alt='Footer Logo'
          />
        </Link>
      </div>
      <div className={'flex'}>
        <Link
          href='/'
          className={
            ' block mt-auto mb-auto mr-4 ml-4 hover:text-gray-400 hover:underline sm:text-xs'
          }
        >
          Home
        </Link>
        <Link
          href='/about-us'
          className={
            ' block mt-auto mb-auto mr-4 ml-4 hover:text-gray-400 hover:underline sm:text-xs'
          }
        >
          About Us
        </Link>
        <Link
          href='/contact-us'
          className={
            ' block mt-auto mb-auto mr-4 ml-4 hover:text-gray-400 hover:underline sm:text-xs'
          }
        >
          Contact Us
        </Link>
      </div>

      <div className={'flex'}>
        <Link href='/' target='_blank' className={'m-auto'}>
          <Image src={Facebook} width={20} height={20} alt='facebook' />
        </Link>
        <Link href='/' target='_blank' className={'m-auto'}>
          <Image src={Twitter} alt='Twitter' width={20} height={20} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
