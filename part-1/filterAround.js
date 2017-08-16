// Write a function `filterAround(array, lower, upper)` that takes an array of strings, a `lower` value, and a `upper` value. It returns a new array containing _only_ the elements from the source `array` that come before `lower` alphabetically and after `upper`. The elements in the returned array should be in the same order as the source array.


var lowerUpperWords = process.argv[2]+", "+process.argv[3]; //lower/upper arguments entered as string ("min, max"), are the 3rd and 4th array items in process.argv. 
// console.log(lowerUpperWords); // check to confirm arguments passed through.

let wordsArray = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow', 'aardvark','ant','antelope','goat','tiger'];
// console.log(wordsArray); // check to confirm array is populated;

function filterAround(wordsObj, index, wordsArray) { 
        // console.log(wordsObj);
      lowerUpperWordsArray = lowerUpperWords.split(",");   
      if (wordsObj < lowerUpperWordsArray[0] || wordsObj > lowerUpperWordsArray[1]) {
            return true;
        }
        else {
            return false;
        }
    }

var wordsSorted = wordsArray.filter(filterAround);
console.log(wordsSorted); // check to confirm 'wordsSorted' array is populated;

for (i in wordsSorted){
    console.log(i);
    for (values in wordsSorted[i]){
      if(wordsSorted < lowerUpperWordsArray[0] || wordsSorted > lowerUpperWordsArray[1]) {
        console.log( values + ": " + wordsSorted[i][values]);
      }
    }
}
