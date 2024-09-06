// import Calendar from 'react-calendar';
// import { useDatePickerStore } from '../store/store';

// export default function CalendarPreview() {
//   const { selectedDates } = useDatePickerStore();

//   return (
//     <div className="mt-4">
//       <h3 className="text-lg font-semibold">Preview Selected Dates</h3>
//       <Calendar
//         tileClassName={({ date }) =>
//           selectedDates.some((d) => d.toDateString() === date.toDateString())
//             ? 'bg-light-blue text-blue-800'
//             : undefined
//         }
//         className="border rounded"
//       />
//     </div>
//   );
// }


// import React from 'react';
// import Calendar from 'react-calendar';
// import { useDatePickerStore } from '../store/store';

// export default function CalendarPreview() {
//   const { selectedDates } = useDatePickerStore();

//   const isDateSelected = (date) => {
//     return selectedDates.some(
//       (d) => d.toDateString() === date.toDateString() // Compare dates only
//     );
//   };

//   return (
//     <div className="mt-4">
//       <h3 className="text-lg font-semibold">Preview Selected Dates</h3>
//       <Calendar
//         tileClassName={({ date }) =>
//           isDateSelected(date) ? 'bg-light-blue text-blue-800' : ''
//         }
//         className="border rounded"
//       />
//     </div>
//   );
// }




import React from 'react';
import Calendar from 'react-calendar';
import { useDatePickerStore } from '../store/store';

export default function CalendarPreview() {
  const { selectedDates } = useDatePickerStore();

  const isDateSelected = (date) => {
    return selectedDates.some(
      (d) => d.toDateString() === date.toDateString() // Compare dates only
    );
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Preview Selected Dates</h3>
      <Calendar
        tileClassName={({ date }) =>
          isDateSelected(date) ? 'bg-light-blue text-blue-800' : ''
        }
        className="border rounded"
      />
    </div>
  );
}
