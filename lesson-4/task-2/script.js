const m = 2;
const n = 22;
let result = 1;

for (let i = m; i <= n; i += 1) {
  if (i % 2 !== 0) {
    result *= i;
  }
}

console.log(result);
