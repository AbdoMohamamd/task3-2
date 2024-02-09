import React from 'react'
import Image from 'next/image'

const PhotoWithText = ({img,text}) => {
    
  return (
   
  
    <div className=" flex flex-col  items-center mb-2 md:m-1"><Image  className={'rounded-xl'} src={img} alt="Image1" width={350} height={350} /> 
        <p className="text-center p-2 font-bold">{text}</p>
    </div>
 
  )
}

export default PhotoWithText