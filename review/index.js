// inp string, string
// return string

//algo
// get words to convert arr
// get minor words arr
// iterate words
// check word in list minor words
const titleCase = (title, minorWords) => {
  const wordsToConvert = title.toLowerCase().split(' ');
  const wordsList = minorWords.toLowerCase().split(' ');

  const resultStr = wordsToConvert.map((word, index) => {
    if (index === 0 || !wordsList.includes(word)) {
      const firstLetter = word[0].toUpperCase();
      return firstLetter.concat(word.slice(1));
    }

    return word;
  });

  return resultStr.join(' ');
};

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
//titleCase('a clash of KINGS', 'a an the of'); // should return: 'A Clash of Kings'
//titleCase('THE WIND IN THE WILLOWS', 'The In'); // should return: 'The Wind in the Willows'
//titleCase('the quick brown fox'); // should return: 'The Quick Brown Fox'
