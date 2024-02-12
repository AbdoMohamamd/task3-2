import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = index => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className='flex flex-col items-center'>
      {' '}
      <div className=' container text-center mb-5 flex flex-col items-center  '>
        <h2 className={'mb-5 font-bold text-2xl text-center'}>
          Frequently asked questions
        </h2>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center w-8/12 shadow-lg  bg-gray-100 p-2 cursor-pointer rounded-md '
            onClick={() => onTitleClick(index)}
          >
            <div className='flex justify-between px-4 '>
              {' '}
              <h3 className='text-lg font-semibold'>{item.title}</h3>
              <span className='text-xl'>
                {index === activeIndex ? '-' : '+'}
              </span>
            </div>

            {index === activeIndex && (
              <div className='p-4 bg-gray-100 text-start   '>
                <hr class=' border-black mb-4' />
                <p className='mt-6'>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Accordion
