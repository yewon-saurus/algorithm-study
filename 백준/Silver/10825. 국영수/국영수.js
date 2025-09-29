const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const n = +lines[0];
const students = lines.slice(1, 1 + n).map(line => {
  const [name, kor, eng, math] = line.trim().split(/\s+/);
  return { name, kor: +kor, eng: +eng, math: +math };
});

students.sort((A, B) => {
  if (A.kor !== B.kor) return B.kor - A.kor;       // 국어 내림
  if (A.eng !== B.eng) return A.eng - B.eng;       // 영어 오름
  if (A.math !== B.math) return B.math - A.math;   // 수학 내림
  // 이름 오름차순(사전)
  return A.name < B.name ? -1 : (A.name > B.name ? 1 : 0);
});

console.log(students.map(s => s.name).join('\n'));
