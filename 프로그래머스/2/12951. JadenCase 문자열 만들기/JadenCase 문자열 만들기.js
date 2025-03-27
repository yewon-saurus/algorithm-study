function solution(s) {
    return s.split(' ').map(j => [j.slice(0, 1).toUpperCase(), ...j.slice(1).toLowerCase()].join('')).join(' ');
}