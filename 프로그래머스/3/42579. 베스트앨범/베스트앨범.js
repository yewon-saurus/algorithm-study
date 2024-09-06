function solution(genres, plays) {
    let answer = [];
    
    // 장르 table, 앨범 table
    let genreCountTable = new Map();
    let albumTable = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        if (genreCountTable.has(genres[i])) {
            genreCountTable.set(genres[i], genreCountTable.get(genres[i]) + plays[i]);
            albumTable.set(genres[i], [...albumTable.get(genres[i]), [i, plays[i]]]);
        }
        else {
            genreCountTable.set(genres[i], plays[i]);
            albumTable.set(genres[i], [[i, plays[i]]]);
        }
    }
    genreCountTable = Array.from(genreCountTable).sort((a, b) => b[1] - a[1]);
    
    // console.log(genreCountTable, albumTable);
    
    for (let item of genreCountTable) {
        let currAlbum = albumTable.get(item[0]).sort((a, b) => {
            if (a[1] === b[1]) return b[0] - a[0];
            else return a[1] - b[1];
        });
        if (currAlbum.length < 2) answer.push([...currAlbum.pop()][0]); // 1개 씩인 경우, 하나만을 push할 수 있다
        else {
            answer.push([...currAlbum.pop()][0]);
            answer.push([...currAlbum.pop()][0]);
        }
    }
    
    return answer;
}