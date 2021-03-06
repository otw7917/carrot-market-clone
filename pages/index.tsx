import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FloatingButton from "@components/FloatingButton";
import Layout from "@components/Layout";
import ProductBox from "@components/ProductBox";

const Home: NextPage = () => {
  return (
    <Layout title='home' hasTabBar>
      <div className='flex flex-col space-y-3 px-2'>
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
        <FloatingButton>
          <svg
            className='h-7 w-7'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
