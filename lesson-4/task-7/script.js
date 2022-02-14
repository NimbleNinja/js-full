let sum = 0;

for (let i = 1; i <= 1000; i += 2) {
  console.log('Found');
  sum += i;
}

if (sum * 5 >= 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
