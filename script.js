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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//-----------ENHANCED OBJECT LITARELS------------

//-------------LOOPING ARRAYS (FOR-OF LOOP)-----
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // console.log(item); // entries - creating new array for each iteration, like: [0, item of menu]
  console.log(`${i + 1}: ${el}`); // We'll see 1: item of menu. {i + 1} - for ral-world menu (starts from 1, not 0)
}

// console.log(menu.entries()); //Array Iterator {}
// console.log([...menu.entries()]);

/*
//-----------------LOGICAL ASSIGNMENT OPERATORS------------

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};

/*
//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; // return number of Guests if it's not falsy (exist)
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // logical assignment operator
// rest2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10; // logical assignment operator
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // owner has set to undefined (doesn't exist)
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // replace owner: "Giovanni Rossi". It's works because of short-circuiting. Both truthy

rest1.owner &&= '<ANONYMOUS>'; //logical AND assignment operator does is to assign a value to a variable if it's currently thruthy
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // return 20 immediately
console.log(rest2); // return 10

/*
//----------------Nullish coalescing operator----------

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nulish: null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 10 if estaurant.numGuests = 0

//------------------&& and || operators----------------

/*
console.log('------OR------');
// OR operator will return the first truthy value of all operands or simply the last value if all of them are falsy

//Use ANY data type, return ANY data type, short-circuiting (короткое замыкание?) сокращенный способ вычисления
console.log(3 || 'Dmitriy'); // result doesn't always have to be a Boolean (3). If the first operand is truthy in the OR operator then the other oerand will not even ve evaluated.

console.log('' || 'Dmitriy'); // falsy || true - "Dmitriy"
console.log(true || '0'); // true || nevermind - true
console.log(undefined || null); // falsy || falsy - null (because at the end)
console.log(undefined || null || '' || 'Hello' || 23 || null); // Hello - first of truthy values of chain

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------AND------');
// AND operator will return the first falsy value or the last value if all of them are truthy

console.log(0 && 'Dmitriy'); // 0 - first falsy
console.log(7 && 'Dmitriy'); // true and true - return "Dmitriy"(thruthy)
console.log('Hello' && 23 && null && 'Dmitriy'); // null - first falsy No need to continue, because awhole reuslt is gonna be false anyway

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
s
// -----------------REST PATTERN AND PARAMETRS----------

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // We'll see 1 2 [3, 4, 5]

// --------------------REST with Arrays--------------------

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // REST element MUST BE THE LAST ELEMENET
console.log(pizza, risotto, otherFood); // Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// --------------------REST with Objects--------------------

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// 2) Functions

const add = function (...numbers) {
  //console.log(numbers); // We'll see theree arrays (add). REST syntax is taking multiple numbers or values and then packs them all into one array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/*
// ---------------------SPREAD OPERATOR------------------

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

*/

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
//=Destructuring
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

// const temp = main; //temporarily stored main in temp because we can't do main aqual secondary, and secondary equals main (we would already have overwritten main variable)
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

/*
//-----------------CODDING CHALENGE #1------------------

// The Complete JavaScript Course 16
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Use destr. Create new array
const [players1, players2] = game.players;
console.log(players1, players2);
//2. Use rest. Extract array element
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3.Use rest. Merg two arrays with dest
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4. Use rest. Add new elements in array
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);
//5. Use nested
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6. Use function. Extract from object
const printGoals = function (...numbers) {
  console.log(`${numbers.length} goals were scored`);
};
printGoals(...game.scored);
//7. Use &&
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
*/
