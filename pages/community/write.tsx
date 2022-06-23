import React from "react";
import UploadButton from "../../components/UploadButton";

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
      <UploadButton name='포스트' />
    </form>
  );
}

export default write;
