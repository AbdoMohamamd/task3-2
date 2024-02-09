import React, { useState, useRef } from 'react'
import RadioInput from '../RadioInput/RadioInput.js'


const IndexPage = () => {
  const [selectedOption, setSelectedOption] = useState(-1)
  const [choosedOption, setChoosedOption] = useState('')
  // Options for the radio input list
  const options = [
    'Coding and Tech',
    'Reading and Literature',
    'Sports and Fitness',
    'Music and Arts',
    'Drawing'
  ]

  // Function to handle radio input change
  const handleRadioChange = event => {
    // console.log(event.target.value)
    setSelectedOption(event.target.value)
  }
  const handleButtonClick = event => {
    if (selectedOption === -1) {
      setChoosedOption('Please select an option')
    } else {
      event.preventDefault()
      setChoosedOption('You are interested in ' + options[selectedOption])
    }
  }

  return (
    <form className='flex flex-col items-center shadow-top    '>
      <h2 className={'m-4 font-bold text-2xl  text-center'}>
        Choose your interest
      </h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <RadioInput
              name='options'
              
              value={index}
              label={option}
              onChange={handleRadioChange}
            />
          </li>
        ))}
      </ul>
      <input
        type='button'
        className={
          'm-4 rounded-xl text-1xl pt-1 pr-4 pl-4 pb-1 text-white bg-blue-700 hover:bg-blue-900 mw-w-auto transition-bg duration-500 ease-in-out cursor-pointer border-none'
        }
        value={'Choose'}
        onClick={handleButtonClick}
      />
      <p className='mb-2'>{choosedOption}</p>
    </form>
  )
}

export default IndexPage
