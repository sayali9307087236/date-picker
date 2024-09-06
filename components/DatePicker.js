// import React, { useEffect } from 'react';
// import { useDatePickerStore } from '../store';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// // DatePicker component
// export default function DatePickerComponent() {
//   const {
//     startDate,
//     endDate,
//     setStartDate,
//     setEndDate,
//     recurrenceType,
//     // setRecurrenceType,
//     customization,
//     // setCustomization,
//     // selectedDates,
//     setSelectedDates,
//   } = useDatePickerStore();

//   // Handle the logic to compute recurring dates
//   const computeRecurringDates = () => {
//     let dates = [];
//     let currentDate = new Date(startDate);

//     // Sample logic to handle daily recurrence
//     if (recurrenceType === 'Daily') {
//       while (currentDate <= endDate || !endDate) {
//         dates.push(new Date(currentDate));
//         currentDate.setDate(currentDate.getDate() + customization.daily);
//       }
//     }
//     setSelectedDates(dates);
//   };

//   useEffect(() => {
//     if (startDate) {
//       computeRecurringDates();
//     }
//   }, [startDate, endDate, recurrenceType, customization]);

//   return (
//     <div className="p-4 max-w-lg mx-auto">
//       {/* Date Picker */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold">Select Start Date</h3>
//         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//       </div>

//       <div className="mb-4">
//         <h3 className="text-lg font-semibold">Select End Date (Optional)</h3>
//         <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
//       </div>

//       {/* Recurrence Options */}
//       <RecurrenceOptions />

//       {/* Customization */}
//       <RecurrenceCustomization />

//       {/* Calendar Preview */}
//       <h3 className="text-lg font-semibold mt-4">Recurring Dates Preview</h3>
//       <CalendarPreview />
//     </div>
//   );
// }

// // RecurrenceOptions component
// const RecurrenceOptions = () => {
//   const { recurrenceType, setRecurrenceType } = useDatePickerStore();

//   const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

//   return (
//     <div className="mb-4">
//       <h3 className="text-lg font-semibold">Select Recurrence Pattern</h3>
//       <div className="space-x-4">
//         {options.map((option) => (
//           <button
//             key={option}
//             className={`px-4 py-2 border rounded ${recurrenceType === option ? 'bg-blue-500 text-white' : 'bg-white'}`}
//             onClick={() => setRecurrenceType(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // RecurrenceCustomization component
// const RecurrenceCustomization = () => {
//   const { recurrenceType, customization, setCustomization } = useDatePickerStore();

//   return (
//     <div className="mb-4">
//       <h3 className="text-lg font-semibold">Customize Recurrence</h3>
//       {recurrenceType === 'Daily' && (
//         <div>
//           Every <input type="number" value={customization.daily} onChange={(e) => setCustomization({ daily: e.target.value })} /> days
//         </div>
//       )}
//       {recurrenceType === 'Weekly' && (
//         <div>
//           Every <input type="number" value={customization.weekly} onChange={(e) => setCustomization({ weekly: e.target.value })} /> weeks
//         </div>
//       )}
//       {recurrenceType === 'Monthly' && (
//         <div>
//           Every <input type="number" value={customization.monthly} onChange={(e) => setCustomization({ monthly: e.target.value })} /> months
//         </div>
//       )}
//       {recurrenceType === 'Yearly' && (
//         <div>
//           Every <input type="number" value={customization.yearly} onChange={(e) => setCustomization({ yearly: e.target.value })} /> years
//         </div>
//       )}
//     </div>
//   );
// };

// // CalendarPreview component
// const CalendarPreview = () => {
//   const { selectedDates } = useDatePickerStore();

//   return (
//     <Calendar
//       tileClassName={({ date }) => selectedDates.find((d) => d.toDateString() === date.toDateString()) ? 'bg-blue-200' : ''}
//     />
//   );
// };



import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RecurrenceOptions from './RecurrenceOptions'; 
import RecurrenceCustomization from './RecurrenceCustomization';
import CalendarPreview from './CalendarPreview';
import { useDatePickerStore } from '../store/store'; // Assuming this is the correct store location

// DatePicker component
export default function DatePickerComponent() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setSelectedDates,
    recurrenceType,
    customization,
  } = useDatePickerStore();

  // Function to compute recurring dates
  const computeRecurringDates = () => {
    if (!startDate) return; // Exit if no start date is selected

    let dates = [];
    let currentDate = new Date(startDate);
    const end = endDate || new Date(startDate); // Use start date as end if end is not set

    while (currentDate <= end) {
      dates.push(new Date(currentDate));

      switch (recurrenceType) {
        case 'Daily':
          currentDate.setDate(currentDate.getDate() + customization.daily);
          break;
        case 'Weekly':
          currentDate.setDate(currentDate.getDate() + customization.weekly * 7);
          break;
        case 'Monthly':
          currentDate.setMonth(currentDate.getMonth() + customization.monthly);
          break;
        case 'Yearly':
          currentDate.setFullYear(currentDate.getFullYear() + customization.yearly);
          break;
        default:
          break;
      }
    }

    setSelectedDates(dates);
  };

  // Trigger date computation when relevant state changes
  useEffect(() => {
    computeRecurringDates();
  }, [startDate, endDate, recurrenceType, customization]); // Recalculate when these values change

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Date Picker */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Select Start Date</h3>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Select End Date (Optional)</h3>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>

      {/* Recurrence Options */}
      <RecurrenceOptions />

      {/* Customization */}
      <RecurrenceCustomization />

      {/* Calendar Preview */}
      <h3 className="text-lg font-semibold mt-4">Recurring Dates Preview</h3>
      <CalendarPreview />
    </div>
  );
}