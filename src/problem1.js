/**
 * 페이지의 기본 조건 검사
 * @param {number[]} pages 누군가 핀 책의양쪽 페이지
 *  @returns {boolean} 검사에 통과한 경우 true를 반환
 */
// 예외처리
function checkException(pages) {
  // 예외 1
  if (pages[1] !== pages[0] + 1) {
    return false;
  }
  // 예외 2
  if (pages[0] % 2 !== 1 || pages[1] % 2 !== 0) {
    return false;
  }
  // 예외 3
  if (pages[0] === 1 || pages[1] === 400) {
    return false;
  }
  return true;
}

function findMaxOfPageGame(page) {
  const pageStringList = page.toString().split(""); // ["1", "3", "2"]
  const pageNumberList = pageStringList.map((str) => parseInt(str)); //[1, 3, 2]

  const addList = pageNumberList.reduce((num1, num2) => num1 + num2, 0);
  const mulList = pageNumberList.reduce((num1, num2) => num1 * num2, 1);

  return Math.max(addList, mulList);
}

function compareScore(pobi, crong) {
  const pobiScore = pobi.map((page) => findMaxOfPageGame(page));
  const crongScore = crong.map((page) => findMaxOfPageGame(page));

  const bestValueOfPobi = Math.max(...pobiScore);
  const bestValueOfCrong = Math.max(...crongScore);

  const answer =
    bestValueOfPobi > bestValueOfCrong
      ? 1
      : bestValueOfPobi < bestValueOfCrong
      ? 2
      : 0;
  return answer;
}

/**
 * PROBLEM1
 * @param {number[]} pobi pobi가 핀 책의 양쪽 페이지
 * @param {number[]} crong crong이 핀 책의 양쪽 페이지
 * @returns {0 | 1 | 2 | -1}
 */
function problem1(pobi, crong) {
  if (checkException(pobi) && checkException(crong)) {
    return compareScore(pobi, crong);
  } else {
    return -1;
  }
}

module.exports = problem1;
