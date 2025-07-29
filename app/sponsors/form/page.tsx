'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const SponsorFormPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1 className='text-4xl font-bold text-white text-center mt-8'>Sponsor Form</h1>

            <div className='flex flex-col items-center mx-auto mt-8 space-y-6'>
                <a href='/sponsors/form/SponsorForm.pdf' target='_blank'><Image src='/sponsors/form/form.webp' alt='Sponsor Form' width={600} height={400} draggable={false} /></a>
                <Button className='bg-[#5c2f54] mt-6 h-12 text-xl mx-auto transition-all hover:-translate-y-1 hover:text-[#f0f0f0] hover:shadow-3xl hover:shadow-[#5c2f54] hover:bg-[#4f2848] hover:cursor-pointer' onClick={() => router.push('/sponsors/form/SponsorForm.pdf')}>Download Sponsor Form</Button>
            </div>
        </div>
    )
}

export default SponsorFormPage