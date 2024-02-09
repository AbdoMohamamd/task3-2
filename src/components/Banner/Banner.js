import React from 'react'
import Button from '../Button/Button'

const Banner = ({ title, phrase, background, sectionRef }) => {
  // Scroll to the specified section when the "Start Now" button is clicked
  const startNow = () => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <section
      // Apply dynamic classes for styling and background image
      className={
        'mb-4 flex flex-col h-screen justify-center  bg-cover  bg-center text-center bg-no-repeat ' +
        background
      }
    >
      {/* Title of the banner */}
      <h1 className='text-4xl mb-1 font-bold text-white  helvetica-bold justify-center '>
        {title}
      </h1>

      {/* Phrase or description in the banner */}
      <p className='text-2xl mb-3 text-white '>{phrase}</p>

      {/* "Start Now" button */}
      <Button label={'Start Now'} onClick={startNow} isMedium={true} />
    </section>
  )
}

export default Banner
