import React from 'react'
import human from '../assets/human.jpg'

const About = () => {
  return (
    <div className='flex justify-center mt-60'>
        <img src={human} className='w-auto h-60 absolute z-0 top-20' />
        <div className='text-white text-5xl font-normal relative z-1'>
            <div class="text-center">
                <p>Web Designer</p>
                <p className='italic mt-2'>& Developer</p>
            </div>
            <div>
                <p className='text-white text-xl tracking-tighter max-w-[560px] text-center mt-8'>Premium web Design, Development, and SEO services to help your business stand out.</p>
            </div>
        </div>
    </div>
  )
}

export default About