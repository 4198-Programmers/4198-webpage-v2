'use client';

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

const HomeScreenButton = () => {
    const router = useRouter();

    return (
        <Button className='bg-[#5c2f54] mt-6 h-12 w-36 text-xl transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer' onClick={() => router.push('/about/new-members')}>Get Started</Button>
    )
}

export default HomeScreenButton