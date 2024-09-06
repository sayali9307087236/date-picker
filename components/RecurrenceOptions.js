// import { useDatePickerStore } from '../store/store';

// export default function RecurrenceOptions() {
//   const { recurrenceType, setRecurrenceType } = useDatePickerStore();
//   const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

//   return (
//     <div className="mt-4">
//       <h3 className="text-lg font-semibold">Recurrence Pattern</h3>
//       <div className="space-x-4 flex flex-wrap">
//         {options.map((option) => (
//           <button
//             key={option}
//             className={`px-4 py-2 border rounded transition-colors duration-200 ease-in-out ${
//               recurrenceType === option
//                 ? 'bg-blue-500 text-white'
//                 : 'bg-white text-blue-500 border-blue-500'
//             } hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400`}
//             onClick={() => setRecurrenceType(option)}
//             aria-pressed={recurrenceType === option}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }








import React from 'react';
import { useDatePickerStore } from '../store/store';

export default function RecurrenceOptions() {
  const { recurrenceType, setRecurrenceType } = useDatePickerStore();
  const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Recurrence Pattern</h3>
      <div className="space-x-4 flex flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 border rounded transition-colors duration-200 ease-in-out ${
              recurrenceType === option
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border-blue-500'
            } hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            onClick={() => setRecurrenceType(option)}
            aria-pressed={recurrenceType === option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

