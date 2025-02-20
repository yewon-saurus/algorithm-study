function solution(n, lost, reserve) {
    let students = new Array(n).fill(1);
    let [start, end] = [0, n - 1];
    
    lost.forEach((ele) => {
        --students[ele - 1];
    });
    reserve.forEach((ele) => {
        ++students[ele - 1];
    });
    
    while (start <= n - 1 && end >= 0) {
        if (start === 0 && students[start] === 0 && students[start + 1] === 2) {
            ++students[start];
            --students[++start];
            continue;
        }
        
        if (end === n - 1 && students[end] === 0 && students[end - 1] === 2) {
            ++students[end];
            --students[--end];
            continue;
        }
        
        
        if (students[start] === 2 && students[start + 1] === 0) {
            --students[start];
            ++students[++start];
        }
        else {
            if (students[end] === 2 && students[end - 1] === 0) {
                --students[end];
                ++students[--end];
            }
            else --end;
            
            ++start;
        }
        
        console.log(start, end, students);
    }

    return students.filter(ele => ele > 0).length;
}