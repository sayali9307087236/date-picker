// import { useDatePickerStore } from '../store/store';

// export default function RecurrenceCustomization() {
//   const { recurrenceType, customization, setCustomization } = useDatePickerStore();

//   const handleInputChange = (type) => (e) => {
//     setCustomization({ ...customization, [type]: e.target.value });
//   };

//   return (
//     <div className="mt-4">
//       <h3 className="text-lg font-semibold">Customize Recurrence</h3>
//       <div>
//         {recurrenceType === 'Daily' && (
//           <div>
//             Every{' '}
//             <input
//               type="number"
//               value={customization.daily || ''}
//               onChange={handleInputChange('daily')}
//               className="border rounded p-1"
//               min="1"
//               aria-label="Number of days"
//             />{' '}
//             days
//           </div>
//         )}
//         {recurrenceType === 'Weekly' && (
//           <div>
//             Every{' '}
//             <input
//               type="number"
//               value={customization.weekly || ''}
//               onChange={handleInputChange('weekly')}
//               className="border rounded p-1"
//               min="1"
//               aria-label="Number of weeks"
//             />{' '}
//             weeks
//           </div>
//         )}
//         {/* Add fields for Monthly, Yearly */}
//       </div>
//     </div>
//   );
// }




import React from 'react';
import { useDatePickerStore } from '../store/store';

export default function RecurrenceCustomization() {
  const { recurrenceType, customization, setCustomization } = useDatePickerStore();

  const handleInputChange = (type) => (e) => {
    const value = parseInt(e.target.value, 10);
    setCustomization((prevCustomization) => ({
      ...prevCustomization,
      [type]: isNaN(value) ? '' : value
    }));
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Customize Recurrence</h3>
      <div>
        {recurrenceType === 'Daily' && (
          <div>
            Every{' '}
            <input
              type="number"
              value={customization.daily || ''}
              onChange={handleInputChange('daily')}
              className="border rounded p-1"
              min="1"
              aria-label="Number of days"
            />{' '}
            days
          </div>
        )}
        {recurrenceType === 'Weekly' && (
          <div>
            Every{' '}
            <input
              type="number"
              value={customization.weekly || ''}
              onChange={handleInputChange('weekly')}
              className="border rounded p-1"
              min="1"
              aria-label="Number of weeks"
            />{' '}
            weeks
          </div>
        )}
        {recurrenceType === 'Monthly' && (
          <div>
            Every{' '}
            <input
              type="number"
              value={customization.monthly || ''}
              onChange={handleInputChange('monthly')}
              className="border rounded p-1"
              min="1"
              aria-label="Number of months"
            />{' '}
            months
          </div>
        )}
        {recurrenceType === 'Yearly' && (
          <div>
            Every{' '}
            <input
              type="number"
              value={customization.yearly || ''}
              onChange={handleInputChange('yearly')}
              className="border rounded p-1"
              min="1"
              aria-label="Number of years"
            />{' '}
            years
          </div>
        )}
      </div>
    </div>
  );
}
