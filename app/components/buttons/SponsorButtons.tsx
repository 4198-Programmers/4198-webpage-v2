'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

const SponsorButtons = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-4'>
            <Button className='bg-[#5c2f54] mt-6 h-12 text-xl transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer' onClick={() => router.push('/sponsors/why-sponsor')}>Why Become A Sponsor?</Button>
            <Button className='bg-[#5c2f54] mt-6 h-12 text-xl transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer' onClick={() => router.push('/sponsors/benefits')}>Sponsor Benefits</Button>
            <Button className='bg-[#5c2f54] mt-6 h-12 text-xl transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer' onClick={() => router.push('/sponsors/form')}>Sponsor Form</Button>
        </div>
    )
}

export default SponsorButtons