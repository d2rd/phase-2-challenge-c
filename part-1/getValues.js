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
  },

  // attribution:  https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
  values = Object.values(obj), // extracts values from object to new array 'values'

  // to return an object with sorted values use the line below.
  i, len = values.length;  // declares empty variable 'i' and declares 2nd var 'len' and assigns value of length of 'values' array.

//choose one:
    // values.sort().forEach(key => console.log(key));  // ES6 syntax
    values.sort().forEach(function(key){console.log(key)});
// console.log(values);
// Display values from 'obj' in the console
// for(var key in obj){
//   if(obj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }


// for (i = 0; i < len; i++) {
//   k = values[i];
//   console.log(k + ':' + Obj[k]);
// }

