const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function checkException(money) {
  if (money < 1 || money > 1000000) {
    return false;
  }
  return true;
}

function calculateMoney(money) {
  const wallet = [];
  MONEY_UNIT.forEach((unit) => {
    wallet.push(parseInt(money / unit));
    money = money % unit;
  });
  return wallet;
}

function problem5(money) {
  if (!checkException) {
    return -1;
  }
  return calculateMoney(money);
}

module.exports = problem5;
