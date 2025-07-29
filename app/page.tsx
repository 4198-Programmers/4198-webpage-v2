import Image from "next/image";
import HomeScreenButton from "./components/buttons/HomeScreenButton";

export default function Home() {
  return (
    <div className='flex flex-col items-center pt-24'>
      <Image src='/ROBOCATICON.svg' alt='Robocat Icon' width={250} height={250} />

      <div className='max-w-xl text-center'>
        <h1 className='text-5xl font-bold mt-8 text-white'>We are the RoboCats</h1>
        <p className='text-xl text-main mt-3'>The RoboCats are a FIRST Robotics High School Competition Team, Team 4198 from Waconia, Minnesota. The RoboCats were founded in 2012</p>

        <HomeScreenButton />
      </div>
    </div>
  );
}