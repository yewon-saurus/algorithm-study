function solution(id_pw, db) {
    const [id, pw] = id_pw;
    var answer = "fail";
    let idIndex = -1;
    
    for (let i = 0; i < db.length; i++)
        if (db[i][0] === id) {
            idIndex = i;
            answer = "wrong pw";
        }
    
    if (idIndex !== -1 && db[idIndex][1] === pw) answer = "login";
    
    return answer;
}