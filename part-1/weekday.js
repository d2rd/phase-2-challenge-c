// Write a function month(date) to find the month for a given Date object, returning the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).

var calendar = [
  {
    {"monthNumber": "1",
    "monthName"  : "January",
    "monthNumber": "2",
    "monthName"  : "February",
    "monthNumber": "3",
    "monthName"  : "March",
    "monthNumber": "4",
    "monthName"  : "April",
    "monthNumber": "5",
    "monthName"  : "May",
    "monthNumber": "8",
    "monthName"  : "June",
    "monthNumber": "7",
    "monthName"  : "July",
    
  }
  ]


function month(dateInput){
  // var dateInput = prompt("Please enter a date","mm/dd/yyyy");
  var dateInput = process.argv[2];
  console.log(dateInput);

  //split dateInput into array.
    dateInputArray = dateInput.split("/");
    console.log(dateInputArray);
  //extract month digits from dateInput

  var getMonth = function (dateInputArray) { 
    if (dateInputArray[0] >= 1 || dateInputArray[0] <= 12) {
    console.log('the month is ' + getMonth);
          return console.log('this is a valid month');
      }
      else {
          return false;
      }};
};

//match dateInput to monthNumber.
  
  // for (i in calendar){
  //     console.log(i);
  //     for (key in calendar[i]){
  //       if(key !== 'company' && key !== 'no_employees' && key !== 'phone' && key !== 'created_at') { // filters out unwanted keys.  NOTE: Must use '&&'!  '||' ("OR" operator) does not work in JS 'if'.  This is NOT SQL.
  //       //Prints the id, rep_name, city, and state of each matching client.
  //         console.log( key + ": " + calendar[i][key]);
  //       }
  //     }
  // }

month();
// getMonth();
// let dateInput = new Date(2017, 6, 19) // June 19, 2017
// month(dateInput) // returns "June"

