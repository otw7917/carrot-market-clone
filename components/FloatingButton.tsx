import React from "react";

interface FloatingButtonProps {
  children: React.ReactNode;
}

function FloatingButton({ children }: FloatingButtonProps) {
  return (
    <button className='fixed text-white cursor-progress bottom-20 right-5 p-5 rounded-full transition-colors hover:animate-bounce bg-orange-400 hover:bg-orange-600'>
      {children}
    </button>
  );
}

export default FloatingButton;
