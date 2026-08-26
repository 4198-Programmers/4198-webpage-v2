import React from 'react';

const CalendarPage = () => {

    const iframeSrc = 'https://calendar.google.com/calendar/embed?src=waconiarobocats4198%40gmail.com&ctz=America%2FChicago';
    
    return (
        <div style={{ width: '90%', height: '600px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden' }}>
        <iframe
            src={iframeSrc}
            style={{ border: '0', width: '100%', height: '100%', filter: 'invert(0.9) hue-rotate(180deg)' }}
            title="Google Calendar"
        />
        </div>
    );
}
export default CalendarPage;