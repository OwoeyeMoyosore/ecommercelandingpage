import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgUrl,customerName, rating, feedback }) => {
  return (
    <section className='flex justify-center items-center flex-col'>
<img src={imgUrl} alt={customerName} className='rounded-full object-cover w-[120px] h-[120px]'/>
<p className='info-text mt-6 max-w-sm text-center '>{feedback}</p>
<div className='mt-3 flex justify-center gap-2.5 items-center'>
    <img src={star} width={24} height={24} className='object-contain m-0'/>
    <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
</div>
<h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </section>
  )
}

export default ReviewCard