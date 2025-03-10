function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                [lux, luy, rdx, rdy] = [
                    Math.min(lux, i),
                    Math.min(luy, j),
                    Math.max(rdx, i + 1),
                    Math.max(rdy, j + 1)
                ];
            }
        }
    }
    
    return [lux, luy, rdx, rdy];
}