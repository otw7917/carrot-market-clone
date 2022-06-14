import React from "react";
import UploadButton from "../../components/UploadButton";

function edit() {
  return (
    <div className='py-12 px-4'>
      <div className='profile-image flex items-end space-x-2 cursor-pointer'>
        <div className='w-20 h-20 rounded-full bg-slate-300' />
        <label
          htmlFor='profile'
          className='p-2 border-2 border-dashed text-slate-500 text-lg cursor-pointer'
        >
          change
          <input id='profile' type='file' className='hidden' />
        </label>
      </div>
      <form className='space-y-4'>
        <div>
          <label htmlFor='email' className='text-sm font-medium text-gray-700'>
            email
            <input
              id='email'
              type='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md plachoder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 '
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor='phone'>
            phone number
            <div className='flex rounded-md shadow-md'>
              <span className='flex items-center justify-center border border-gray-300 px-3 py-2 border-r-0 rounded-l-md shadow-md bg-slate-100 select-none'>
                +82
              </span>
              <input
                id='phone'
                type='number'
                className='w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-md plachoder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 '
                required
              />
            </div>
          </label>
        </div>
        <UploadButton name={"edit profile"}></UploadButton>
      </form>
    </div>
  );
}

export default edit;
