'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

const NotFound = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-gray-100 mt-8 text-center'>Uh oh, this page doesn't seem to exist</h1>
            <h2 className='text-xl text-gray-300 mt-2 text-center'>Oh no... looks like you're lost! Why not listen to some music!</h2>

            <div className='mt-12'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3op7eynwRj0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className='mt-8 flex flex-row justify-center space-x-8'>
                <Button className='bg-[#5c2f54] mt-6 h-12 text-xl transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer' onClick={() => router.push('/')}>Go Home</Button>
                <Button className='bg-[#5c2f54] mt-6 h-12 text-xl transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer' onClick={() => router.back()}>Go Back</Button>
            </div>
        </div>
    )
}

export default NotFound