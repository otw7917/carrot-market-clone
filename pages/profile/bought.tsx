import React from "react";
import ProductBox from "../../components/ProductBox";

// 보인 판매 목록 리스트
function Bought() {
  return (
    <div className='flex flex-col space-y-3 py-2 px-2'>
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <div
            className='flex justify-between border border-orange-500 cursor-pointer'
            key={i}
          >
            <ProductBox />
          </div>
        ))}
    </div>
  );
}

export default Bought;
