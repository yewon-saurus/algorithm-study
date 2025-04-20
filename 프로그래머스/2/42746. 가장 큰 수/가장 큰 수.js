function solution(numbers) {
    numbers = numbers.map(String).sort((a, b) => (b + a) - (a + b)).join('');
    
    return numbers[0] === '0' ? '0' : numbers;
}