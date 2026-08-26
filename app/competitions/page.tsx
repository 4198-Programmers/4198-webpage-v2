import React from 'react';

type Competition = {
    name: string;
    url: string;
    year: number;
};

const competitions: Competition[] = [
    {name: 'Minnesota 10,000 Lakes Regional', url: 'https://frc-events.firstinspires.org/2016/MNMI', year: 2016},

    {name: 'Wisconsin Regional', url: 'https://frc-events.firstinspires.org/2017/WIMI', year: 2017},
    {name: 'Minnesota 10,000 Lakes Regional', url: 'https://frc-events.firstinspires.org/2017/MNMI', year: 2017},
    {name: 'FIRST Championship - St. Louis - Carson Subdivision', url: 'https://frc-events.firstinspires.org/2017/CARSON', year: 2017},

    {name: 'Great Northern Regional', url: 'https://frc-events.firstinspires.org/2018/NDGF', year: 2018},
    {name: 'Lake Superior Regional', url: 'https://frc-events.firstinspires.org/2018/MNDU', year: 2018},
    {name: 'FIRST Championship - Detroit - Darwin Subdivision', url: 'https://frc-events.firstinspires.org/2018/DARWIN', year: 2018},

    {name: 'Northern Lights Regional', url: 'https://frc-events.firstinspires.org/2019/MNDU2', year: 2019},
    {name: 'Minnesota 10,000 Lakes Regional', url: 'https://frc-events.firstinspires.org/2019/MNMI', year: 2019},

    {name: 'Great Northern Regional', url: 'https://frc-events.firstinspires.org/2020/NDGF', year: 2020},

    {name: 'Great Northern Regional', url: 'https://frc-events.firstinspires.org/2022/NDGF', year: 2022},
    {name: 'Minnesota 10,000 Lakes Regional', url: 'https://frc-events.firstinspires.org/2022/MNMI', year: 2022},

    {name: 'Great Northern Regional', url: 'https://frc-events.firstinspires.org/2023/NDGF', year: 2023},
    {name: 'Minnesota North Star Regional at La Crosse', url: 'https://frc-events.firstinspires.org/2023/MNMI2', year: 2023},
    {name: 'Minnesota 10,000 Lakes Regional', url: 'https://frc-events.firstinspires.org/2023/MNMI', year: 2023},

    {name: 'Great Northern Regional', url: 'https://frc-events.firstinspires.org/2024/NDGF', year: 2024},
    {name: 'Minnesota 10,000 Lakes Regional', url: 'https://frc-events.firstinspires.org/2024/MNMI', year: 2024},

    {name: 'Great Northern Regional', url: 'https://frc-events.firstinspires.org/2025/NDGF', year: 2025},
    {name: 'Minnesota North Star Regional', url: 'https://frc-events.firstinspires.org/2025/MNUM', year: 2025},

    {name: 'Great Northern Regional', url: 'https://frc-events.firstinspires.org/2026/NDGF', year: 2026},
    {name: 'Minnesota North Star Regional', url: 'https://frc-events.firstinspires.org/2026/MNUM', year: 2026}, 
];

const competitionsByYear = competitions.reduce<Record<number, Competition[]>>((groups, competition) => {
    groups[competition.year] ??= [];
    groups[competition.year].push(competition);
    return groups;
}, {});

const competitionsPage = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6'>
            <h1 className='text-4xl text-white font-bold'>Competitions</h1>

            <div className='mt-10 w-full max-w-4xl'>
                {competitions.length > 0 ? Object.entries(competitionsByYear)
                    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                    .map(([year, yearCompetitions]) => (
                        <section key={year} className='mb-10'>
                            <h1 className='text-3xl text-white font-bold text-center'>{year}</h1>
                            <hr className='my-4 border-gray-400' />

                            <div className='grid gap-4 md:grid-cols-2'>
                                {yearCompetitions.map((competition) => (
                                    <article key={competition.name} className='rounded-lg border border-gray-400 p-5'>
                                        <h2 className='text-2xl font-bold text-white'>{competition.name}</h2>
                                        <a
                                            href={competition.url}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='mt-4 inline-block text-main underline hover:text-white'
                                        >
                                            Competition information
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )) : (
                    <p className='text-main text-center'>Competition information will be posted here soon.</p>
                )}
            </div>
        </div>
    )
}
export default competitionsPage;