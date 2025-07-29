import { Separator } from '@/components/ui/separator'
import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
    const links = [
        { href: 'https://www.instagram.com/4198robocatsofficial', icon: <Instagram /> },
        { href: 'https://twitter.com/robocats_4198', icon: <Twitter /> },
        { href: 'https://www.facebook.com/RoboCats4198', icon: <Facebook /> },
        { href: 'https://github.com/4198-Programmers', icon: <Github /> },
        { href: 'https://www.youtube.com/@RoboCats4198/featured', icon: <Youtube /> },
        { href: 'https://www.tiktok.com/@team4198', icon: <Image src='/photos/tiktok.svg' alt='TikTok' draggable={false} width={50} height={50} className='min-w-[1rem] max-w-[1rem]' /> },
        { href: 'https://www.thebluealliance.com/team/4198/', icon: <Image src='/photos/tba.png' alt='TBA' draggable={false} width={50} height={50} className='min-w-[1rem] max-w-[1rem]' /> }
    ];

    return (
        <div className='max-w-screen px-10 md:px-20 space-y-4 mt-10 pb-10'>
            <Separator />

            <div className='flex flex-row'>
                <p className='text-gray-300'>2025 RoboCats</p>

                <div className='ml-auto space-x-4 flex flex-row items-center scale-80'>
                    {links.map(link => (
                        <a key={link.href} href={link.href} className='text-white'>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer