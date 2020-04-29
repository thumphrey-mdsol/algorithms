let arr = [134,93,24,43,26,141,123,20]
let flight = 200


function moviesInFlights(movieLengths, flightLength) {
    const movieLenghtsSeen = new Set()
    for(let i=0;i<movieLengths.length;i++){
        if(movieLenghtsSeen.has(flightLength-movieLengths[i])){
            return true
        } else {
            movieLenghtsSeen.add(movieLengths[i])
        }
    }
    return false
}

console.log(moviesInFlights(arr, flight))