import React, { useState } from 'react'

const FilterDropdown = ({ options, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(-1)

  const handleFilterChange = event => {
    const value = event.target.value
    setSelectedFilter(value)
    onFilterChange(value)
  }

  return (
    <div className='mb-4  w-max'>
      <label className='block text-sm font-medium text-gray-700 text-start '>
        Filter by:
      </label>
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'
      >
        {options.map(option => (
          <option
            key={option.index}
            value={option.index}
            className='rounded-full'
          >
            {option.option}
            
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterDropdown
