import React, { useRef, useState } from 'react'
import Banner from '../components/Banner/Banner'
import PhotoWithText from '../components/PhotoWithText/PhotoWithText'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import img3 from '../../public/images/img3.png'
import img4 from '../../public/images/img4.jpg'
import img5 from '../../public/images/img5.jpg'
import img6 from '../../public/images/img6.jpg'
import MultiSelectFilter from '@/components/MultiSelectFilter/MultiSelectFilter'
import SwiperBanner from '@/components/SwiperBanner/SwiperBanner'
import NavBar from '@/components/NavBar/NavBar'

export default function Home () {
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
      label: 'Gain experience',
      img: 'bg-slide1'
    },
    {
      id: 1,
      title: 'Multiple fields',
      label: 'Frontend , backend , UI/UX design, mobile',
      img: 'bg-slide2'
    },
    {
      id: 2,
      title: 'Our Services',
      label: 'A intership program depending on what you like',
      img: 'bg-slide3'
    }
  ]

  const imgSectionRef = useRef(null)
  const [selectedValues, setSelectedValues] = useState([])

  const handleMultiSelectChange = selectedOptions => {
    setSelectedValues(selectedOptions)
  }

  return (
    <div>
      {/* Banner component for the home page */}
      {/* <Banner
        title={'Welcome to the home page'}
        phrase={'This is the main page of the website'}
        background={'bg-banner'}
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
