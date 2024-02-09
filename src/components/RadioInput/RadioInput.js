import React from 'react';

const RadioInput = ({ name, value, label, onChange }) => {
  return (
    // Container for radio input and label
    <div className='cursor-pointer'>
      {/* Radio input element */}
      <input
        className='m-2 cursor-pointer'
        type='radio'
        id={value}
        name={name}
        value={value}
        // Event handler for radio input change
        onChange={(event) => onChange(event, label)}
      />
      {/* Label for the radio input */}
      <label htmlFor={value} className='cursor-pointer'>
        {label}
      </label>
    </div>
  );
}

export default RadioInput;

