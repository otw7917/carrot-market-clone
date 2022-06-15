import UploadButton from "../../components/UploadButton";

function upload() {
  return (
    <div className='px-4 py-16'>
      <div>
        <label className='w-full flex justify-center items-center border-2 border-dashed rounded-md py-10 cursor-pointer hover:bg-orange-100 hover:border-orange-200 hover:text-orange-500'>
          <svg
            className='h-12 w-12'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <input type='file' className='hidden' />
        </label>
      </div>
      <div className='mt-5 p-2 border rounded-md'>
        <label
          htmlFor='price'
          className='block mb-1 text-sm font-medium text-gray-700'
        >
          Price
        </label>
        <div className='flex justify-start items-center relative'>
          <div className='absolute pl-2'>
            <span className='text-gray-600 text-sm select-none'>$</span>
          </div>
          <input
            id='price'
            type='number'
            placeholder='0.00'
            className='w-full pl-5 border-2 border-gray-400 shadow-md rounded-md hover:border-orange-300 focus:border-orange-500 focus:ring-orange-500
          '
          />
          <div className='absolute right-0 pr-2'>
            <span className='text-gray-600 text-sm select-none'>USD</span>
          </div>
        </div>
      </div>
      <div className='mt-5 p-2 border rounded-md'>
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
      <UploadButton name='upload product' />
    </div>
  );
}

export default upload;
