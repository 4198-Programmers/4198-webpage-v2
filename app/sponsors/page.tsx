import Image from 'next/image'
import React from 'react'
import SponsorButtons from '../components/buttons/SponsorButtons'

const SponsorsPage = () => {
    const sponsors = [
        { name: 'iFixit', href: 'https://www.ifixit.com/', image: '/sponsors/ifixit.png' },
        { name: 'Pepsi', href: 'https://www.pepsi.com/', image: '/sponsors/pepsi.png' },
        { name: '3M', href: 'https://www.3m.com/', image: '/sponsors/3m.svg' },
        { name: 'Mackenthuns', href: 'https://mackenthuns.com/', image: '/sponsors/mackenthuns.png' },
        { name: 'American Family', href: 'https://www.amfam.com/', image: '/sponsors/american-family-insurance.svg' },
        { name: 'Waconia Public Schools', href: 'https://isd110.org/', image: '/sponsors/waconia-school.png' },
        { name: 'Waconia Lions’ Club', href: 'https://waconialionsclub.org/', image: '/sponsors/waconia-lions.svg' },
        { name: 'South Town Refrigeration', href: 'https://www.strm-mn.com/', image: '/sponsors/str.png' },
        { name: 'Image Graphics Premiere', href: 'https://imagegraphicspremier.com/', image: '/sponsors/image-graphics.svg' },
        { name: 'Gene Haas', href: 'https://www.haascnc.com/content/ghf/en/home.html', image: '/sponsors/haas.png' },
        { name: 'CD Products', href: 'https://www.cdproductsinc.com/', image: '/sponsors/cd.jpg' },
        { name: 'UPS', href: 'https://locations.theupsstore.com/mn/waconia/712-vista-blvd', image: '/sponsors/ups.svg' },
        { name: 'Fusion', href: 'https://fusionimaging.com/', image: '/sponsors/fusion.webp' },
        { name: 'Sackett Waconia', href: 'https://www.sackettwaconia.com/', image: '/sponsors/sackett.jpg' },
        { name: "Culvers'", href: 'https://www.culvers.com/restaurants/waconia-mn-hwy-5', image: '/sponsors/culvers.svg' },
        { name: 'PMA (Ajax)', href: 'https://www.pma.org/home/', image: '/sponsors/pma.svg' },
        { name: 'FreeGeek', href: 'https://www.freegeektwincities.org/', image: '/sponsors/free-geek.jpg' },
        { name: 'TEL', href: 'https://www.tel.com/', image: '/sponsors/tel.svg' },
        { name: 'RTX', href: 'https://www.rtx.com/', image: '/sponsors/rtx.svg' },
        { name: 'Precision Control Services', href: 'https://www.alignable.com/waconia-mn/precision-control-services-llc', image: '/sponsors/precision-control.png' }, // todo get logo
        { name: 'Wiha', href: 'https://www.wihatools.com/', image: '/sponsors/wiha.avif' },
        { name: 'Medtronic', href: 'https://www.medtronic.com/en-us/index.html', image: '/sponsors/medtronic.png' },
        { name: 'HEI Collision Center', href: 'https://www.heicollisionmn.com/', image: '/sponsors/hei.jpg' },
        { name: 'Foxden', href: 'https://www.foxdenbgc.com/', image: '/sponsors/foxden.webp' },
        { name: 'The Dog Nanny', href: 'https://jennathedognanny.com/', image: '/sponsors/nanny.png' },
        { name: 'Yetzers', href: 'https://yetzers.com/', image: '/sponsors/yetzer.png' },
        { name: 'Victoria Floral', href: 'https://www.victoriarosefloral.com/', image: '/sponsors/vrf.webp' },
        { name: 'Victoria Burrow', href: 'https://theburrowmn.com/victoria', image: '/sponsors/burrow.webp' },
    ]

    return (
        <div>
            <h1 className='text-4xl font-bold mt-8 text-white text-center'>Thank you to all of our sponsors!</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center mt-8">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="w-full h-full relative">
                        <div className='bg-white/5 p-6 sm:p-12 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center'>
                            <a href={sponsor.href} target='_blank' rel='noreferrer' className="w-full h-full flex items-center justify-center">
                                {sponsor.image ? (
                                    <div className="relative w-full h-[72px] sm:h-24" style={{color:'white'}}>
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