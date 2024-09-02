/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let string = s.split('')
    let i = 0
    let j = s.length - 1
    let letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

    while( i < j ){
        let leftChar = string[i]
        let rightChar = string[j]

        if(!letters.includes(string[i])){
            i++
        }
        else if(!letters.includes(string[j])){
             j--
        }
        else{
            string[i] = rightChar
            i++
            string[j] = leftChar
            j--
        }
    }
   return string.join('')
};