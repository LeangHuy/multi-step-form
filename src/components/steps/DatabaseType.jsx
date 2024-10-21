import Image from 'next/image'
import React from 'react'
import CardDatabaseTypeComponent from '../CardDatabaseTypeComponent'

export default function DatabaseType() {
  return (
    <div className='flex flex-col'>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="bg-blue-800 rounded-full w-24 h-24 flex items-center justify-center">
          <Image src="/database-type.svg" alt="alt" width={1000} height={1000} className='w-16 h-16' />
        </div>
        <h1 className='capitalize font-bold text-2xl'>choose database types</h1>
        <h3>Select database types base on requirement</h3>
      </div>
      <div className="w-full h-auto ">
        <CardDatabaseTypeComponent />
      </div>
    </div>
  )
}
