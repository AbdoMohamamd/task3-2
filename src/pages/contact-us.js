import React, { useRef } from 'react'
import Banner from '../components/Banner/Banner'
import Form from '../components/Form/Form'
import InterestList from '../components/InterestList/InterestList'
import SwiperBanner from '@/components/SwiperBanner/SwiperBanner'
import Accordion from '@/components/Accordion/Accordion'

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
      <Accordion items={accordionItems} />
    </div>
  )
}

export default ContactUs
