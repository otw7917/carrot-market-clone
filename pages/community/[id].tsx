function CommunityPostDetail() {
  return (
    <div className='p-4'>
      <span className='inline-flex items-center ml-4 rounded-full bg-slate-200 p-2 text-xs font-medium text-gray-800'>
        동네질문
      </span>
      <div className='flex mt-2 py-3 border-t border-b items-center space-x-3 cursor-pointer'>
        <div className='w-12 h-12 rounded-full bg-slate-400' />
        <div>
          <p className='text-lg font-medium text-gray-800'>Steve Jebs</p>
          <p className='text-sm font-medium text-gray-600'>
            View profile &rarr;
          </p>
        </div>
      </div>
      <div className='mt-2 text-gray-700'>
        <span className='text-orange-500 font-medium'>Q.</span> What is the best
        mandu restaurant?
      </div>
      <div className='flex space-x-4 mt-2 pb-2 border-b-2'>
        <span className='flex gap-2 items-center '>
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
          <span>궁금해요 1</span>
        </span>
        <span className='flex gap-2 items-center'>
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            ></path>
          </svg>
          <span>답변 1</span>
        </span>
      </div>
      <div className='px-4 space-y-5 my-5'>
        <div className='flex items-start space-x-3'>
          <div className='w-10 h-10 rounded-full bg-slate-400 flex-none' />
          <div className='flex flex-col w-full'>
            <span className='block text-sm  text-gray-800'>Steve Jobs</span>
            <span className='block text-xs text-gray-600'>24시간 전</span>
            <span className='flex mt-2 text-gray-700 flex-wrap'>
              대답 Javascript The Definitive Guide 아무글씨나 테스트중 폰트
              넘어가면 어떻게 되는지 확인하기
            </span>
          </div>
          <div className='text-gray-600 cursor-pointer'>
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='mt-5 p-2 border rounded-md'>
        <label
          htmlFor='textarea'
          className='block mb-1 text-sm font-medium text-gray-700'
        >
          댓글을 작성해주세용
        </label>
        <div>
          <textarea
            rows={4}
            className='w-full rounded-md border-2 border-gray-400 focus:border-orange-400 focus:ring-orange-400'
            placeholder='비방하지말기! 사기치지 말기'
          />
        </div>
      </div>

      <button className='mt-5 w-full text-white font-medium bg-orange-400 rounded-md py-2 hover:animate-pulse hover:bg-orange-600 '>
        작성 끝!
      </button>
    </div>
  );
}

export default CommunityPostDetail;
