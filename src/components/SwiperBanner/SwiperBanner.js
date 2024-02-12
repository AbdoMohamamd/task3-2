import React from 'react'
// import Swiper core and required modules
import { Pagination, A11y, Autoplay, EffectFade,Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const SwiperBanner = ({ slides }) => {
  return (
    <section
      className={
        'mb-4 h-screen   bg-cover  bg-center text-center bg-no-repeat '
      }
    >
      <Swiper
        modules={[Pagination, A11y, Autoplay, EffectFade,Navigation]}
        effect='fade'
        navigation
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className=' h-screen'
        autoplay={{ delay: 3000 }}
      //adding the modules needed in the swiper
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}
          //mapping each object in the array to a slide
          >
            <div
              className={` text-white flex flex-col items-center justify-center h-full    bg-cover  bg-center text-center bg-no-repeat  ${slide.img}`}
            >
              <h1 className=' text-5xl font-bold helvetica-bold '>
                {slide.title}
              </h1>
              <p className='text-2xl'>{slide.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SwiperBanner
