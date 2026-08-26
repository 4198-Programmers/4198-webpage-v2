'use client';

import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'

const HomeScreenButton = () => {
    return (
        <Button asChild className='bg-[#5c2f54] mt-6 h-12 w-40 text-xl transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer'>
            <Link href='/about/new-members'>New Members</Link>
        </Button>
    )
}

export default HomeScreenButton