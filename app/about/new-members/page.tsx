import Image from 'next/image'
import React from 'react'

const NewMembersPage = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6'>
            <h1 className='text-4xl text-white font-bold'>New Members Information</h1>

            <p className='text-main mt-4 text-center md:text-center'>New members that have yet to sign up can sign up at PLACEHOLDER. Meetings will start September 10th and will be held every Monday and Thursday (See About page for more details).</p>
            <p className='text-main mt-4 text-center md:text-center'>The robotics room is located in the North-West corner of the middle school near the buses (see image).</p>

            <Image src='/about/new-members/map.png' alt='Map of middle school with circle around robotics room' width={800} height={400} className='mt-8 rounded-lg shadow-lg' />
        </div>
    )
}

export default NewMembersPage