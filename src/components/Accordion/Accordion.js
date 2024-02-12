import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = index => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className=' flex flex-col items-center shadow-top '>
      {' '}
      <div className=' container text-center mb-5 flex flex-col items-center  '>
        <h2 className={'my-5 font-bold text-2xl text-center'}>
          Frequently asked questions
        </h2>
        {items.map((item, index) => (
          <div
            key={index}
            className={
              'flex flex-col justify-center w-8/12 shadow-lg  bg-gray-100 p-2 cursor-pointer rounded-xl'
            }
            onClick={() => onTitleClick(index)}
          >
            <div className='flex justify-between p-2  '>
              {' '}
              <h3 className='text-sm md:text-lg  font-semibold'>
                {item.title}
              </h3>
              <span className='text-sm md:text-lg'>
                {index === activeIndex ? '-' : '+'}
              </span>
            </div>

            <div
              className={` bg-gray-100 text-start transition-all ease-in-out overflow-hidden  ${
                index === activeIndex ? 'max-h-96' : 'max-h-0 '
              }  `}
            >
               <hr className=' border-black mb-4' />
              <p className='mt-6'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Accordion
