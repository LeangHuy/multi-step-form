import { StepperContext } from '@/contexts/StepperContext'
import Image from 'next/image'
import { React, useContext, useState } from 'react'

export default function SetupProject() {

  return (
    <div className='flex flex-col'>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="bg-blue-800 rounded-full w-24 h-24 flex items-center justify-center">
          <Image src="/setup-project.svg" alt="alt" width={1000} height={1000} className='w-16 h-16' />
        </div>
        <h1 className='capitalize font-bold text-2xl'>setup your project</h1>
        <h3>Setup project base on your requirement</h3>
      </div>

      <div className="font-semibold  h-6 mt-3  leading-8 capitalize">Project Name</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md">
        <input
          name='username'
          placeholder='Project name'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
        />
      </div>
      <div className="font-semibold  h-6 mt-3  leading-8 capitalize">Description</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md">
        <textarea
          name='description'
          placeholder='Describe your project'
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800 resize-none'
          style={{ height: '200px' }} // Inline style to control height
        />
      </div>

    </div>
  )
}
