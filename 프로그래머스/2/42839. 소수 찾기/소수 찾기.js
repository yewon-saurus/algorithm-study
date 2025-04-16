function solution(numbers) {
    let nums = [...numbers].map(Number);
    let allPermutations = [];
    
    for (let i = numbers.length; i > 0; i--) {
        const noDupPermutations = getPermutations(nums, i).map(ele => +ele.join(''));
        allPermutations.push(...noDupPermutations);
    }
    
    allPermutations = [...new Set(allPermutations)]; // 중복 제거
    
    return allPermutations.filter(checkPrime).length;
}

function getPermutations(arr, n) {
    let result = [];
    
    if (n === 1) return arr.map(v => [v]);
    
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const subPermutations = getPermutations(rest, n - 1);
        const attached = subPermutations.map(item => [fixed, ...item]);
        result.push(...attached);
    });
    
    return result;
}

function checkPrime(num) {
    if (num === 1) return false;
    
    if (num % 2 === 0) return num === 2;
    
    const sqrt = +Math.sqrt(num);
    for (let divider = 3; divider <= sqrt; divider += 2) {
        if (num % divider === 0) return false;
    }

    return true;
}