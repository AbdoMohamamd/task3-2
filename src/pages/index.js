import Banner from '../components/Banner/Banner'
import PhotoWithText from '../components/PhotoWithText/PhotoWithText'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import img3 from '../../public/images/img3.png'
import img4 from '../../public/images/img4.jpg'
import img5 from '../../public/images/img5.jpg'
import img6 from '../../public/images/img6.jpg'
import React, { useRef, useState } from 'react'
import Form from '../components/Form/Form'
import FilterDropdown from '@/components/FilterDropdown.js/FilterDropdown'
import MultiSelectFilter from '@/components/MultiSelectFilter/MultiSelectFilter'
export default function Home () {
  const options = [
    { value: 0, label: 'Waves art', img: img1 },
    { value: 1, label: 'Rocks at the beach', img: img2 },
    { value: 2, label: 'Blue flower', img: img3 },
    { value: 3, label: 'Sunset', img: img4 },
    { value: 4, label: 'Fox', img: img5 },
    { value: 5, label: 'Night City', img: img6 }
  ]

  const imgSectionRef = useRef(null)
  const [selectedValues, setSelectedValues] = useState([])

  const handleMultiSelectChange = selectedOptions => {
    setSelectedValues(selectedOptions)
  }

  return (
    <div>
      <Banner
        title={'Welcome to the home page'}
        phrase={'This is the main page of the website'}
        background={'bg-banner'}
        sectionRef={imgSectionRef}
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
