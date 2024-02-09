import React from 'react'
import Image from 'next/image'

const Button = ({
  label,
  icon,
  onClick,
  blueBackground // Boolean flag to determine the button background color
}) => {
  return (
    <button
      onClick={onClick}
      className={
        // Dynamic classes for styling the button based on props
        `${
          blueBackground
            ? 'bg-blue-500 hover:bg-blue-800'
            : 'bg-white hover:bg-gray-500'
        } font-bold p-2 m-2 sm:p-2 md:p-3 lg:p-4 text-sm md:text-lg lg:text-xl xxl:text-2xl rounded-xl text-black cursor-pointer border-none transition-bg duration-500 ease-in-out mx-auto min-w-0`
      }
    >
      {/* Display an optional icon */}
      {icon && <Image src={icon} width={20} height={20} alt='logo' />}

      {/* Display the button label */}
      {label}
    </button>
  )
}

export default Button
