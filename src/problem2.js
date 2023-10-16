function problem2(cryptogram) {
  const answer = reduceWord(cryptogram);
  return answer;
}

function reduceWord(word) {
  let new_word = word;
  for (let i = 0; i < word.length; i++) {
    //글자 수 만큼
    new_word = new_word.replace(/([a-z])\1{1,}/g, "");
  }
  return new_word;
}

module.exports = problem2;
