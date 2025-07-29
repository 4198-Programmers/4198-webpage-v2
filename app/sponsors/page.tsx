import Image from 'next/image'
import React from 'react'
import SponsorButtons from '../components/buttons/SponsorButtons'

const SponsorsPage = () => {
    const sponsors = [
        { name: 'Waconia Public Schools', image: '/sponsors/waconia-school.png', href: 'https://www.isd110.org/' },
        { name: 'Waconia Fire Department', image: '/sponsors/waconia-fire.png', href: 'https://www.waconiamn.gov/' },
        { name: 'Medtronic', image: '/sponsors/medtronic.png', href: 'https://www.medtronic.com/us-en/index.html' },
        { name: 'Tap Magic', image: '/sponsors/tapmagic.png', href: 'https://www.tapmagic.com/' },
        { name: 'Ridgeview', image: '/sponsors/ridgeview.png', href: 'https://www.ridgeviewmedical.org/' },
        { name: 'iFixit', image: '/sponsors/ifixit.png', href: 'https://www.ifixit.com/' },
        { name: 'Pepsi', image: '/sponsors/pepsi.png', href: 'https://www.pepsi.com/' },
        { name: 'Waconia Lions', image: '/sponsors/waconia-lions.svg', href: 'https://waconialionsclub.org/' },
        { name: 'Nordic Components', image: '/sponsors/nordic-components.png', href: 'https://nordicmanufacturing.com/' },
        { name: '3M', image: '/sponsors/3m.svg', href: 'https://www.3m.com/' },
        { name: 'UPS', image: '/sponsors/ups.svg', href: 'https://www.ups.com/' },
        { name: 'Rotary', image: '/sponsors/rotary.png', href: 'https://portal.clubrunner.ca/6749/' },
        { name: 'American Family Insurance', image: '/sponsors/american-family-insurance.svg', href: 'https://www.amfam.com/' },
        { name: 'Image Graphics', image: '/sponsors/image-graphics.svg', href: 'https://imagegraphicspremier.com/' },
        { name: 'Precision Metalforming Association', image: '/sponsors/pma.svg', href: 'https://www.pma.org/twin-cities/' },
        { name: 'Free Geek', image: '/sponsors/free-geek.jpg', href: 'https://www.freegeektwincities.org' },
    ]

    return (
        <div>
            <h1 className='text-4xl font-bold mt-8 text-white text-center'>Thank you to all of our sponsors!</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center mt-8">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="w-full h-full relative">
                        <div className='bg-white/5 p-24 rounded-xl shadow-md hover:shadow-xl transition-all duration-300'>
                            <a href={sponsor.href} target='_blank'>
                                <Image src={sponsor.image} alt={sponsor.name} fill draggable={false} className="object-contain max-w-[160px] m-auto" />
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