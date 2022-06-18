import React from "react";
import Link from "next/link";
import { cls } from "../libs/utils";
import { useRouter } from "next/router";
import path from "path";

interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

function Layout({ title, hasTabBar, children }: LayoutProps) {
  const { pathname } = useRouter();

  return (
    <>
      <nav className='fixed flex w-screen max-w-xl bg-orange-500 items-center justify-center p-2 opacity-90 text-white'>
        {title ? <span>{title}</span> : null}
      </nav>
      <div className={cls("pt-12", hasTabBar ? "pb-14" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className='fixed bottom-0 w-screen max-w-xl bg-orange-500 opacity-90 rounded-lg'>
          <ul className='flex justify-around items-center w-full text-lg text-white py-3'>
            <li className={pathname === "/" ? "text-orange-900" : ""}>
              <Link href='/'>
                <a className='flex flex-col items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                    fill='none'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                  <div className='text-sm'>home</div>
                </a>
              </Link>
            </li>
            <li className={pathname === "/community" ? "text-orange-900" : ""}>
              <Link href='/community'>
                <a className='flex flex-col items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  <div className='text-sm'>community</div>
                </a>
              </Link>
            </li>
            <li className={pathname === "/lives" ? "text-orange-900" : ""}>
              <Link href='/lives'>
                <a className='flex flex-col items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                    />
                  </svg>
                  <div className='text-sm'>live</div>
                </a>
              </Link>
            </li>
            <li className={pathname === "/chats" ? "text-orange-900" : ""}>
              <Link href='/chats'>
                <a className='flex flex-col items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                    />
                  </svg>
                  <div className='text-sm'>chats</div>
                </a>
              </Link>
            </li>
            <li className={pathname === "/profile" ? "text-orange-900" : ""}>
              <Link href='/profile'>
                <a className='flex flex-col items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                  <div className='text-sm'>profile</div>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}

export default Layout;
