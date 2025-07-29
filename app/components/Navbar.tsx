'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const links = [
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact Us' },
        { href: '/events', label: 'Events' },
        { href: '/sponsors', label: 'Sponsors' }
    ];

    return (
        <nav className='relative top-3'>
            <div className='flex flex-row items-center'>
                <Link href='/'><Image src='/ROBOCATICON.svg' alt='Robocat Icon' draggable={false} width={50} height={50} /></Link>
                <Link href='/' className='text-xl ml-3 text-white'>Team 4198</Link>

                <div className='hidden md:inline md:ml-auto md:mr-4 md:space-x-8'>
                    {links.map(link => (
                        <Link key={link.href} href={link.href} className='text-lg text-gray-200 hover:text-gray-300 transition'>{link.label}</Link>
                    ))}
                </div>

                <div className='md:hidden ml-auto'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={'ghost'}><Menu size={28} className='text-white' /></Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className='bg-[#2e1729]/40 backdrop-blur-xl'>
                            {links.map(link => (
                                <a key={link.href} href={link.href} className='block px-4 py-2 text-lg text-gray-200 hover:bg-gray-700'>
                                    {link.label}
                                </a>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar