import Image from 'next/image'
import React from 'react'

type Team = {
    name: string;
    description: string;
};

type Role = {
    name: string,
    description: string;
}

const teams: Team[] = [
    {
        name: 'Build Team',
        description: '',
    },
    {
        name: 'Programming Team',
        description: '',
    },
    {
        name: 'Electrical Team',
        description: '',
    },
    {
        name: 'Outreach',
        description: '',
    },
    {
        name: 'Media',
        // description: 'Share the team\'s work through photography, video, and social media',
        description: '',
    },
    {
        name: 'Strategy Team',
        description: '',
    },
    {
        name: 'Drive Team',
        description: '',
    }
];

const roles: Role[] = [
    {
        name: 'Team Captain',
        description: '',
    },
    {
        name: 'Build Captain',
        description: '',
    },
    {
        name: 'Electrical Captain',
        description: '',
    },
    {
        name: 'Programming Captain',
        description: ''
    },
    {
        name: 'Safety Captain',
        description: '',
    },
    {
        name: 'Driver',
        description: '',
    },
    {
        name: 'Buttons/Operator',
        description: '',
    },
    {
        name: 'Drive Coach',
        description: '',
    },
    {
        name: 'Human Player',
        description: ''
    },
    {
        name: 'Technician',
        description: '',
    },
];

const NewMembersPage = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6'>
            <h1 className='text-4xl text-white font-bold'>New Members Information</h1>

            <p className='text-main mt-4 text-center'>
                New members that have yet to sign up can sign up at PLACEHOLDER. Meetings will start September 10th and will be held every Monday and Thursday 3:30pm-6:00pm.
            </p>

            <p className='text-main mt-4 text-center'>
                The robotics room is located in the North-West corner of the middle school near the buses (see image).
            </p>

            <Image 
                src='/about/new-members/map.png' 
                alt='Map of middle school with circle around robotics room' 
                width={800} 
                height={400} 
                className='mt-8 rounded-lg shadow-lg' 
            />

            <hr className='my-6 w-full max-w-4xl border-gray-400'/>

            <h2 className='text-3xl text-white font-bold'>
                What Students Can Do
            </h2>

            <p className='text-main mt-4 text-center'>
                On the robotics team, we are always in need of new students to help our team reach its objectives. There are many, many ways to help out. Not all of them require the ability to make a robot.
            </p>

            <hr className='my-6 w-full max-w-4xl border-gray-400'/>

            <h3 className='mt-3 text-2xl text-white font-bold'>
                Teams
            </h3>

            <div className='mt-10 grid w-full max-w-4xl gap-4 md:grid-cols-2'>
                {teams.map((team) => (
                    <article key={team.name} className='rounded-lg border border-gray-400 p-5'>
                        <h3 className='text-2xl font-bold text-white'>{team.name}</h3>
                        <p className='text-main mt-3'>{team.description}</p>
                    </article>
                ))}
            </div>

            <hr className='my-6 w-full max-w-4xl border-gray-400'/>

            <h3 className='text-2xl text-white font-bold'>
                Leadership/Important Roles
            </h3>

            <div className='mt-6 grid w-full max-w-4xl gap-4 md:grid-cols-2'>
                {roles.map((role) => (
                    <article key={role.name} className='rounded-lg border border-gray-400 p-5'>
                        <h3 className='text-2xl font-bold text-white'>{role.name}</h3>
                        <p className='text-main mt-3'>{role.description}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default NewMembersPage