import React from 'react'

const Form = ({title}) => {
  return (
    <form className={'flex flex-col items-center' }>
      <h2 className={'mb-2 font-bold text-2xl  text-center'}>{title}</h2>
      <label htmlFor='firstName' className={'mb-3 text-1xl w-full'}>
      First Name:
      </label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        required
        className={'p-2 mb-4 rounded-xl w-full border border-gray-400 border-solid' }
      />
        <label htmlFor='lastName' className={'mb-3 text-1xl w-full'}>
       Last Name:
      </label>
          <input
        type='text'
        id='lastName'
        name='lastName'
        required
        className={'p-2 mb-4 rounded-xl w-full border border-gray-400 border-solid' }
      />

      <label htmlFor='email' className={'mb-3 text-1xl w-full'}>
        Email:
      </label>
      <input
        type='email'
        id='email'
        name='email'
        required
        className={'p-2 mb-4 rounded-xl w-full border border-gray-400 border-solid' }
      />

      <input
        type='submit'
        className={' rounded-xl text-1xl pt-1 pr-4 pl-4 pb-1 text-white bg-blue-700 hover:bg-blue-900 mw-w-auto transition-bg duration-500 ease-in-out cursor-pointer border-none'}
        name='submit'
      />
    </form>
  )
}

export default Form
