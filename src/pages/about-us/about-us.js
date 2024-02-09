
import React, { useRef } from 'react'
import Banner from '../../components/Banner/Banner'
import PhotoWithText from '../../components/PhotoWithText/PhotoWithText'
import img1 from '../../../public/img1.jpg'
import img2 from '../../../public/img2.jpg'
//first we import all the images and component we are gonna use in the AboutUs page
const AboutUs = () => {
  const imgSectionRef = useRef(null) //The reference we are gonna use in the start now function
  const cards = [
    { img: img1, text: 'Waves art' },
    { img: img2, text: 'Rocks at the beach' }
  ] //The objects we are using in the cards section

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
        className='w-56 block mt-0 mb-0 mx-auto text-center md:flex md:justify-center md:w-99'
        ref={imgSectionRef}
      >
        {cards.map((card, index) => (
          <PhotoWithText
            img={card.img}
            text={card.text}
            key={index}
            //maping the images objects as card component
          />
        ))}
      </section>
    </div>
  )
}

export default AboutUs
