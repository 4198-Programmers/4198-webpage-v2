import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const EventsPage = () => {
    // You could also pull this from an API instead of hard coding the events into here

    const events = [
        { name: 'EMCC Robotics Invitational', date: new Date('2025-10-26'), time: '8:00 AM - 5:00 PM' },
        { name: 'Minne Mini Robotics Invitational', date: new Date('2025-11-23'), time: '8:00 AM - 5:00 PM' }
    ]

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold mt-8 text-white'>RoboCats Events</h1>

            <Table className='max-w-6xl mx-auto mt-4'>
                <TableHeader>
                    <TableRow className='hover:bg-[#5c2f54]/20'>
                        <TableHead className='w-[400px] text-main'>Event Name</TableHead>
                        <TableHead className='text-main'>Date</TableHead>
                        <TableHead className='text-main'>Time</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {events.map((event, index) => {
                        if (Date.now() > event.date.getTime()) {
                            // Skip past events, no need to update every event. Only update once a year
                            return null;
                        }

                        return (
                            <TableRow key={index} className='hover:bg-[#5c2f54]/20'>
                                <TableCell className='text-main'>{event.name}</TableCell>
                                <TableCell className='text-main'>{event.date.toDateString()}</TableCell>
                                <TableCell className='text-main'>{event.time}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default EventsPage