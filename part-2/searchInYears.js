// 1 prints the car  
//   `id`, 
//   `make`, 
//   `model`,
//   `year` 
// 2 all cars with a year inside the year range provided in the script argument. 
// 3 The range is _inclusive_—i.e. include cars with the same year as the start year or the end year of the range, as well as all years in between.

//SEARCH BY CITY
// searchByCity.js takes one string argument (let's call it the city), finds all the clients from clients.json who have a city that exactly matches the city, and prints the id, rep_name, city, city, and state of each matching client.

// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

//Pseudo.
// 1. Get required resources
var fs = require('fs'); //requires the node 'fs' library.
var clientData = require('./clients')
var targetCity = process.argv[2] //search parameter is the 3rd array item.
console.log(targetCity);

// 2. load the clients.json file into the var 'clientData' (using absolute path).
// const clientData = JSON.parse(fs.readFileSync('./clients.json', 'utf8')); //

function byCity(clientObj, index, clientData) { 
    // console.log(clientObj);   
  if (clientObj.city == targetCity) {
        return true;
    }
    else {
         return false;
     }}

var clientsFound = clientData.filter(byCity);
// console.log(JSON.parse(clientsFound,));
// console.log(clientsFound); // print all the values of clientsFound

for (i in clientsFound){
    console.log(i);
    for (key in clientsFound[i]){
      if(key !== 'company' && key !== 'no_employees' && key !== 'phone' && key !== 'created_at') { // filters out unwanted keys.  NOTE: Must use '&&'!  '||' ("OR" operator) does not work in JS 'if'.  This is NOT SQL.
      //Prints the id, rep_name, city, and state of each matching client.
        console.log( key + ": " + clientsFound[i][key]);
      }
    }
}

// Return these values
        // clientsFound.id
        // clientsFound.rep_name
        // clientsFound.city
        // clientsFound.city
        // clientsFound.state

        