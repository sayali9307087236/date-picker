// import React, { useEffect, useCallback } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import RecurrenceOptions from './RecurrenceOptions';
// import RecurrenceCustomization from './RecurrenceCustomization';
// import CalendarPreview from './CalendarPreview';
// import { useDatePickerStore } from '../store/store';

// export default function DatePickerComponent() {
//   const {
//     startDate,
//     endDate,
//     setStartDate,
//     setEndDate,
//     setSelectedDates,
//   } = useDatePickerStore();

//   // Memoized callback to compute recurring dates
//   const computeRecurringDates = useCallback(() => {
//     // Your logic here to calculate recurring dates
//   }, [startDate, endDate]);

//   useEffect(() => {
//     if (startDate) {
//       computeRecurringDates();
//     }
//   }, [startDate, endDate, computeRecurringDates]);

//   return (
//     <div className="p-4 max-w-lg mx-auto">
//       <h3 className="text-lg font-semibold">Select Start Date</h3>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         placeholderText="Select start date"
//         className="border rounded p-2 w-full"
//       />

//       <h3 className="text-lg font-semibold mt-4">Select End Date (Optional)</h3>
//       <DatePicker
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         placeholderText="Select end date"
//         className="border rounded p-2 w-full"
//       />

//       <RecurrenceOptions />
//       <RecurrenceCustomization />
//       <CalendarPreview />
//     </div>
//   );
// }



// import React, { useEffect, useCallback } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import RecurrenceOptions from './RecurrenceOptions';
// import RecurrenceCustomization from './RecurrenceCustomization';
// import CalendarPreview from './CalendarPreview';
// import { useDatePickerStore } from '../store/store';

// export default function DatePickerComponent() {
//   const {
//     startDate,
//     endDate,
//     setStartDate,
//     setEndDate,
//     setSelectedDates,
//     recurrenceType,
//     customization
//   } = useDatePickerStore();

//   // Function to compute recurring dates
//   const computeRecurringDates = useCallback(() => {
//     let dates = [];
//     let currentDate = new Date(startDate);

//     if (!startDate) return; // No start date, nothing to compute

//     const end = endDate || new Date(startDate); // Use start date as end if end is not set

//     while (currentDate <= end) {
//       dates.push(new Date(currentDate));

//       switch (recurrenceType) {
//         case 'Daily':
//           currentDate.setDate(currentDate.getDate() + customization.daily);
//           break;
//         case 'Weekly':
//           currentDate.setDate(currentDate.getDate() + customization.weekly * 7);
//           break;
//         case 'Monthly':
//           currentDate.setMonth(currentDate.getMonth() + customization.monthly);
//           break;
//         case 'Yearly':
//           currentDate.setFullYear(currentDate.getFullYear() + customization.yearly);
//           break;
//         default:
//           break;
//       }
//     }

//     setSelectedDates(dates);
//   }, [startDate, endDate, recurrenceType, customization, setSelectedDates]);

//   useEffect(() => {
//     computeRecurringDates();
//   }, [startDate, endDate, recurrenceType, customization, computeRecurringDates]);

//   return (
//     <div className="p-4 max-w-lg mx-auto">
//       <h3 className="text-lg font-semibold">Select Start Date</h3>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         placeholderText="Select start date"
//         className="border rounded p-2 w-full"
//       />

//       <h3 className="text-lg font-semibold mt-4">Select End Date (Optional)</h3>
//       <DatePicker
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         placeholderText="Select end date"
//         className="border rounded p-2 w-full"
//       />

//       <RecurrenceOptions />
//       <RecurrenceCustomization />
//       <CalendarPreview />
//     </div>
//   );
// }




// import React, { useEffect, useCallback } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import RecurrenceOptions from './RecurrenceOptions';
// import RecurrenceCustomization from './RecurrenceCustomization';
// import CalendarPreview from './CalendarPreview';
// import { useDatePickerStore } from '../store/store';

// export default function DatePickerComponent() {
//   const {
//     startDate,
//     endDate,
//     setStartDate,
//     setEndDate,
//     setSelectedDates,
//     recurrenceType,
//     customization
//   } = useDatePickerStore();

//   // Function to compute recurring dates
//   const computeRecurringDates = useCallback(() => {
//     let dates = [];
//     let currentDate = new Date(startDate);

//     if (!startDate) return; // No start date, nothing to compute

//     const end = endDate || new Date(startDate); // Use start date as end if end is not set

//     while (currentDate <= end) {
//       dates.push(new Date(currentDate));

