'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TherapyBooking = () => {
  const [selectedMode, setSelectedMode] = useState('in-person');
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const modes = [
    { id: 'in-person', label: 'In-person', icon: '🏠' },
    { id: 'video', label: 'Video', icon: '📹' },
    { id: 'call', label: 'Call', icon: '📞' },
  ];

  const slots = {
    morning: ['8:00 - 8:45 AM', '9:00 - 9:45 AM', '8:00 - 10:45 AM', '8:00 - 11:45 AM'],
    afternoon: ['12:00 - 12:45 PM', '1:00 - 1:45 PM', '2:00 - 2:45 PM', '3:00 - 3:45 PM'],
    evening: ['5:00 - 5:45 PM', '6:00 - 6:45 PM', '7:00 - 7:45 PM', '8:00 - 8:45 PM'],
  };

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  const handleSlotToggle = (slot) => {
    setSelectedSlots((prevSlots) =>
      prevSlots.includes(slot) ? prevSlots.filter((s) => s !== slot) : [...prevSlots, slot]
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {};

  return (
    <div className="therapy-booking">
      <h1>Please select therapy mode</h1>
      <div className="modes">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className={selectedMode === mode.id ? 'selected' : ''}
            onClick={() => handleModeChange(mode.id)}
          >
            {mode.icon} {mode.label}
          </button>
        ))}
      </div>
      <div className="location">3rd Floor, A2, 35, Block A2, Delhi</div>
      <div className="filter">
        <button className="filter-button">Slots</button>
        <button className="filter-button">Date</button>
      </div>
      <div className="slots">
        <h2>Slots</h2>
        <div className="slots-row">
          {Object.keys(slots).map((timeOfDay) => (
            <div key={timeOfDay} className="time-of-day">
              <h3>{timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}</h3>
              <div className="slots-grid">
                {slots[timeOfDay].map((slot) => (
                  <button
                    key={slot}
                    className={selectedSlots.includes(slot) ? 'selected' : ''}
                    onClick={() => handleSlotToggle(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="calendar">
        <h2 >Available date</h2>
        <Calendar value={selectedDate} onChange={handleDateChange} />
      </div>
      <button className="proceed-button" onClick={handleSubmit}>
        Proceed
      </button>
      <style jsx>{`
        .therapy-booking {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 800px;
          margin: auto;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          background: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 24px;
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        .modes {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }
        .modes button {
          background-color: white;
          border: 2px solid #0070f3;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s, color 0.3s;
        }
        .modes button.selected {
          background-color: #0070f3;
          color: white;
        }
        .location {
          text-align: center;
          margin-bottom: 20px;
          font-weight: bold;
          color: #666;
        }
        .filter {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .filter-button {
          background-color: #0070f3;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          font-size: 14px;
        }
        .slots {
          margin-top: 20px;        
          
        }
        .slots h2 {
          font-size: 18px;
          margin-bottom: 10px;
          text-align: center;
        }
        .slots-row {
          display: flex;
          justify-content: space-between;
          gap:3px
          
        }
        .time-of-day {
          flex: 1;
        }
        .time-of-day h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .slots-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .time-of-day button {
          background-color: white;
          border: 2px solid #0070f3;
          padding: 5px 5px;
          border-radius: 5px;
          margin: 5px;
          cursor: pointer;
          font-size: 14px;
          border-radius: 5px;
          width: 100%;
          transition: background-color 0.3s, color 0.3s;
        }
        .time-of-day button.selected {
          background-color: #0070f3;
          color: white;
        }
        .calendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  height: 100%;
  width: 100%;
  box-sizzing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
}

        .calendar h2 {
          font-size: 18px;
          margin-bottom: 30px;
          text-align: center;
        }
        .proceed-button {
          display: block;
          width: 100%;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default TherapyBooking;
