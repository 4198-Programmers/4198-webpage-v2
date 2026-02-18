import Image from 'next/image'
import React from 'react'
import SponsorButtons from '../components/buttons/SponsorButtons'
import sponsors from '@/data/sponsors.json'

const SponsorsPage = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold mt-8 text-white text-center'>Thank you to all of our sponsors!</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center mt-8">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="w-full h-full relative">
                        <div className='bg-white/5 p-6 sm:p-12 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center'>
                            <a href={sponsor.href} target='_blank' rel='noreferrer' className="w-full h-full flex items-center justify-center">
                                {sponsor.image ? (
                                    <div className="relative w-full h-[72px] sm:h-24" style={{ color: 'white' }}>
                                        <Image src={sponsor.image} alt={sponsor.name} fill draggable={false} className="object-contain m-auto" />
                                    </div>
                                ) : (
                                    <span className='text-center text-white/90 font-medium px-2'>{sponsor.name}</span>
                                )}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <SponsorButtons />
        </div>
    )
}

export default SponsorsPage