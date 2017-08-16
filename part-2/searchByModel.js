// `searchByModel.js` takes one argument (let's call it the `model`), finds all the cars from `cars.json` who have a `model` value that _exactly matches_ the `model` argument, and prints the `id`, `model`, `year`, `last_owner`, and `date_purchased` of each matching car.


// 1. Get required resources
    var fs = require('fs'); //requires the node 'fs' library.
    var carData = require('./cars');
    var targetModel = process.argv[2]; //search parameter is the 3rd array item.
// console.log(targetModel + " in targetModel");

// 2. load the cars.json file into the var 'carData' (using absolute path).
    const carArray = JSON.parse(fs.readFileSync('./cars.json', 'utf8')); 

// 3. Declare helper function 'byModel' to match search parameter 'targetModel' to array values.
// Attribution:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byModel(carObj, index, carData) { 
        // console.log(carObj + " in carObj");   
      if (carObj.model == targetModel) {
            return true;
        }
        else {
            return false;
        }
    }

var carsFound = carArray.filter(byModel); 
console.log(carsFound + " in carsFound"); // print all the values for carsFound

for (i in carsFound){
    // console.log(i + " in 'i'");
    for (key in carsFound[i]){
     var badKeys = [
      'make',
      'vin'
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + carsFound[i][key]);
    }
    }        
}

// Include these values of each matching car:
    // `id`
    // `model`
    // `year`
    // `last_owner`
    // `date_purchased` 
// 
        
// Exclude these values on these keys by adding to 'badKeys' array:
    // "make": "Chevrolet",
    // "vin": "4041371073370"