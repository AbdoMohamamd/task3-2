import React, { useRef } from 'react'
import Banner from '../../components/Banner/Banner'
import Form from '../../components/Form/Form'
import InterestList from '../../components/InterestList/InterestList'

const ContactUs= () => {
  const formSectionRef = useRef(null)
  return (
    <div>
      <Banner
        title={'Welcome to the ContactUs page'}
        phrase={'From this page you can contactUs'}
        background={'bg-contactUs'}
        sectionRef={formSectionRef}
      />
      <section className='max-w-96 my-4 mx-auto p-4' ref={formSectionRef}>
        <Form title='Contact' />
        <section className='mt-12'>
          <h2 className={'mb-2 font-bold text-2xl  text-center'}>Contact Us</h2>
          <p className={'text-center'}>From 9:00am to 4:00pm</p>
        </section>
      </section>
      <section>
        <InterestList />
      </section>
    </div>
  )
}

export default ContactUs
