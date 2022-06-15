import React from "react";
import FloatingButton from "../../components/FloatingButton";

function Lives() {
  return (
    <div className='py-14 px-5 space-y-5'>
      {Array(5)
        .fill(1)
        .map((_, i) => (
          <div
            key={i}
            className='cursor-pointer p-2 hover:ring-2 hover:ring-orange-300 hover:rounded-lg hover:shadow-lg'
          >
            <div className='w-full rounded-md bg-slate-200 aspect-video '></div>
            <h3 className='text-gray-600 p-2 font-bold'>
              information about title
            </h3>
          </div>
        ))}
      <FloatingButton>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
          />
        </svg>
      </FloatingButton>
    </div>
  );
}

export default Lives;
