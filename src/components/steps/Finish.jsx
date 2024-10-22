import Image from 'next/image'
import React from 'react'

export default function Finish() {
  return (
    <div className='flex flex-col gap-4'>
      <div className="w-full h-auto flex flex-col items-center">
        <Image src="/done.svg" alt="alt" width={1000} height={1000} className='w-16 h-16' />
        <h1 className='capitalize font-bold text-2xl'>success!</h1>
        <h3>Your project has  been successfully created!</h3>
      </div>
      <div className="w-full h-auto flex gap-4 ">
        <div className="w-full border-2 border-slate-400 rounded-lg">
          <div className='w-full flex p-4 px-8 gap-8 items-center'>
            <div className="bg-blue-800 rounded-md w-20 h-20 flex items-center justify-center">
              <Image src="/icons/database.svg" alt="alt" width={1000} height={1000} className='w-14 h-14' />
            </div>
            <div className="">
              <h1 className='capitalize font-bold text-2xl'>diffDB development</h1>
              <h3>Source</h3>
            </div>

          </div>
          <div className='border-t-2 border-slate-400 w-full'>
            <div className="w-full h-auto p-6 flex">
              <div className='w-full'>
                <h4 className='uppercase font-semibold'> database type</h4>
                <p>mariaDB</p>
              </div>
              <div className='capitalize w-full h-10'>
                <h4 className='uppercase font-semibold'>version</h4>
                <p>11.5.2-MariaDB</p>
              </div>

            </div>
            <div className="w-full h-auto px-6 pb-6 flex">
              <div className='uppercase w-full h-10'>
                <h4 className='uppercase font-semibold'>status</h4>
                <p className='text-blue-700'>connection</p>
              </div>
              <div className='w-full h-10'>
                <h4 className='uppercase font-semibold'>database size</h4>
                <p>500MB</p>
              </div>

            </div>
          </div>
        </div>
        <div className="w-full border-2 border-slate-400 rounded-lg">
          <div className='w-full flex p-4 px-8 gap-8 items-center'>
            <div className="bg-blue-800 rounded-md w-20 h-20 flex items-center justify-center">
              <Image src="/icons/database.svg" alt="alt" width={1000} height={1000} className='w-14 h-14' />
            </div>
            <div className="">
              <h1 className='capitalize font-bold text-2xl'>diffDB production</h1>
              <h3>Target</h3>
            </div>

          </div>
          <div className='border-t-2 border-slate-400 h-10 w-full'>
            <div className="w-full h-auto p-6 flex">
              <div className='w-full'>
                <h4 className='uppercase font-semibold'> database type</h4>
                <p>mariaDB</p>
              </div>
              <div className='capitalize w-full h-10'>
                <h4 className='uppercase font-semibold'>version</h4>
                <p>11.5.2-MariaDB</p>
              </div>

            </div>
            <div className="w-full h-auto px-6 pb-6 flex">
              <div className='uppercase w-full h-10'>
                <h4 className='uppercase font-semibold'>status</h4>
                <p className='text-blue-700'>connection</p>
              </div>
              <div className='w-full h-10'>
                <h4 className='uppercase font-semibold'>database size</h4>
                <p>550MB</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
