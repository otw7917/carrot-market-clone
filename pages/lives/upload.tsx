import React from "react";
import UploadButton from "@components/UploadButton";

function upload() {
  return (
    <div className='px-4 py-14 space-y-5'>
      <div className=' p-2 border rounded-md'>
        <label
          htmlFor='title'
          className='block mb-1 text-sm font-medium text-gray-700'
        >
          Live Title
        </label>
        <div className='flex justify-start items-center relative'>
          <input
            id='title'
            type='string'
            placeholder='video name'
            className='w-full p-2 border-2 border-gray-400 shadow-md rounded-md hover:border-orange-300 focus:border-orange-500 focus:ring-orange-500
    '
          />
        </div>
      </div>
      <div className=' p-2 border rounded-md'>
        <label
          htmlFor='textarea'
          className='block mb-1 text-sm font-medium text-gray-700'
        >
          Description
        </label>
        <div>
          <textarea
            rows={4}
            className='w-full rounded-md border-2 border-gray-400 focus:border-orange-400 focus:ring-orange-400'
          />
        </div>
      </div>
      <UploadButton name='post video' />
    </div>
  );
}

export default upload;
