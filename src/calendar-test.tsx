import { DayPicker } from 'react-day-picker';
import { useState } from 'react';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Select a Date</h2>
      <DayPicker selected={selectedDate} onDayClick={handleDateChange} />
      {selectedDate && <p>Selected date: {selectedDate.toLocaleDateString()}</p>}
    </div>
  );
}
