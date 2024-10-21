import { databaseData } from '@/data/databaseTypeLs'
import Image from 'next/image'
import React from 'react'

export default function CardDatabaseTypeComponent() {
    const databaseType = databaseData;
    return (

        <div className="grid grid-cols-2 gap-3 p-6">
            {databaseType.map((db) => (
                <div
                    key={db.id}
                    className={`border-2 border-gray-500 h-24 rounded-md flex items-center justify-between px-8 
                                ${db.id !== 1 && 'opacity-50 cursor-not-allowed'}`}
                >
                    <span>{db.dbType}</span>
                    <Image
                        src={`/${db.icon}.svg`}
                        width={100}
                        height={100}
                        className='w-12 h-12'
                        alt={db.dbType}
                    />
                </div>
            ))}
        </div>

    )
}
