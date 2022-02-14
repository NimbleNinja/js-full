'use strict';

const reverseString = str =>
  'string' !== typeof str ? null : str.split('').reverse().join('');
