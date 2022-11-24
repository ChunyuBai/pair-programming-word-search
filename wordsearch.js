const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    if(typeof(word) !== "string"){
        return false
    } 
    for (l of horizontalJoin) {
        if (word.length === 0){
            return false;
        }
        word = word.toUpperCase();
        if (l.includes(word)) 
        return true
    } return false;
}

module.exports = wordSearch

// const testLetter = [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ]
// const testWord = 'FRANK';

// wordSearch(testLetter,testWord)

// console.log([["f"],["r"]])
