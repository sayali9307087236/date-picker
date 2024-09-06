// import create from 'zustand';

// export const useDatePickerStore = create((set) => ({
//   startDate: null,
//   endDate: null,
//   recurrenceType: 'Daily',
//   customization: {
//     daily: 1,
//     weekly: 1,
//   },
//   selectedDates: [],
//   setStartDate: (date) => set({ startDate: date }),
//   setEndDate: (date) => set({ endDate: date }),
//   setRecurrenceType: (type) => set({ recurrenceType: type }),
//   setCustomization: (custom) => set((state) => ({ customization: { ...state.customization, ...custom } })),
//   setSelectedDates: (dates) => set({ selectedDates: dates }),
// }));


import {create} from 'zustand';

export const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'Daily',
  customization: {
    daily: 1,
    weekly: 1,
    monthly: 1,
    yearly: 1,
  },
  selectedDates: [],
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setCustomization: (custom) => set((state) => ({
    customization: { ...state.customization, ...custom }
  })),
  setSelectedDates: (dates) => set({ selectedDates: dates }),
}));
