import React from "react";
import Layout from "../../components/Layout";

function chats() {
  return (
    <Layout title='chats' hasTabBar>
      <div className='divide-y'>
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className='flex px-4 cursor-pointer py-3 items-center space-x-3'
          >
            <div className='w-12 h-12 rounded-full bg-slate-400' />
            <div>
              <p className='text-gray-700'>Steve Jebs</p>
              <p className='text-sm  text-gray-500'>
                See you tomorrow in the corner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default chats;
