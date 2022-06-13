import React from "react";

function write() {
  return (
    <form className='px-4 py-10'>
      <div>
        <textarea
          rows={4}
          className='w-full rounded-md border-2 border-gray-400 focus:border-orange-400 focus:ring-orange-400'
          placeholder='질문 포스트'
        />
      </div>

      <button className='mt-5 w-full text-white font-medium bg-orange-400 rounded-md py-2 hover:animate-pulse hover:bg-orange-600 '>
        포스트!
      </button>
    </form>
  );
}

export default write;
