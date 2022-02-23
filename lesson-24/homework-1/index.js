'use strict';

// algoritm
// func getDiff(startDate, endDate)
// get diff in milisec, milisecs => Math.abs(startDate - endDate)
// get days => milisecs / 86400000

export const getDiff = (startDate, endDate) => {
  const msInDay = 86400000;
  const msInHour = 3600000;
  const msInMinute = 60000;
  const msInSecond = 1000;

  let msDiff = Math.abs(startDate - endDate);

  const days = Math.floor(msDiff / msInDay);
  const hours = Math.floor((msDiff % msInDay) / msInHour);
  const minutes = Math.floor((msDiff % msInHour) / msInMinute);
  const seconds = Math.floor((msDiff % msInMinute) / msInSecond);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
