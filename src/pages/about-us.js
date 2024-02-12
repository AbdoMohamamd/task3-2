import React, { useRef, useState } from 'react'
import Banner from '@/components/Banner/Banner'
import PhotoWithText from '@/components/PhotoWithText/PhotoWithText'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import img3 from '../../public/images/img3.png'
import img4 from '../../public/images/img4.jpg'
import img5 from '../../public/images/img5.jpg'
import img6 from '../../public/images/img6.jpg'
import MultiSelectFilter from '@/components/MultiSelectFilter/MultiSelectFilter'
import SwiperBanner from '@/components/SwiperBanner/SwiperBanner'

const AboutUs = () => {
  const imgSectionRef = useRef(null) // Reference for scrolling
  const options = [
    { value: 0, label: 'Waves art', img: img1 },
    { value: 1, label: 'Rocks at the beach', img: img2 },
    { value: 2, label: 'Blue flower', img: img3 },
    { value: 3, label: 'Sunset', img: img4 },
    { value: 4, label: 'Fox', img: img5 },
    { value: 5, label: 'Night City', img: img6 }
  ]
  const slides = [
    {
      id: 0,
      title: 'Welcome to creohub',
      label: 'At creohub we offer internships for creative people',
      img: 'bg-slide1'
    },
    {
      id: 1,
      title: 'Founded in 2013',
      label: 'We have 10+ years of experience in web and software development',
      img: 'bg-slide2'
    },
    {
      id: 2,
      title: 'Why choose Us',
      label: 'Experience , Quality , Innovation',
      img: 'bg-slide3'
    }
  ]
  const [selectedValues, setSelectedValues] = useState([])

  const handleMultiSelectChange = selectedOptions => {
    setSelectedValues(selectedOptions)
  }

  return (
    <div>
      {/* Banner component */}
      {/* <Banner
        title={'Welcome to the AboutUs page'}
        phrase={'Here are some information about Us'}
        background={'bg-aboutUs'}
        sectionRef={imgSectionRef}
      /> */}
       <SwiperBanner slides={slides} />
      {/* Section with images and filters */}
      <section
        className='flex flex-wrap justify-center mt-0 mb-4 mx-auto text-center container'
        ref={imgSectionRef}
      >
        <div className='w-full flex justify-end'>
          {/* MultiSelectFilter component */}
          <MultiSelectFilter
            options={options}
            selectedValues={selectedValues}
            onChange={handleMultiSelectChange}
          />
        </div>

        {/* Displaying images based on selected values */}
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
