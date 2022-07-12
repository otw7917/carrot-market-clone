import Link from "next/link";
import React from "react";
import Layout from "@components/Layout";

function Chats() {
  return (
    <Layout title='chats' hasTabBar>
      <div className='divide-y'>
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className='flex px-4 cursor-pointer py-3 items-center space-x-3'>
              <div className='w-12 h-12 rounded-full bg-slate-400' />
              <div>
                <p className='text-gray-700'>Steve Jebs</p>
                <p className='text-sm  text-gray-500'>
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Chats;
