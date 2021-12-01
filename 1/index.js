const { readFileRowsIntoArray } = require("../readFileRowsIntoArray");
const input = readFileRowsIntoArray("input.txt");

// first part
let count1 = 0;
for (let i = 0; i < input.length - 1; i++) {
  const first = Number(input[i]);
  const second = Number(input[i + 1]);
  if (second > first) {
    count1++;
  }
}

// second part
const windowSize = 3;
let count2 = 0;
let firstSum = input
  .slice(0, windowSize)
  .reduce((prev, curr) => prev + Number(curr), 0);
let secondSum = 0;

for (let i = 1; i < input.length - windowSize; i++) {
  secondSum = input
    .slice(i, i + windowSize)
    .reduce((prev, curr) => prev + Number(curr), 0);
  if (secondSum > firstSum) {
    count2++;
  }
  firstSum = secondSum;
}

console.log(count2);
