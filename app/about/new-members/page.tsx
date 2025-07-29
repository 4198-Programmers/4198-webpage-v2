import Image from 'next/image'
import React from 'react'

const NewMembersPage = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6'>
            <h1 className='text-4xl text-gray-200 mb-8 text-center'>New Members Information</h1>

            <p className='text-main mt-4 text-center md:text-left'>Any new robocats that didn't sign up during open house still can join the team. Any Waconia High School Students grades 9-12 can join. Send an email to coach@team4198.org with your school Email to join. Meetings will start Tuesdays after school in September at the robotics room located at the middle school in the northwest corner near the bus pickup. If you aren't too into programing or building that's fine, there is more to the team! If you think you have interest you can show up to some pre-season meetings and see if its for you.</p>
            <p className='text-main mt-4 text-center md:text-left'>The robotics room is located in the North-West corner of the middle school (see image).</p>
            <p className='text-main mt-4 text-center md:text-left'>If you missed these dates and would still like to join the team or just check it out email coach@team4198.org for more information.</p>

            <Image src='/about/new-members/map.png' alt='Map of middle school with circle around robotics room' width={800} height={400} className='mt-8 rounded-lg shadow-lg' />
        </div>
    )
}

export default NewMembersPage