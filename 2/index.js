const { readFileRowsIntoArray } = require("../readFileRowsIntoArray");
const fileRows = readFileRowsIntoArray("input.txt");

const part1 = () => {
  let horizontal = 0;
  let depth = 0;
  for (const row of fileRows) {
    const [direction, increase] = row.split(" ");
    if (direction === "forward") {
      horizontal += Number(increase);
    } else if (direction === "down") {
      depth += Number(increase);
    } else if (direction === "up") {
      depth -= Number(increase);
    } else {
      // not possible according to puzzle
    }
  }

  const answer = depth * horizontal;
  console.log(answer, depth, horizontal);
};

const part2 = () => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (const row of fileRows) {
    const [direction, increase] = row.split(" ");
    const increaseNum = Number(increase);
    if (direction === "forward") {
      horizontal += increaseNum;
      depth += (increaseNum * aim);
    } else if (direction === "down") {
      aim += increaseNum;
    } else if (direction === "up") {
      aim -= increaseNum;
    } else {
      // not possible according to puzzle
    }
  }

  const answer = depth * horizontal;
  console.log(answer, depth, horizontal);
};

part2()