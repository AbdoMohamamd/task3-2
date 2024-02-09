import Banner from '../components/Banner/Banner'
import PhotoWithText from '../components/PhotoWithText/PhotoWithText'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'
import React,{ useRef } from 'react'
import Form from '../components/Form/Form'
export default function Home () {
  const cards = [
    { img: img1, text: 'Waves art' },
    { img: img2, text: 'Rocks at the beach' }
  ]
  const imgSectionRef = useRef(null)

  return (
    <div>
      <Banner
        title={'Welcome to the home page'}
        phrase={'This is the main page of the website'}
        background={'bg-banner'}
        sectionRef={imgSectionRef}
      />
      <section
        className='w-56 block mt-0 mb-0 mx-auto text-center md:flex md:justify-center md:w-99'
        ref={imgSectionRef}
      >
          {cards.map((card, index) => (
  <PhotoWithText img={card.img} text={card.text} key={index} />
))}
      </section>
      <section className='max-w-96 my-4 mx-auto p-4'>
        <Form title={'This is my form'} />
      </section>
    </div>
  )
}
