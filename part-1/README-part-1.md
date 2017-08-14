## Part 1: Write tests and solutions for these functions

For the following exercises, write your functions in a file called `part-1/functions.js` and your tests in a file called `part-1/tests.js`.

You can use whichever testing tools you prefer: `console.assert()` (builtin to Node), Mocha and Chai, Jasmine, etc.

### Show the day of the week

Write a function `weekday(date)` to find the day of the week for a given `Date` object, returing the weekday as a string ('Sunday', 'Monday', 'Tuesday', etc.).

Example:

```js
let dateA = new Date(2017, 5, 15) // June 15, 2017
weekday(dateA) // returns "Thursday"

let dateB = new Date(2017, 11, 31) // Dec 31, 2017
weekday(dateB) // returns "Sunday"
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `weekday()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `weekday()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `weekday()` is defined in `functions.js`.
- [ ] __10:__ Tests for `weekday()` are passing.

### Capitalize every 4th character

Write a function `capitalizeFourth(string)` that takes a string of words and returns the same string with every 4th character converted to upper case and the rest converted to lower case. Treat whitespace and punctuation characters the same as any other word character.

Example:

```js
capitalizeFourth("Eenie, Meenie, Miney, Moe") // => "eenIe, MeenIe, MineY, mOe"
capitalizeFourth("ABRACADABRA") // => "abrAcadAbra"
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `capitalizeFourth()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `capitalizeFourth()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `capitalizeFourth()` is defined in `functions.js`.
- [ ] __10:__ Tests for `capitalizeFourth()` are passing.

### List of values for object

Write a function `getValues(obj)` that returns all the values for an object (i.e. the values for each of its properties). Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

Example:

```js
let person = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

getValues(person) // => ['Dominique', 30, '555-555-5555']
getValues({ ids: [4, 8, 2], success: true }) // => [ [4, 8, 2], true ]
getValues({}) // => []
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `getValues()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `getValues()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `getValues()` is defined in `functions.js`.
- [ ] __10:__ Tests for `getValues()` are passing.

### Filter around

Write a function `filterAround(array, lower, upper)` that takes an array of strings, a `lower` value, and a `upper` value. It returns a new array containing _only_ the elements from the source `array` that come before `lower` alphabetically and after `upper`. The elements in the returned array should be in the same order as the source array.

Example:

```js
let animals = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

filterAround(animals, 'cow', 'dog') // => ['cat', 'zebra', 'ape', 'lion']
filterAround(animals, 'chimp', 'lobster') // => ['cat', 'zebra', 'ape']
filterAround(animals, 'aardvark', 'zebu') // => []
```

#### Requirements

- [ ] __10:__ A test using expected/valid inputs for the `filterAround()` function is written in `tests.js`.
- [ ] __10:__ A test using unexpected/invalid inputs for the `filterAround()` function is written in `tests.js`.
- [ ] __30:__ Correct implementation of the `filterAround()` is defined in `functions.js`.
- [ ] __10:__ Tests for `filterAround()` are passing.
