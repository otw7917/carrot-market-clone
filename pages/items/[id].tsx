import { NextComponentType, NextPage } from "next";
import React from "react";

function itemDetail() {
  return (
    <div className='px-4 py-10'>
      <div>
        <div className='h-96 bg-slate-300' />
        <div className='flex py-3 border-t border-b items-center space-x-3 cursor-help'>
          <div className='w-12 h-12 rounded-full bg-slate-400' />
          <div>
            <p className='text-lg font-medium text-gray-800'>Steve Jebs</p>
            <p className='text-sm font-medium text-gray-600'>
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-3xl font-bold text-gray-900'>Galaxy S50</h1>
          <span className='text-3xl block mt-3 text-gray-900'>$140</span>
          <p className='text-base my-5 text-gray-700'>
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className='flex items-center justify-between space-x-1'>
            <button className='flex-1 text-white font-medium bg-orange-400 rounded-md py-2 hover:animate-pulse hover:bg-orange-600 '>
              Talk to seller
            </button>
            <button className='p-2 flex items-center justify-center font-medium hover:text-red-600 bg-orange-100 rounded-md'>
              <svg
                className='h-7 w-7 stroke-orange-300 hover:fill-orange-600 hover:stroke-orange-600'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <h2 className='font-bold text-xl mb-2'>Similar items</h2>
        <div className='grid grid-cols-2 gap-4'>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className='h-40 w-full aspect-square bg-slate-300' />
              <h3 className='mt-1 font-xl font-bold '>Galaxy S60</h3>
              <span className='text-gray-600'>$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default itemDetail;
