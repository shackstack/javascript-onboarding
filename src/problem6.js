function problem6(forms) {
  const formsObjectArray = convertToObjectArray(forms);
  const uniqueWords = findUniqueWordsOfNickname(formsObjectArray);
  return findEmailByDuplicatedName(formsObjectArray, uniqueWords).sort();
}

//들어온 리스트를 JS 오브젝트로 변환해주는 함수
function convertToObjectArray(forms) {
  const array = [];
  forms.map((element) => {
    array.push({
      email: element[0],
      name: element[1],
    });
  });
  return array;
}

//사용자들의 이름을 2글자 이상으로 잘개 쪼개어 중복이 없는 리스트로 반환해주는 함수
function findUniqueWordsOfNickname(formsObjectArray) {
  let uniqueWords = new Set();
  formsObjectArray.forEach((element) => {
    const nickname = element.name;
    //검사할 글자 갯수 제어
    for (let i = 0; i < nickname.length; i++) {
      //글자를 처음부터 끝까지 검사
      for (let j = 0; j < nickname.length - i; j++) {
        //글자를 잘라보기(for문 돌면서 1글자, 2글자, 3글자 ...)
        const word = nickname.slice(j, j + i + 1);
        //자른 글자의 갯수가 1 초과인 경우에만 Set함수에 추가를 시도함
        if (word.length > 1) {
          uniqueWords.add(word);
        }
      }
    }
  });
  return Array.from(uniqueWords);
}

//단어 리스트를 중복 사용 하고 있는 사람을 찾아 이메일을 반환하는 함수
function findEmailByDuplicatedName(formsObjectArray, uniqueWords) {
  let emails = new Set();
  uniqueWords.forEach((word) => {
    // 특정 단어가 포함된 이름을 찾아 객체를 배열로 만들기
    const list = formsObjectArray.filter((form) => form.name.includes(word));
    //찾은 결과가 1보다 크다면 중복 사용 중인 사람들로 간주하고
    //emails 집합에 그 사람들의 email을 추가해줌
    if (list.length > 1) {
      list.map((element) => {
        emails.add(element.email);
      });
    }
  });
  return Array.from(emails);
}

module.exports = problem6;
