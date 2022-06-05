import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className='bg-sky-500 h-10 flex items-center justify-center '>
      <h1 className=' text-cyan-50  '>Hello NextJs</h1>
    </div>
  );
};

export default Home;
