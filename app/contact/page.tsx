import Image from 'next/image'
import React from 'react'
import members from '@/data/members.json'

const ContactPage = () => {
    const season = '2026';

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-gray-200 mb-8'>{season} Season</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8'>
                {members.map((member, index) => (
                    <div key={index} className='w-full h-full max-w-[26rem] flex flex-row bg-purple-950/5 backdrop-blur-md border border-white/10 rounded-xl p-6'>
                        <Image src={member.image} alt={member.name} width={120} height={120} draggable={false} className='object-cover max-h-[120px] rounded-2xl' />

                        <div className='flex flex-col justify-center ml-4'>
                            <h2 className='text-2xl text-gray-200 mb-2'>{member.name}</h2>
                            <p className='text-main'>{member.role}</p>
                            <a href={`mailto:${member.email}`} className='text-main text-[clamp(0.8rem,1.5vw,1rem)] whitespace-nowrap overflow-hidden text-ellipsis'>{member.email}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactPage