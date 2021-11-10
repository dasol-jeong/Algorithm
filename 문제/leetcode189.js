function solution(id_list, report, k) {
  let answer = [];
  let hash = new Map();
  let len = id_list.length;
  let stop_list = Array.from(Array(len), () => Array(len).fill(0));
  let stop_count = Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    hash.set(id_list[i], i);
  }

  for (let repo of report) {
    let tmp = repo.split(" ");

    let x = hash.get(tmp[0]);
    function sol(id_list, report, k) {
      // user의 index에 저장
      let userHash = new Map();
      for (let i = 0; i < id_list.length; i++) userHash.set(id_list[i], i);

      let check = Array(id_list.length);
      for (let i = 0; i < check.length; i++) {
        check[i] = Array(id_list.length).fill(0);
      }

      for (let x of report) {
        x = x.split(" ");
        // 만약 해시에 값이 있다면 배열에 추가해서 다시 set해준다.
        let a = userHash.get(x[0]);
        let b = userHash.get(x[1]);
        check[a][b] = 1;
      }

      // check 배열에서 정지된 사람을 저장.
      let banUser = [];
      for (let i = 0; i < check.length; i++) {
        let cnt = 0;
        for (let j = 0; j < check.length; j++) {
          if (check[j][i] === 1) {
            cnt++;
          }
          if (cnt >= k) banUser[i] = 1;
        }
      }

      // 배열에서 신고를 했고, banUser가 1일 때, 받을 메일 수를 증가시켜준다.
      let answer = [];
      for (let i = 0; i < check.length; i++) {
        let cnt = 0;
        for (let j = 0; j < check.length; j++) {
          if (check[i][j] === 1 && banUser[j] === 1) {
            cnt++;
          }
        }
        answer.push(cnt);
      }
      return answer;
    }
    let y = hash.get(tmp[1]);
    stop_list[x][y] = 1;
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (stop_list[j][i] === 1) stop_count[i] += 1;
    }
  }

  for (let i = 0; i < len; i++) {
    let cnt = 0;
    for (let j = 0; j < len; j++) {
      if (stop_list[i][j] === 1 && stop_count[j] >= k) cnt++;
    }
    answer.push(cnt);
  }
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

function sol(id_list, report, k) {
  // user의 index에 저장
  let userHash = new Map();
  for (let i = 0; i < id_list.length; i++) userHash.set(id_list[i], i);

  let check = Array(id_list.length);
  for (let i = 0; i < check.length; i++) {
    check[i] = Array(id_list.length).fill(0);
  }

  for (let x of report) {
    x = x.split(" ");
    // 만약 해시에 값이 있다면 배열에 추가해서 다시 set해준다.
    let a = userHash.get(x[0]);
    let b = userHash.get(x[1]);
    check[a][b] = 1;
  }

  // check 배열에서 정지된 사람을 저장.
  let banUser = [];
  for (let i = 0; i < check.length; i++) {
    let cnt = 0;
    for (let j = 0; j < check.length; j++) {
      if (check[j][i] === 1) {
        cnt++;
      }
      if (cnt >= k) banUser[i] = 1;
    }
  }

  // 배열에서 신고를 했고, banUser가 1일 때, 받을 메일 수를 증가시켜준다.
  let answer = [];
  for (let i = 0; i < check.length; i++) {
    let cnt = 0;
    for (let j = 0; j < check.length; j++) {
      if (check[i][j] === 1 && banUser[j] === 1) {
        cnt++;
      }
    }
    answer.push(cnt);
  }
  return answer;
}

console.log(
  sol(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  sol(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);





function(nums,k){
  let rotation=k%nums.length;
  if(rotation===0) return;
  let temp=nums.slice(0,nums.length-rotation);
  nums.splice(0,nums.length-rotation);
  nums.push(...tmp)
}