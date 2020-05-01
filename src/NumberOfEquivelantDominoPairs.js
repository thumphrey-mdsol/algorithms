var numEquivDominoPairs = function(dominoes) {
    let map = new Map()
    let length = dominoes.length
    let result = 0
    for (let i = 0; i < length; i++){
        let current = Math.min(dominoes[i][0],dominoes[i][1])*10+ Math.max(dominoes[i][0],dominoes[i][1]);
        if (!map.has(current)) {
            map.set(current, 0)
        } else {
            map.set(current, map.get(current) + 1)
            result+=map.get(current)
        }
    }
    return result
};