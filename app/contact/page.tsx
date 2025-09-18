import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
    const season = '2026';

    const members = [
        { name: 'Team 4198', role: 'General Contact', email: 'robocats@team4198.org', image: '/ROBOCATICON.svg' },
        { name: 'Jennifer Winkelman', role: 'Team Coach', email: 'coach@team4198.org', image: '/contact/JenniferWinkelman.png' },
        { name: 'Betty Covington-Nego', role: 'Assistant Team Coach', email: 'coach@team4198.org', image: '/contact/BettyCovingtonnego.png' },
        { name: 'Devan Rupp', role: 'Team Captain', email: '', image: '/contact/Caden.png' },
        { name: 'Evan Fredericks', role: 'Lead Builder', email: 'build@team4198.org', image: '/contact/Evan.png' },
        { name: 'Joe Pauly', role: 'Lead Programmer', email: 'code@team4198.org', image: '/contact/Joe.png' },
        { name: 'Megan Anderson', role: 'Team Electrical Captain', email: 'safety@team4198.org', image: '/contact/Megan.png' },
        { name: 'Caden Thomson', role: 'Outreach Lead', email: 'outreach@team4198.org', image: '/contact/DevanRupp.png' },
        { name: 'Annebelle Lukens', role: 'Media Lead', email: 'media@team4198.org', image: '/contact/Annebelle.png' },
    ]

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-gray-200 mb-8'>{season} Season</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8'>
                {members.map((member, index) => (
                    <div key={index} className='w-full h-full max-w-[26rem] flex flex-row bg-purple-950/5 backdrop-blur-md border border-white/10 rounded-xl p-6'>
                        <a href={`mailto:${member.email}`} className='my-auto'><Image src={member.image} alt={member.name} width={120} height={120} draggable={false} className='object-cover max-h-[120px] rounded-2xl' /></a>

                        <div className='flex flex-col justify-center ml-4'>
                            <h2 className='text-2xl text-gray-200 mb-2'>{member.name}</h2>
                            <p className='text-main'>{member.role}</p>
                            <p className='text-main text-[clamp(0.8rem,1.5vw,1rem)] whitespace-nowrap overflow-hidden text-ellipsis'>{member.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactPage