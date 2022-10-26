'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //as we receive that object, we do immediately destructuring object
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// ---------------------------SPREAD OPERATOR--------------------

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

//How it works
const newArr = [1, 2, ...arr]; //[1, 2, 7, 8, 9] "..." - spread operator taking all elements out of the array and writting manualy
// const newArr2 = [1, 2, arr]; //[1, 2, [7, 8, 9]]
console.log(newArr);

console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //['Pizza', 'Pasta', 'Risotto', 'Gnocci']
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Dmitriy';
const letters = [...str, ' ', 'A.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Angve`); // multiple values separated by a comma are usualy only expected when we pass arguments into a function or we build a new array

//Real-world example
const ingredients = [
  // prompt("Lets's make pasta! Ingredient 1?"),
  // prompt("Lets's make pasta! Ingredient 2?"),
  // prompt("Lets's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // same as above, but shorter

//Objects (experiment)
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// ----------------------------OBJECTS---------------------------
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sola, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sola, 21',
  starterIndex: 1,
  // time - default (20:00)
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Rename
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Create new object inside
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj); // We cant use const (because a and b already declared) or let (because that would create new variables). Use parentheses, because for JS starting a line with {} is a syntax error
console.log(a, b); // 23 7

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
// ----------------------------ARRAYS---------------------------
//Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructuring the array. This looks like an array, but it's not an array, it's the destructuring assignment
console.log(x, y, z);

console.log(arr); // not destroing, just desctructing - unpacking

let [main, , secondary] = restaurant.categories; // ", ," - skip the element in the middle ( We'll see Italian, Vegetarian)
console.log(main, secondary);

//-------------------SWITCHING VARIABLES-------------------
//switch the element #1

// const temp = main; //temporaril stored main in temp because we can't do main aqual secondary, and secondary equals main (we would already have overwritten main variable)
// main = secondary;
// secondary = temp;
// console.log(main, secondary);


//switch the element #2 (with desctructuring)

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// ------------------------NESTED DESTRUCTURING-----------------
//Case with array in array
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);


//Destructuring inside of destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k); // We'll see 2 5 6

//Default values
const [p = 1, q = 2, r = 2] = [8];
console.log(p, q, r); // 8 2 2
*/
