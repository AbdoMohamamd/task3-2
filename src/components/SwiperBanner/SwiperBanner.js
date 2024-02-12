import React from 'react'
// import Swiper core and required modules
import {
  Pagination,
  A11y,
  Autoplay,
  EffectFade
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const SwiperBanner = ({  slides }) => {
  return (
    <section
      className={
        'mb-4 h-screen   bg-cover  bg-center text-center bg-no-repeat ' 
      }
    >
      <Swiper
      
        modules={[Pagination, A11y, Autoplay, EffectFade]}
        effect='fade'
        looping={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className=' h-screen'
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} >
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
