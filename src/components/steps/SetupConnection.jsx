import { EyeOff } from 'lucide-react';
import { Eye } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export default function SetupConnection() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className='flex flex-col gap-4'>
      {/* Source */}
      <div className="w-full h-auto grid grid-cols-2 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-blue-800 rounded-full w-24 h-24 flex items-center justify-center">
            <Image src="/database.svg" alt="alt" width={1000} height={1000} className='w-16 h-16' />
          </div>
          <h1 className='capitalize font-bold text-2xl'>source</h1>
          <h3>Setup database connection for Source</h3>

        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-blue-800 rounded-full w-24 h-24 flex items-center justify-center">
            <Image src="/database.svg" alt="alt" width={1000} height={1000} className='w-16 h-16' />
          </div>
          <h1 className='capitalize font-bold text-2xl'>target</h1>
          <h3>Setup database connection for Target</h3>

        </div>
      </div>
      <div className="w-full h-auto border-2 border-slate-400 rounded-lg grid grid-cols-2">
        {/* Setup connection source */}
        <div className="w-full h-auto border-r-2 border-slate-400 p-4 px-8">
          <div className="font-semibold h-6 mt-3 leading-8 capitalize">username</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md">
            <input
              name='username'
              placeholder='Project name'
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            />
          </div>

          <div className="font-semibold h-6 mt-3 leading-8 capitalize">password</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md items-center">
            <input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder='password'
              name="password"
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            />
            {!showPass ? (
              <Eye
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <EyeOff
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            )}
            {/* <div className="flex relative w-full px-3 py-2 rounded-md border focus-within:border-gray-500 focus-within:border-2 justify-between items-center">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                className="focus:outline-none border-none w-full"
              />
              {!showPass ? (
                <Eye
                  className="cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <EyeOff
                  className="cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              )}

            </div> */}
          </div>

          <div className="font-semibold h-6 mt-3 leading-8 uppercase">url</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md">
            <input
              name='url'
              placeholder='url'
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            />
          </div>

          {/* test connection */}
          <Link href={"/"} className='capitalize float-end text-right w-full mt-5 font-semibold'>test connection</Link>
        </div>

        {/* Setup connection target */}
        <div className="w-full h-auto  p-4 px-8">
          <div className="font-semibold h-6 mt-3 leading-8 capitalize">username</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md">
            <input
              name='username'
              placeholder='Project name'
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            />
          </div>

          <div className="font-semibold h-6 mt-3 leading-8 capitalize">password</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md items-center">
            <input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder='password'
              name="password"
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            />
            {!showPass ? (
              <Eye
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <EyeOff
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>

          <div className="font-semibold h-6 mt-3 leading-8 uppercase">url</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded-md">
            <input
              name='url'
              placeholder='url'
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            />
          </div>
          {/* test connection */}
          <Link href={"/"} className='capitalize float-end text-right w-full mt-5 font-semibold'>test connection</Link>
        </div>
      </div>



    </div>
  )
}
