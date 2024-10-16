function solution(id_pw, db) {
    var answer = "fail";
    let idIndex = -1;
    
    for (let i = 0; i < db.length; i++)
        if (db[i][0] === id_pw[0]) {
            idIndex = i;
            answer = "wrong pw";
        }
    
    if (idIndex !== -1 && db[idIndex][1] === id_pw[1]) answer = "login";
    
    return answer;
}