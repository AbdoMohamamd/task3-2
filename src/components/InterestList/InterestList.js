import React, { useState } from 'react'
import RadioInput from '../RadioInput/RadioInput.js'

const InterestList = () => {
  // State to track the selected radio option and the result message
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
    setSelectedOption(event.target.value)
  }

  // Function to handle button click
  const handleButtonClick = event => {
    if (selectedOption === -1) {
      // If no option is selected, set a message
      setChoosedOption('Please select an option')
    } else {
      // If an option is selected, set a message with the chosen option
      event.preventDefault()
      setChoosedOption('You are interested in ' + options[selectedOption])
    }
  }

  return (
    <form className='flex flex-col items-center shadow-top'>
      {/* Form title */}
      <h2 className={'m-4 font-bold text-2xl text-center'}>
        Choose your interest
      </h2>

      {/* Radio input options */}
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {/* RadioInput component for each option */}
            <RadioInput
              name='options'
              value={index}
              label={option}
              onChange={handleRadioChange}
            />
          </li>
        ))}
      </ul>

      {/* Choose button */}
      <input
        type='button'
        className={
          'm-4 rounded-xl text-1xl pt-1 pr-4 pl-4 pb-1 text-white bg-blue-700 hover:bg-blue-900 mw-w-auto transition-bg duration-500 ease-in-out cursor-pointer border-none'
        }
        value={'Choose'}
        onClick={handleButtonClick}
      />

      {/* Result message */}
      <p className='mb-2'>{choosedOption}</p>
    </form>
  )
}

export default InterestList
