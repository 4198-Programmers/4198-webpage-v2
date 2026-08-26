import React from 'react';

const CalendarPage = () => {

    const iframeSrc = 'https://calendar.google.com/calendar/embed?src=waconiarobocats4198%40gmail.com&ctz=America%2FChicago';
    
    return (
        <div className='mx-auto aspect-[4/5] w-full max-w-[1200px] overflow-hidden rounded-2xl md:aspect-[16/9]'>
        <iframe
            src={iframeSrc}
            style={{ border: '0', width: '100%', height: '100%', filter: 'invert(0.9) hue-rotate(180deg)' }}
            title="Google Calendar"
        />
        </div>
    );
}
export default CalendarPage;