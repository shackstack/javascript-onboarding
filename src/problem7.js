function problem7(user, friends, visitors) {
  let userData = {};
  friends.forEach((item) => {
    if (!userData[item[0]]) {
      userData[item[0]] = [];
    }
    userData[item[0]].push(item[1]);
  });
  friends.forEach((item) => {
    if (!userData[item[1]]) {
      userData[item[1]] = [];
    }
    userData[item[1]].push(item[0]);
  });

  let friendOfFriend = [];
  userData[user].forEach((friend) => {
    userData[friend].forEach((friendsFriend) => {
      if (friendsFriend != user) {
        friendOfFriend.push(friendsFriend);
      }
    });
  });

  let pointInfo = {};
  friendOfFriend.forEach((person) => {
    if (!pointInfo[person]) {
      pointInfo[person] = 0;
    }
    pointInfo[person] += 10;
  });
  visitors.forEach((person) => {
    if (!userData[user].includes(person)) {
      if (!pointInfo[person]) {
        pointInfo[person] = 0;
      }
      pointInfo[person] += 1;
    }
  });

  let arr = Object.entries(pointInfo);
  arr.sort();
  arr.sort((a, b) => {
    return b[1] - a[1];
  });

  let answer = [];
  arr.forEach((item) => answer.push(item[0]));

  return answer;
}

module.exports = problem7;
