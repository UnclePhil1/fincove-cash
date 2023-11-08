'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import  notfound from '../../../../public/Image/404.jpg'
import Image from 'next/image';
import Link from 'next/link'
import { headers } from 'next/headers'

const NotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Redirect back to the previous page
  };

  const headersList = headers()
  const domain = headersList.get('host')

  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
      <Image src={notfound} alt='404' width={700} height={300} className='lg:w-[500px] lg:h-[500px]'/>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
      <button onClick={handleGoBack} className='bg-primarydark py-2 px-4 rounded-md border border-primary text-white'>Go Back</button>
    </div>
  );
};

export default NotFound;
