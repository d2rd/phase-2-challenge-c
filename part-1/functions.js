//getValues
// Write a function getValues(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

let obj = {
    "id": 1,
    "rep_name": "Xymenes Dewer",
    "email": "xymenes.dewer@somewhere.com",
    "company": "Beahan, Swift and Hoppe",
    "no_employees": 742,
    "phone": "1-(863)994-6147",
    "fax": "1-(555)123-4567",
    "city": "Lakeland",
    "state": "Florida",
    "created_at": "11/4/2003"
  }
function getValues(obj){
  values = Object.values(obj), // extracts values from object to new array 'values'
  i, len = values.length; 
  values.sort().forEach(function(key){console.log(key)});
}

// filterAround
var lowerUpperWords = process.argv[2]+", "+process.argv[3]; //lower/upper arguments entered as string ("lower, upper"), are the 3rd and 4th array items in process.argv. 
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




// attributions: 
  // weekday() - 
  // capitalizeFourth() -
  // getValues() -  https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
  // filterAround() - 
