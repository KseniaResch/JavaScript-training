const findLongestWord =(str)=>{
  let cleaned = str.replace(/.,\/#!$%\^&\*;:{}=\-_`~()']/g, "");
  let words = cleaned.split(" ");
  let longestWord = "";

  for(let i = 0; i < words.length; i++) {
    let word = words[i]; 
   
    if( longestWord.length < word.length){
        longestWord = word;
    }
 }

 return longestWord;

}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
// "jumps"

console.log(findLongestWord("I love JavaScript so much!!"));
// "JavaScript"

const findLongestWord2 = (str) => {
  let cleaned = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g, "");
  let words = cleaned.split(" ");
  let longestWord = words.reduce((accum, word) => {
    if (word.length > accum.length){
      return word
    }
    return accum;

   
    }, "")

   return longestWord;
  }

 



console.log(findLongestWord2("The quick brown fox jumps over the lazy dog"));
// "jumps"

console.log(findLongestWord2("I love JavaScript so much!!"))