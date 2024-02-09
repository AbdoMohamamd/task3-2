import Banner from '../components/Banner/Banner'
import PhotoWithText from '../components/PhotoWithText/PhotoWithText'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import img3 from '../../public/images/img3.png'
import img4 from '../../public/images/img4.jpg'
import img5 from '../../public/images/img5.jpg'
import React, { useRef,useState } from 'react'
import Form from '../components/Form/Form'
import FilterDropdown from '@/components/FilterDropdown.js/FilterDropdown'
export default function Home () {
  const cards = [
    { img: img1, text: 'Waves art' },
    { img: img2, text: 'Rocks at the beach' },
    { img: img3, text: 'Blue flower' },
    { img: img4, text: 'Sunset' },
    { img: img5, text: 'Fox' }
  ] //The objects we are using in the cards section
  const [filteredItems, setFilteredItems] = useState(cards)

  const options = [
    { index: -1, option: 'All' },
    { index: 0, option: 'Waves art' },

    { index: 1, option: 'Rocks at the beach' },
    { index: 2, option: 'Blue flower' },
    { index: 3, option: 'Sunset' },
    { index: 4, option: 'Fox' }
  ]
  const handleFilterChange = selectedCategory => {
    console.log(selectedCategory)
    console.log(cards)
    if (selectedCategory != -1) {
      setFilteredItems([cards[selectedCategory]])
    } else {
      setFilteredItems(cards)
    }
  }
  const imgSectionRef = useRef(null)

  return (
    <div>
      <Banner
        title={'Welcome to the home page'}
        phrase={'This is the main page of the website'}
        background={'bg-banner'}
        sectionRef={imgSectionRef}
      />
       <section className='flex flex-col items-end '>
        <FilterDropdown options={options} onFilterChange={handleFilterChange} />
      </section>
      <section
        className='w-56 block mt-0 mb-0 mx-auto text-center md:flex md:justify-center md:w-99 md:flex-wrap'
        ref={imgSectionRef}
      >
        {filteredItems.map((card, index) => (
          <PhotoWithText img={card.img} text={card.text} key={index} />
        ))}
      </section>
      <section className='max-w-96 my-4 mx-auto p-4'>
        <Form title={'This is my form'} />
      </section>
    </div>
  )
}
