// algoritm
//
// create func shmoment(value)
// create object with methods

// 'years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'

//export const shmoment = date => {
//  let tempDate = new Date(date);

//  return {
//    result() {
//      return tempDate;
//    },
//    // how add value of days
//    add(name, value) {
//      switch (name) {
//        case 'years':
//          tempDate.setFullYear(tempDate.getFullYear() + value);
//          break;

//        case 'months':
//          tempDate.setMonth(tempDate.getMonth() + value);
//          break;

//        case 'days':
//          tempDate.setDate(tempDate.getDate() + value);
//          break;

//        case 'hours':
//          tempDate.setHours(tempDate.getHours() + value);
//          break;

//        case 'minutes':
//          tempDate.setMinutes(tempDate.getMinutes() + value);
//          break;

//        case 'seconds':
//          tempDate.setSeconds(tempDate.getSeconds() + value);
//          break;

//        case 'milliseconds':
//          tempDate.setMilliseconds(tempDate.getMilliseconds() + value);
//          break;
//      }

//      return this;
//    },
//    subtract(name, value) {
//      switch (name) {
//        case 'years':
//          tempDate.setFullYear(tempDate.getFullYear() - value);
//          break;

//        case 'months':
//          tempDate.setMonth(tempDate.getMonth() - value);
//          break;

//        case 'days':
//          tempDate.setDate(tempDate.getDate() - value);
//          break;

//        case 'hours':
//          tempDate.setHours(tempDate.getHours() - value);
//          break;

//        case 'minutes':
//          tempDate.setMinutes(tempDate.getMinutes() - value);
//          break;

//        case 'seconds':
//          tempDate.setSeconds(tempDate.getSeconds() - value);
//          break;

//        case 'milliseconds':
//          tempDate.setMilliseconds(tempDate.getMilliseconds() - value);
//          break;
//      }

//      return this;
//    },
//  };
//};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

export const shmoment = date => {
  let result = new Date(date);

  return {
    add(unit, value) {
      const currentValue = result[getMethodsNames[unit]]();
      result = new Date(result[setMethodsNames[unit]](value + currentValue));
      return this;
    },

    subtract(unit, value) {
      this.add(unit, -value);
      return this;
    },

    result() {
      return result;
    },
  };
};
