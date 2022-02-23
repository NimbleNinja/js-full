'use strict';

// algoritm
// func dayOfWeek(date, days)
// daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su']
// work with new Date()

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

// input: date (object), days (num)
// return: string
const dayOfWeek = (date, days) => {
  const day = new Date(date);
  const futureDay = new Date(date).setDate(day.getDate() + days);
  return daysOfWeek[new Date(futureDay).getDay()];
};
