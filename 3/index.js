const { readFileRowsIntoArray } = require("../readFileRowsIntoArray");
const fileRows = readFileRowsIntoArray("input.txt");
const numRows = fileRows.length;
const bitsArray = fileRows.map((entry) => entry.split(""));

const transpose = (array) => {
  const result = array.map(() => []);
  array.forEach((row) => {
    let rowNum = 0;
    row.forEach((value, index) => {
      result[rowNum].push(value);
      rowNum++;
    });
  });
  return result.filter((entry) => entry.length);
};

// part 1
const resultBits = [];
const transposed = transpose(bitsArray);
for (const row of transposed) {
  let oneCount = 0;
  for (const digit of row) {
    if (digit === "1") {
      oneCount++;
    }
  }
  const zeroCount = numRows - oneCount;
  if (zeroCount > oneCount) {
    resultBits.push(0);
  } else {
    resultBits.push(1);
  }
}

let gamma = 0;
let maxValue = Math.pow(2, resultBits.length) - 1;
for (let [index, bit] of resultBits.entries()) {
  const power = resultBits.length - (index + 1);
  gamma += bit * Math.pow(2, power);
}
const epsilon = maxValue - gamma
console.log(gamma * epsilon);
