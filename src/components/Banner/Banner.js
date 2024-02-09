import React from 'react'
import Button from '../Button/Button'
const Banner = ({ title, phrase, background, sectionRef }) => {
  const startNow = () => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <section
      className={
        'mb-4 flex flex-col h-screen justify-center  bg-cover  bg-center text-center bg-no-repeat ' +
        background
      }
    >
      <h1 className='text-4xl mb-1 font-bold text-white  helvetica-bold justify-center '>
        {title}
      </h1>
      <p className='text-2xl   mb-3 text-white '>{phrase}</p>
      <Button label={'Start Now'} onClick={startNow} isMedium={true} />
    </section>
  )
}

export default Banner
