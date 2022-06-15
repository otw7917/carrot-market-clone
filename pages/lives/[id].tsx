import React from "react";

function LiveDetail() {
  return (
    <div className='px-4 pt-12'>
      <div className='p-2'>
        <div className='w-full rounded-md bg-slate-200 aspect-video '></div>
        <h3 className='text-xl text-gray-600 p-2 font-bold'>
          information about title
        </h3>
      </div>

      <div className='space-y-4 p-2 mt-3 h-[55vh] overflow-y-scroll'>
        {Array(10)
          .fill(5)
          .map((_, i) => (
            <>
              <div className='flex items-start space-x-2'>
                <div className='w-8 h-8 rounded-full bg-slate-500' />
                <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-500 rounded-md'>
                  Hi how much are you selling them for?
                </div>
              </div>
              <div className='flex flex-row-reverse items-start space-x-reverse space-x-2'>
                <div className='w-8 h-8 rounded-full bg-slate-500' />
                <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-500 rounded-md'>
                  I want ￦20,000
                </div>
              </div>
            </>
          ))}
      </div>
      <div className='fixed bottom-5 w-full max-w-md flex justify-center items-center '>
        <div className='flex items-center w-full mx-auto'>
          <input
            type='text'
            className='shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 pr-12 focus:border-orange-500 '
          />
          <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5 '>
            <button className='flex items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white'>
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveDetail;
