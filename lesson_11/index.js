// task 1

//const splitText = (text, len = 10) => {
//  if (typeof text !== 'string') {
//    return null;
//  }

//  const textArr = [];
//  let lenghtCount = 0;

//  while (true) {
//    const chank = text.substring(lenghtCount, len + lenghtCount);

//    if (chank.length === 0) {
//      break;
//    }

//    textArr.push(chank[0].toUpperCase() + chank.slice(1));
//    lenghtCount += len;
//  }

//  return textArr.join('\n');
//};

//const str = 'abcdefghjrsty';

//console.log(splitText('', 5));

// task 2

//function sortContacts(contacts, direction = true) {
//  if (!Array.isArray(contacts)) {
//    return null;
//  }

//  return contacts.sort((a, b) => {
//    return direction
//      ? a.name.localeCompare(b.name)
//      : b.name.localeCompare(a.name);
//  });
//}

//const contactsList = [
//  { name: 'Tom', phoneNumber: '777-77-77' },
//  { name: 'Andrey', phoneNumber: '777-77-77' },
//  { name: 'Sam', phoneNumber: '777-77-77' },
//  { name: 'Kate', phoneNumber: '777-77-77' },
//  { name: 'Rain', phoneNumber: '777-77-77' },
//];

//console.log(sortContacts(contactsList, false));

// task 3

//const splitString = (text, len = 10) => {
//  if (typeof text !== 'string') {
//    return null;
//  }

//  const textArr = [];
//  let lenghtCount = 0;

//  while (true) {
//    const chank = text.substring(lenghtCount, len + lenghtCount);

//    if (chank.length === 0) {
//      break;
//    }

//    if (chank.length < len) {
//      textArr.push(chank.concat('.'.repeat(len - chank.length)));
//      break;
//    }

//    textArr.push(chank);
//    lenghtCount += len;
//  }

//  return textArr;
//};

//console.log(splitString(1, 3));

// task 4
//const countOccurrences = (text = '', str) => {
//  if (str === '') {
//    return null;
//  }

//  let counter = 0;

//  while (true) {
//    if (text === str) {
//      counter++;
//      break;
//    } else if (text.includes(str)) {
//      counter++;
//      text = text.slice(text.indexOf(str) + str.length);
//    } else {
//      break;
//    }
//  }

//  return counter;
//};

//const countOccurrences = (text = '', str) =>
//  str === '' ? null : text.split(str).length - 1;

//const text = 'a ttasfttdsgtt t sstt';

//console.log(countOccurrences(undefined, ''));
