import React, { useRef } from 'react'
import Banner from '../components/Banner/Banner'
import Form from '../components/Form/Form'
import InterestList from '../components/InterestList/InterestList'
import SwiperBanner from '@/components/SwiperBanner/SwiperBanner'

const ContactUs = () => {
  const formSectionRef = useRef(null)
  const slides = [
    {
      id: 0,
      title: 'Contact Us',
      label: "Have a question, suggestion, or just want to say hello? We'd love to hear from you!",
      img: 'bg-slide1'
    },
    {
      id: 1,
      title: 'Quick Response',
      label: 'We are available from 9:00am to 4:30pm',
      img: 'bg-slide2'
    },
    {
      id: 2,
      title: 'Easy to use',
      label: 'Fill your full name and email and wait for our response',
      img: 'bg-slide3'
    }
  ]
  return (
    <div>
      {/* Banner component for the ContactUs page */}
      {/* <Banner
        title={'Welcome to the ContactUs page'}
        phrase={'From this page you can contact us'}
        background={'bg-contactUs'}
        sectionRef={formSectionRef}
      /> */}
      <SwiperBanner slides={slides}/>

      {/* Section for the form */}
      <section className='max-w-96 my-4 mx-auto p-4' ref={formSectionRef}>
        {/* Form component */}
        <Form title='Contact' />

        {/* Additional section for contact information */}
        <section className='mt-12'>
          <h2 className={'mb-2 font-bold text-2xl  text-center'}>Contact Us</h2>
          <p className={'text-center'}>From 9:00am to 4:00pm</p>
        </section>
      </section>

      {/* Section for the InterestList component */}
      <section>
        <InterestList />
      </section>
      
    </div>
  )
}

export default ContactUs
