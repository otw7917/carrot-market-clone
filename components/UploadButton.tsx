import React, { Children } from "react";

interface UploadButtonProps {
  children?: React.ReactNode;
  name?: string;
}

function UploadButton({ name, children }: UploadButtonProps) {
  return (
    <button className='w-full text-white font-medium bg-orange-400 rounded-md py-2 shadow-lg hover:animate-pulse hover:bg-orange-600 '>
      {name}
    </button>
  );
}

export default UploadButton;
