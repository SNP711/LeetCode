/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let words = s1.split(" ").concat(s2.split(" "))
    let wordCount = {}

    for(let word of words){
        wordCount[word] = (wordCount[word] || 0) + 1
    }

    let unCommonWords = []
    for(let word in wordCount){
        if(wordCount[word] === 1)
        {
            unCommonWords.push(word)
        }
    }
    return unCommonWords
};