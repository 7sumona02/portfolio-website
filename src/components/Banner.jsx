import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Banner = () => {
  return (
    <div className='flex justify-center text-white mt-16'>
        <div className='flex gap-4 items-center'>
            <div className="w-9 h-9 rounded-full border-2 border-gray-500 bg-gray-900 flex items-center justify-center">
            <ChevronDownIcon className="h-6 w-6 text-white" />
            </div>
            <p>MY SERVICES</p>
        </div>
    </div>
  )
}

export default Banner