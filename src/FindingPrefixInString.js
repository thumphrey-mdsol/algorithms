// brute force
var isPrefixOfWord = function(sentence, searchWord) {
    let result = -1
    let sentenceWords = sentence.split(' ')
    let count = 0
    let i = 0
    while(result<0 && i< sentenceWords.length){
        if(sentenceWords[i][0] === searchWord[0] && sentenceWords[i].length>= searchWord.length){
            for(let j=0;j<searchWord.length;j++){
                if(sentenceWords[i][j]===searchWord[j]){
                    count++
                }
            }
            if(count===searchWord.length){
                result = i+1
            }
        }
        count=0
        i++
    }
    return result
};