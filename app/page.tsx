import Image from "next/image";
import HomeScreenButton from "./components/buttons/HomeScreenButton";
import upcomingEventsData from '@/data/upcoming-events.json';

export default function Home() {
  const upcomingEvents = upcomingEventsData as Array<{ date: string; title: string }>; 

  return (
    <div className='flex flex-col items-center pt-24'>
      <Image src='/ROBOCATICON.svg' alt='Robocat Icon' width={250} height={250} />

      <div className='max-w-xl text-center'>
        <h1 className='text-5xl font-bold mt-8 text-white'>We are the RoboCats</h1>
        <p className='text-xl text-main mt-3'>The RoboCats are a FIRST Robotics High School Competition Team, Team 4198 from Waconia, Minnesota. The RoboCats were founded in 2012</p>

        <HomeScreenButton />
      </div>

      <div className='mt-12 w-full max-w-3xl rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm'>
        <h2 className='text-3xl font-bold text-white text-center'>Upcoming Events</h2>

        <div className='mt-6 space-y-4'>
          {upcomingEvents.map((event) => (
            <div key={event.title} className='grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-gray-400/30 bg-[#2a1222]/40 px-4 py-3'>
              <span className='text-lg font-semibold text-white justify-self-end'>{event.date}</span>
              <span className='text-main text-center'>{event.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}