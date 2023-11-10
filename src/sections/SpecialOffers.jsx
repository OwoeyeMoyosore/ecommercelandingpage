import React from 'react'
import { offer } from '../assets/images'
import Button from '../constants/button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section id='' className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
<img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>
        
        
        <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'> 
    
    <span className='text-coral-red '> Special</span> Offer
    </h2>
    <p className='info-text mt-4 lg:max-w-lg '>Ensuring premium comfort and style, our meticulously crafted footwear is designed
    to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
    <p className='info-text lg:max-w-lg mt-6'>Ensuring premium comfort and style, our meticulously crafted footwear is designed
    to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
    <div className="mt-11 flex gap-4 flex-wrap">
<Button label="Shop Now" iconUrl={arrowRight} />
<Button label="Learn more" backgroundColor = "bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
    </div>
    </div>
    </section>
  )
}

export default SpecialOffers