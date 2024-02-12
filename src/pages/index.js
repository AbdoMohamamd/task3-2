import React, { useRef, useState } from 'react'
import Banner from '../components/Banner/Banner'
import PhotoWithText from '../components/PhotoWithText/PhotoWithText'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import img3 from '../../public/images/img3.png'
import img4 from '../../public/images/img4.jpg'
import img5 from '../../public/images/img5.jpg'
import img6 from '../../public/images/img6.jpg'

import SwiperBanner from '@/components/SwiperBanner/SwiperBanner'
import NavBar from '@/components/NavBar/NavBar'
import MultiSelectFilter from '@/components/MultiSelectFilter/MultiSelectFilter'
import Accordion from '@/components/Accordion/Accordion'

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
      title: 'Welcome to creohub',
      label: 'Gain experience',
      img: 'bg-slide1'
    },
    {
      title: 'Multiple fields',
      label: 'Frontend , backend , UI/UX design, mobile',
      img: 'bg-slide2'
    },
    {
      title: 'Our Services',
      label: 'A intership program depending on what you like',
      img: 'bg-slide3'
    }
  ]
  const accordionItems = [
    {
      title: 'What programming languages do you support?',
      content: 'We support a wide range of programming languages, including but not limited to JavaScript, Python, Java, C++, and Ruby. Our platform is designed to accommodate diverse development needs.',
    },
    {
      title: 'How do I get started with programming?',
      content: 'To get started with programming, we recommend selecting a programming language based on your goals and interests. There are many online resources, tutorials, and courses available to help beginners learn the basics and progress in their coding journey.',
    },
    {
      title: 'Do you provide documentation for your APIs?',
      content: 'Yes, we offer comprehensive documentation for all our APIs. You can find detailed information, including endpoints, request and response formats, and example code snippets, in our API documentation section.',
    },
    {
      title: 'Can I contribute to your open-source projects?',
      content: 'Absolutely! We welcome contributions from the community. You can find our open-source projects on GitHub. Feel free to fork the repository, make changes, and submit a pull request. Check our contribution guidelines for more details.',
    },
    {
      title: 'How do I troubleshoot common programming errors?',
      content: "When facing programming errors, it's essential to carefully review your code, check for syntax errors, and consult relevant documentation. Additionally, online communities and forums are valuable resources where you can seek help from experienced developers.",
    },
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
      
        <Accordion items={accordionItems} />
    
    </div>
  )
}
