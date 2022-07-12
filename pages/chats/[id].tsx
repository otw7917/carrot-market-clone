import React from "react";
import Message from "@components/message";

function ChatsDetail() {
  return (
    <div className='px-4 py-10 space-y-5'>
      <Message message='hi how much are you selling them for?' />
      <Message message='i want $20, 000' isReverse />
      <Message message='미쳤어!' />
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

export default ChatsDetail;
