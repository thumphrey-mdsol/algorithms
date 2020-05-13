var orangesRotting = function(grid) {
    let timer = 0
    let rotten = []
    let fresh = new Set()
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length;j++){
            if(grid[i][j] == 2){
                rotten.push([i,j])
            }
            else if(grid[i][j] == 1){
                fresh.add(`${i},${j}`)
            }
        }
    }
    while(fresh.size && rotten.length){
        let newRotten = []
        for(let orange of rotten){
            let i = orange[0]
            let j = orange[1]
            if(fresh.has(`${i-1},${j}`)){
                fresh.delete(`${i-1},${j}`)
                newRotten.push([i-1, j])
            }
            if(fresh.has(`${i+1},${j}`)){
                fresh.delete(`${i+1},${j}`)
                newRotten.push([i+1, j])
            }
            if(fresh.has(`${i},${j-1}`)){
                fresh.delete(`${i},${j-1}`)
                newRotten.push([i, j-1])
            }
            if(fresh.has(`${i},${j+1}`)){
                fresh.delete(`${i},${j+1}`)
                newRotten.push([i, j+1])
            }
        }
        rotten = newRotten
        timer++
    }
    return fresh.size ? -1 : timer 
};