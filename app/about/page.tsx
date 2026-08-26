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
                <p className='text-main'>
                    The RoboCats are a FIRST Robotics high school competition team from Waconia, Minnesota. They are supported by ISD 110 and the Minnesota State High School Sports League. The team was started in 2012, with less than 10 members. Each year the RoboCats team has continued to grow and there are 27 current members on the team
                </p>

                <p className='text-main mt-8'>
                    The RoboCats compete in multiple regional events on and off season. They have qualified and competed in the Minnesota State High School Robotics Tournament in 2015 and 2017. They have also qualified and competed in the World Championship in 2015, 2017 and 2018
                </p>
            </div>

            <hr className='my-6 w-full max-w-4xl border-gray-400'/>

            <h1 className="text-4xl text-white font-bold mt-6">The Game</h1>

            <div className='max-w-4xl mt-10'>
                <p className='text-main text-center'>
                    Every year, First Robotics Competition introduces a new game that typically follows the same guidelines. Two teams of three robotics organizations face off on a field trying to score points through a variety of methods.
                </p>

                <p className='text-main text-center font-bold mt-4'>
                    Phase 1: Autonomous Period (Auto)
                </p>

                <p className='text-main text-center'>
                    This is the first period of the game. During this time, robots are preprogrammed (no human input) to score game pieces through either picking and placing them, or shooting them. They can also typically score points by climbing an objective, or simply moving out of the starting zone.
                </p>

                <p className='text-main text-center font-bold mt-4'>
                    Phase 2: Teleoperated Period (Teleop)
                </p>

                <p className='text-main text-center'>
                    In this period of the game, the robot is controlled by the human drivers. We have two of them, "Buttons", and "Driver" alongside a Drive Coach. The Drive Coach instructs and guides the two drivers to score as many points as possible during the game. Along the sides of the field, there is also a human player. This player requires extreme athletic ability for a robotics member. Their job is usually to launch game pieces into an objective.
                </p>

                <p className='text-main text-center font-bold mt-4'>
                    Phase 3: Endgame
                </p>

                <p className='text-main text-center'>
                    Also a part of teleop, this is the last stage of the game. It unlocks a new, unique, objective for the drivers. Perhaps to reach a specific spot on the map or climb an objective. 
                </p>
            </div>

            <Image
                src='/about/2026RebuiltField.webp'
                alt='2026 Rebuilt game field'
                width={1200}
                height={675}
                className='mt-8 w-1/2 max-w-4xl rounded-lg'
            />

            <hr className='my-6 w-full max-w-4xl border-gray-400'/>

            <h1 className="text-4xl text-white font-bold mt-6">Season Breakdown</h1>

            <div className='flex w-full max-w-4xl flex-col gap-50 mt-10 md:flex-row'>
                <div className='flex w-full flex-col items-center text-center md:w-1/2'>
                    <h2 className='text-3xl text-white font-bold'>
                        Off Season
                    </h2>

                    <p className='text-main mt-4'>
                        Timeframe: September 10th - January 8th
                    </p>

                    <p className='text-main mt-4'>
                        During Off Season, the team typically meets every Monday and Thursday. Throughout this period we will begin teaching new members the basics of programming, building, and/or wiring a robot.
                    </p>
                </div>

                <div className='flex w-full flex-col items-center text-center md:w-1/2'>
                    <h2 className='text-3xl text-white font-bold'>
                        On Season
                    </h2>

                    <p className='text-main mt-4'>
                        Timeframe: January 9th - May
                    </p>

                    <p className='text-main mt-4 font-bold'>
                        Kickoff
                    </p>

                    <p className='text-main'>
                        On Season starts when the new game for the year is released&mdash;typically the second Saturday in January. "<u>Kickoff</u>" as it is called is the day the game is released and the team gets together to start brainstorming ideas for a robot. At this point, we up our meetings to almost every weekday.
                    </p>

                    <p className='text-main mt-4 font-bold'>
                        Leading up to Week Zero
                    </p>

                    <p className='text-main'>
                        In the following six weeks, the team meets every week day to prototype, build, wire, and program a robot. After the six weeks, a period called "<u>Week Zero</u>" begins. This is the first week of testing competitions (typically our team does one).
                    </p>

                    <p className='text-main mt-4 font-bold'>
                        Main Season
                    </p>

                    <p className='text-main'>
                        Throughout the rest of the season, we have two actual competitions while continuing to repair and improve our robot.
                    </p>

                    <p className='text-main mt-4 font-bold'>
                        Worlds
                    </p>

                    <p className='text-main'>
                        At this point, if we have won a competition, we will go to "Worlds". Worlds is just the nickname for the World Championship. If we make it, we get to compete against teams from all across the world.
                    </p>
                </div>
            </div>

            {/* <div className='flex justify-center mt-24'>
                <div className='columns-1 sm:columns-2 md:columns-3 space-y-12 columns'>
                    {images.map((image, index) => (
                        <Image key={index} src={image} alt={`About RoboCats ${index + 1}`} width={500} height={300} className='object-cover rounded-2xl' />
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default AboutPage