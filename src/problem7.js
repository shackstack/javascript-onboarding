function problem7(user, friends, visitors) {
  let suggestedFriends = [];

  // 주변인들의 친구 관계를 인간 중심으로 관계
  const friendsObjectArray = []; // [{id: "donut", friends:{"...","...","..."}}, {}~]
  friends.forEach((element) => {
    // 양방향으로 추가해줘서 모든 id들이 빠짐 없이 객체의 중심이 될 수 있도록 함
    handleFriend(friendsObjectArray, element[0], element[1]);
    handleFriend(friendsObjectArray, element[1], element[0]);
  });

  // 친구들의 친구 목록 (점수 계산용이므로 중복 허용)
  const relatedFriendsArray = checkFriendOfFriends(friendsObjectArray, user); //['andole', 'jun', 'andole', 'jun']
  //추천 친구 포인트 계산
  figurePoints(suggestedFriends, 10, relatedFriendsArray);

  // 방문한 사람들의 친구 목록 (본인, 친구 제외된 목록)
  const relatedVisitorsArray = checkVisitors( // ['bedi', 'bedi', 'bedi']
    friendsObjectArray,
    user,
    visitors
  );
  //추천 친구 포인트 계산
  figurePoints(suggestedFriends, 1, relatedVisitorsArray);

  // 이 시점에서의 suggested friends
  // 0 : {id: 'andole', points: 20}
  // 1 : {id: 'jun', points: 20}
  // 2 : {id: 'bedi', points: 3}

  //포인트 순으로 정렬 한 다음, 아이디 순으로 정렬
  suggestedFriends.sort(
    (a, b) => b.points - a.points || a.id.localeCompare(b.id)
  );

  //최대 5명만 리턴
  const answer = suggestedFriends.slice(0, 5).map((el) => el.id); //['andole', 'jun', 'bedi']
  return answer;
}

function handleFriend(friendsObjectArray, from, to) {
  const index = friendsObjectArray.findIndex((friend) => friend.id === from);
  //검색 결과가 없다면 새 데이터 추가
  if (index === -1) {
    friendsObjectArray.push({
      id: from,
      friends: new Set().add(to),
    });
  } else {
    friendsObjectArray[index].friends.add(to);
  }
}

function checkFriendOfFriends(friendsObjectArray, user) {
  const index = friendsObjectArray.findIndex((friend) => friend.id === user);
  //사용자의 친구 목록을 찾아냄
  const userFriends = Array.from(friendsObjectArray[index].friends);

  //사용자의 친구들이 어떤 친구들을 가지고 있는지 찾아서 array에 추가해줌
  let array = [];
  userFriends.map((id) => {
    const idx = friendsObjectArray.findIndex((friend) => friend.id === id);
    return Array.from(friendsObjectArray[idx].friends).map((el) => {
      array.push(el);
    });
  });
  //추천 금지 명단에 추가해줄 목적으로 본인 사용자도 친구처럼 취급
  userFriends.push(user);
  //혹시 명단에 이미 친구인 사람이 있다면 제거해줌
  return array.filter((id) => !userFriends.includes(id));
}

function checkVisitors(friendsObjectArray, user, visitors) {
  const index = friendsObjectArray.findIndex((friend) => friend.id === user);
  // 사용자의 친구 목록을 찾아냄
  const userFriends = Array.from(friendsObjectArray[index].friends);
  userFriends.push(user);
  return visitors.filter((id) => !userFriends.includes(id));
}

function figurePoints(suggestedFriends, point, arr) {
  arr.map((id) => {
    const idx = suggestedFriends.findIndex((friend) => friend.id === id);
    if (idx === -1) {
      suggestedFriends.push({
        id: id,
        points: point,
      });
    } else {
      suggestedFriends[idx].points += point;
    }
  });
}

module.exports = problem7;
