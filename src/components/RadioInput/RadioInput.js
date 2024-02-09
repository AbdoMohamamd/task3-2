import React from 'react'

const RadioInput = ({ name, value, label,  onChange }) => {
  return (
    <div className='cursor-pointer '>
      <input
        className='m-2 cursor-pointer '
        type='radio'
        id={value}
        name={name}
        value={value}
       
        onChange={event => onChange(event, label)}
      />
      <label htmlFor={value} className='cursor-pointer'>
        {label}
      </label>
    </div>
  )
}

export default RadioInput
