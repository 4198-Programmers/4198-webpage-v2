import Image from 'next/image'
import React from 'react'

const WhySponsorPage = () => {
    const images = [
        '/sponsors/why-sponsor/picture1.webp',
        '/sponsors/why-sponsor/picture2.webp',
        '/sponsors/why-sponsor/picture5.webp',
        '/sponsors/why-sponsor/banner.webp'
    ]

    return (
        <div className='flex flex-col items-center mx-auto p-4 text-center'>
            <h1 className='text-3xl font-bold mb-4 text-white'>Why Become A Sponsor?</h1>
            <p className='text-lg mb-4 text-main'>The Waconia RoboCats are a high school robotics team, located in Minnesota. The RoboCats are a member of the FIRST Program (For Inspiration and Recognition of Science and Technology). Our robotics program provides 9th-12th grade students with opportunity to design, build, program and compete in FIRST Robotics Competitions. Mentorship to motivate students in exploring future careers in science, technology, engineering and math is the core for our extracurricular activity; along with building self-confidence, knowledge and life skills.</p>
            <p className='text-lg mb-4 text-main'>Each year, almost 9,000 FIRST Robotics Competition(FRC) teams from around the world have six weeks to design and build a functional robot to perform at regional competitions after the "game" is revealed in January. Minnesota has 215 registered FRC teams.</p>
            <p className='text-lg mb-4 text-main'>The RoboCats take great pride in their team! They have drive, dedication and teamwork. They have qualified and participated in the Minnesota State High School Robotics Tournament in 2015 and 2017. They have also qualified and participated in the World Championships in 2015, 2017 and 2018. With the growth of the RoboCats, they need your support to continue to participate in the FIRST competitions. There are many facets to the budget. To be a member of FIRST a $5000 fee is required. Secondary competition fees are $4000 for each event. Building a multi-functional electronic robot is also very expensive. Along with these fees, the team needs building materials, tools, transportation and more. While the students pay a modest activities fee to participate in the RoboCats, this only covers a portion of the budget. The remaining comes from fundraising and sponsorship. This is why we need your support!</p>

            <div className='columns-1 sm:columns-2 md:columns-3 space-y-12 columns mt-8'>
                {images.map((image, index) => (
                    <div key={index} className='mb-4'>
                        <Image src={image} alt={`Sponsor Image ${index + 1}`} width={350} height={400} className='w-full h-auto rounded-lg shadow-lg' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhySponsorPage