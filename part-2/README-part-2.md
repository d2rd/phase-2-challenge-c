## Part 2: Extract data from JSON file

Write a Node.js script to search for data from a JSON file.

Use the [`cars.json` file provided](https://gist.github.com/lg-bot/3014e0b8badc83994ae674fed4666dd7#file-cars-json) representing a database of cars in a used car lot. Download the file to your `part-2/` folder.

Then write two scripts that can be run using the `node` command.

1. `searchInYears.js` takes one argument (let's call it `yearRange`), finds all the cars from `cars.json` which have a `year` that is within the `yearRange`, and prints the `id`, `make`, `model`, and `year` of each matching car. The year range format should follow the format `YYYY-YYYY`, e.g. `1995-2001`.
2. `searchByModel.js` takes one argument (let's call it the `model`), finds all the cars from `cars.json` who have a `model` value that _exactly matches_ the `model` argument, and prints the `id`, `model`, `year`, `last_owner`, and `date_purchased` of each matching car.

Your searches should not be case-sensitive: i.e. a search for "sorento" is the same as a search for "Sorento".

Example: `searchInYears.js`

```shell
$ node searchInYears.js 1999-2000
Finding cars from 1999 to 2000...

[ { id: 21, make: 'Toyota', model: 'Land Cruiser', year: 1999 },
  { id: 23, make: 'Ford', model: 'Mustang', year: 1999 },
  { id: 26, make: 'Chevrolet', model: 'Metro', year: 2000 },
  { id: 62, make: 'Chrysler', model: 'Sebring', year: 2000 },
  { id: 79, make: 'Chevrolet', model: 'Impala', year: 2000 },
  { id: 85, make: 'Dodge', model: 'Grand Caravan', year: 1999 },
  { id: 92, make: 'Nissan', model: 'Quest', year: 1999 } ]
```

Example: `searchByModel.js`

```shell
$ node searchByModel.js jetta
Finding cars with model "jetta"...

[ { id: 1,
    model: 'Jetta',
    year: 2011,
    last_owner: 'Kaylil Minico',
    date_purchased: '7/3/2016' },
  { id: 32,
    model: 'Jetta',
    year: 1995,
    last_owner: 'Katerine McEllen',
    date_purchased: '1/8/2004' } ]
```

#### Requirements

- [ ] __40:__ `searchInYears.js` script prints the car  `id`, `make`, `model`, and `year` for all cars with a year inside the year range provided in the script argument. The range is _inclusive_—i.e. include cars with the same year as the start year or the end year of the range, as well as all years in between.
- [ ] __40:__ `searchByModel.js` script prints the car `id`, `model`, `year`, `last_owner`, and `date_purchased` for all cars with a `model` that matches the provided argument (ignoring case).
