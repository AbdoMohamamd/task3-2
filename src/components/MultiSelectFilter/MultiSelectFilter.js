'use client'
import React from 'react';
import Select from 'react-select';

const MultiSelectFilter = ({ options, selectedValues, onChange }) => {
  const customStyles = {
    control: provided => ({
      ...provided,
      minWidth: '250px', // Adjust the width as needed
    }),
  };

  // Generate a unique id dynamically on the client side
  const uniqueId = React.useRef(
    `multi-select-filter-${Math.floor(Math.random() * 100000)}`
  );

  return (
    <Select
    id={options.value}
      key={options.value}
      isMulti
      options={options}
      value={selectedValues}
      onChange={onChange}
      isSearchable={false}
      styles={customStyles}
    />
  );
};

export default MultiSelectFilter;
