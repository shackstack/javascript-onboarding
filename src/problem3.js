function problem3(number) {
  let counter = 0;
  for (i = 1; i <= number; i++) {
    counter += doClap(i);
  }
  return counter;
}

function doClap(number) {
  const strNumList = number.toString().split("");
  let claps = 0;
  strNumList.forEach((num) => {
    if (num === "3" || num === "6" || num === "9") {
      claps++;
    }
  });
  return claps;
}

module.exports = problem3;
