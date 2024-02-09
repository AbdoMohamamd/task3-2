import React, { useRef, useState } from 'react'
import Banner from '@/components/Banner/Banner'
import PhotoWithText from '@/components/PhotoWithText/PhotoWithText'

import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import img3 from '../../public/images/img3.png'
import img4 from '../../public/images/img4.jpg'
import img5 from '../../public/images/img5.jpg'
import img6 from '../../public/images/img6.jpg'

import Filter from '@/components/FilterDropdown.js/FilterDropdown'
import FilterDropdown from '@/components/FilterDropdown.js/FilterDropdown'
import MultiSelectFilter from '@/components/MultiSelectFilter/MultiSelectFilter'
//first we import all the images and component we are gonna use in the AboutUs page
const AboutUs = () => {
  const imgSectionRef = useRef(null) //The reference we are gonna use in the start now function
  const options = [
    { value: 0, label: 'Waves art', img: img1 },
    { value: 1, label: 'Rocks at the beach', img: img2 },
    { value: 2, label: 'Blue flower', img: img3 },
    { value: 3, label: 'Sunset', img: img4 },
    { value: 4, label: 'Fox', img: img5 },
    { value: 5, label: 'Night City', img: img6 }
  ]
  const [selectedValues, setSelectedValues] = useState([])

  const handleMultiSelectChange = selectedOptions => {
    setSelectedValues(selectedOptions)
  }
  return (
    <div>
      {' '}
      <Banner
        title={'Welcome to the AboutUs page'}
        phrase={'Here are some information aboutUs'}
        background={'bg-aboutUs'}
        sectionRef={imgSectionRef}
        //Adding the dynamic banner component for the AboutUs page
      />
      <section
        className=' flex  flex-wrap justify-center mt-0 mb-4 mx-auto text-center container '
        ref={imgSectionRef}
      >
        <div className='w-full flex justify-end'>
          <MultiSelectFilter
            options={options}
            selectedValues={selectedValues}
            onChange={handleMultiSelectChange}
          />
        </div>

        {selectedValues.length === 0
          ? options.map((card, index) => (
              <PhotoWithText img={card.img} text={card.label} key={index} />
            ))
          : selectedValues.map((card, index) => (
              <PhotoWithText img={card.img} text={card.label} key={index} />
            ))}
      </section>
    </div>
  )
}

export default AboutUs
