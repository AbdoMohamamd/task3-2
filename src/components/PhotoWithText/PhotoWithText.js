import React from 'react';
import Image from 'next/image';

const PhotoWithText = ({ img, text }) => {
  return (
    // Container for the photo and text
    <div className='flex flex-col items-center m-4 shadow-lg rounded-xl w-max'>
      {/* Image component */}
      <Image
        className={'rounded-t-xl'}
        src={img}
        alt='Image1'
        width={350}
        height={350}
      />
      {/* Text below the image */}
      <p className='text-center p-2 font-bold'>{text}</p>
    </div>
  );
}

export default PhotoWithText;
