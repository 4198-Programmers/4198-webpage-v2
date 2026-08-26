import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    const images = [
        '/about/Picture1.webp',
        '/about/Picture2.webp',
        '/about/Picture3.webp',
        '/about/Picture4.webp',
        '/about/Picture5.webp',
        '/about/Picture6.webp',
        '/about/Picture7.webp',
        '/about/Picture8.webp',
    ]

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-white font-bold'>About Us</h1>

            <div className='max-w-4xl mt-10'>
                <p className='text-main'>The RoboCats are a FIRST Robotics high school competition team from Waconia, Minnesota. They are supported by ISD 110 and the Minnesota State High School Sports League. The team was started in 2012, with less than 10 members. Each year the RoboCats team has continued to grow and there are 27 current members on the team</p>
                <p className='text-main mt-8'>The RoboCats compete in multiple regional events on and off season. They have qualified and competed in the Minnesota State High School Robotics Tournament in 2015 and 2017. They have also qualified and competed in the World Championship in 2015, 2017 and 2018</p>
            </div>

            <h1 className="mt-16 text-4xl text-white font-bold">Season Breakdown</h1>

            <div className='w-full max-w-4xl mt-10'>
                <h2 className='text-4xl text-white font-bold'>
                    Off Season
                </h2>
                <h2 className='mt-4 text-4xl text-white font-bold'>
                    On Season
                </h2>
            </div>

            <div className='flex justify-center mt-24'>
                <div className='columns-1 sm:columns-2 md:columns-3 space-y-12 columns'>
                    {images.map((image, index) => (
                        <Image key={index} src={image} alt={`About RoboCats ${index + 1}`} width={500} height={300} className='object-cover rounded-2xl' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutPage