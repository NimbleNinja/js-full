'use strict';

// algoritm
// func getGreenwichTime(date)
// create formatter new Intl.DateTimeFormat

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
});

export const getGreenwichTime = date => formatter.format(date);
