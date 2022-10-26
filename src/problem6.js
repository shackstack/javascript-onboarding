function problem6(forms) {
  let answer = [];
  let wordList = [];
  let splitForms = [];
  let dupicatedWordList = [];

  forms.forEach((item) => {
    let arr = [];
    let splitWord = item[1].split("");
    for (let i = 0; i < splitWord.length - 1; i++) {
      arr.push([splitWord[i], splitWord[i + 1]].join(""));
      wordList.push([splitWord[i], splitWord[i + 1]].join(""));
    }
    splitForms.push(arr);
  });

  dupicatedWordList = wordList.filter((item, index) => {
    return wordList.indexOf(item) !== index;
  });
  dupicatedWordList = [...new Set(dupicatedWordList)];

  splitForms.forEach((item, idx) => {
    if (item.includes(dupicatedWordList[0])) {
      answer.push(forms[idx][0]);
    }
  });
  answer.sort();

  return answer;
}

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);
module.exports = problem6;

// function user(arr) {
//   this.email = arr[0];
//   this.nickname = arr[1];
// }
// const userList = forms.map((item) => {
//   return new user(item);
// });

// const dupicatedWordList = userList.map((item)=>{
//   return item.
// })
