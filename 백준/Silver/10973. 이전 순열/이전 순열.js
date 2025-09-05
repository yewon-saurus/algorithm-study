const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, perm] = fs.readFileSync(filePath).toString().trim().split("\n");

N = Number(N);
perm = perm.split(" ").map(Number);

function prevPermutation(arr) {
  let i = arr.length - 1;
  while (i > 0 && arr[i - 1] <= arr[i]) i--;

  if (i <= 0) return false; // 이미 가장 작은 순열 -> 이전 없음

  let j = arr.length - 1;
  while (arr[i - 1] <= arr[j]) j--;

  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

  // i부터 끝까지 뒤집기
  let left = i, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++; right--;
  }

  return true;
}

if (prevPermutation(perm)) {
  console.log(perm.join(" "));
} else {
  console.log(-1);
}