//       switch (recurrenceType) {
//         case 'Daily':
//           currentDate.setDate(currentDate.getDate() + (customization.daily || 1));
//           break;
//         case 'Weekly':
//           currentDate.setDate(currentDate.getDate() + (customization.weekly || 1) * 7);
//           break;
//         case 'Monthly':
//           currentDate.setMonth(currentDate.getMonth() + (customization.monthly || 1));
//           break;
//         case 'Yearly':
//           currentDate.setFullYear(currentDate.getFullYear() + (customization.yearly || 1));
//           break;
//         default:
//           break;
//       }
//     }

//     setSelectedDates(dates);
//   }, [startDate, endDate, recurrenceType, customization, setSelectedDates]);

//   useEffect(() => {
//     computeRecurringDates();
//   }, [startDate, endDate, recurrenceType, customization, computeRecurringDates]);

//   return (
//     <div className="p-4 max-w-lg mx-auto">
//       <h3 className="text-lg font-semibold">Select Start Date</h3>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         placeholderText="Select start date"
//         className="border rounded p-2 w-full"
//       />

//       <h3 className="text-lg font-semibold mt-4">Select End Date (Optional)</h3>
//       <DatePicker
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         placeholderText="Select end date"
//         className="border rounded p-2 w-full"
//       />

//       <RecurrenceOptions />
//       <RecurrenceCustomization />
//       <CalendarPreview />
//     </div>
//   );
// }





// import React, { useEffect, useCallback } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import RecurrenceOptions from './RecurrenceOptions';
// import RecurrenceCustomization from './RecurrenceCustomization';
// import CalendarPreview from './CalendarPreview';
// import { useDatePickerStore } from '../store/store';

// export default function DatePickerComponent() {
//   const {
//     startDate,
//     endDate,
//     setStartDate,
//     setEndDate,
//     setSelectedDates,
//     recurrenceType,
//     customization
//   } = useDatePickerStore();

//   // Function to compute recurring dates
//   const computeRecurringDates = useCallback(() => {
//     let dates = [];
//     let currentDate = new Date(startDate);

//     if (!startDate) return; // No start date, nothing to compute

//     const end = endDate || new Date(startDate); // Use start date as end if end is not set

//     while (currentDate <= end) {
//       dates.push(new Date(currentDate));

//       switch (recurrenceType) {
//         case 'Daily':
//           currentDate.setDate(currentDate.getDate() + (customization.daily || 1));
//           break;
//         case 'Weekly':
//           currentDate.setDate(currentDate.getDate() + (customization.weekly || 1) * 7);
//           break;
//         case 'Monthly':
//           currentDate.setMonth(currentDate.getMonth() + (customization.monthly || 1));
//           break;
//         case 'Yearly':
//           currentDate.setFullYear(currentDate.getFullYear() + (customization.yearly || 1));
//           break;
//         default:
//           break;
//       }
//     }

//     setSelectedDates(dates);
//   }, [startDate, endDate, recurrenceType, customization, setSelectedDates]);

//   useEffect(() => {
//     computeRecurringDates();
//   }, [startDate, endDate, recurrenceType, customization, computeRecurringDates]); // Ensure computeRecurringDates is included here

//   return (
//     <div className="p-4 max-w-lg mx-auto">
//       <h3 className="text-lg font-semibold">Select Start Date</h3>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         placeholderText="Select start date"
//         className="border rounded p-2 w-full"
//       />

//       <h3 className="text-lg font-semibold mt-4">Select End Date (Optional)</h3>
//       <DatePicker
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         placeholderText="Select end date"
//         className="border rounded p-2 w-full"
//       />

//       <RecurrenceOptions />
//       <RecurrenceCustomization />
//       <CalendarPreview />
//     </div>
//   );
// }





import React, { useEffect, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RecurrenceOptions from './RecurrenceOptions'; // Ensure these files exist
import RecurrenceCustomization from './RecurrenceCustomization';
import CalendarPreview from './CalendarPreview';
import { useDatePickerStore } from '../store/store'; // Assuming this is the correct store location

export default function DatePickerComponent() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setSelectedDates,
    recurrenceType,
    customization
  } = useDatePickerStore();

  // Function to compute recurring dates
  const computeRecurringDates = useCallback(() => {
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
  }, [startDate, endDate, recurrenceType, customization, setSelectedDates]);

  useEffect(() => {
    computeRecurringDates();
  }, [startDate, endDate, recurrenceType, customization, computeRecurringDates]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h3 className="text-lg font-semibold">Select Start Date</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Select start date"
        className="border rounded p-2 w-full"
      />

      <h3 className="text-lg font-semibold mt-4">Select End Date (Optional)</h3>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Select end date"
        className="border rounded p-2 w-full"
      />

      {/* Recurrence Options */}
      <RecurrenceOptions />

      {/* Customization Options */}
      <RecurrenceCustomization />

      {/* Calendar Preview */}
      <CalendarPreview />
    </div>
  );
}