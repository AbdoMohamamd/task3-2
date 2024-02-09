import React from 'react'
import Select from 'react-select'

const MultiSelectFilter = ({ options, selectedValues, onChange }) => {
  const customStyles = {
    control: provided => ({
      ...provided,
      minWidth: '250px' // Adjust the width as needed
    })
  }

  return (
    <Select
      isMulti
      options={options}
      value={selectedValues}
      onChange={onChange}
      isSearchable={false}
      styles={customStyles}
    />
  )
}

export default MultiSelectFilter
