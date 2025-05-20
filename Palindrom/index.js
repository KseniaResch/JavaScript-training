const isPalindrome = (str) => {
   let readForewards = str;
   let readBackwards = readForewards.split("").reverse().join("");

    // if (readForewards === readBackwards) {
    //     return true
    // } else { 
    //     return false
    // }
    return readBackwards === readForewards;
    
}

console.log(isPalindrome('121')); // true
console.log(isPalindrome('boob')); // true
console.log(isPalindrome('true')); // false



//second variant

const checkPalindrome = (str) => {
    reverse = "" // empty string for storage
    
    for(let i = str.length - 1; i >= 0; i--) {
        reverse += str[i] }
        // if( reverse === str){
        //     return true
        // } else { 
        //     return false
        // }
        return reverse === str;

    }


console.log(checkPalindrome('121')); // true
console.log(checkPalindrome('boob')); // true
console.log(checkPalindrome('true')); // false
