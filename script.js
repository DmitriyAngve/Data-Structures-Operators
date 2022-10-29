'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 - enchanced object litarels (не нужно писать openingHours: openingHours)
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // return an array
  },

  orderDelivery: function ({
    starterIndex = 1, // сами задали индекс
    mainIndex = 0, // сами задали индекс
    time = '20:00',
    address,
  }) {
    // { starterIndex, mainIndex, time, address } - скобки для немедленной деструктуризации
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
    // `Order received! ${restaraunt.starterMenu[starterIndex = 1 from  restarauntDelivery]} and ${restaraunt.mainMenu[mainIndex from restarauntDelivery= 0]} will be delivered to ${Via del Sole, 21} to ${20:30}
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is our delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/*
//////////////////////////////////////////////////////////////
////////////////////////////SETS//////////////////////////////
//////////////////////////////////////////////////////////////

//Sets is collection of the !!UNIQUE!! values
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); //removes duplicate elements and outputs the rest

console.log(new Set('Jonas')); // {'J', 'o', 'n', 'a', 's'}

// Size of Set
console.log(orderSet.size); // 3

// Availability (has like includes in array)
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false

// Adding new element
orderSet.add('Garlic Bread'); // add
orderSet.add('Garlic Bread'); // no
console.log(orderSet); //{'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

// Delete element
orderSet.delete('Risotto');
console.log(orderSet); // {'Pasta', 'Pizza', 'Garlic Bread'}

// We can't retrive element from Set (if we need it, when use an array)

// Delete all elements
// orderSet.clear();
// console.log(orderSet); // {size: 0}

// Sets are also iterable
for (const order of orderSet) console.log(order); // Pasta Pizza Garlic Bread

// Real-world example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// [...new Set(staff)] - create an NEW UNIQUE array
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3 (if we dont need UNIQUE NEW array)

// Counting how many different letters there are in a string
console.log(new Set('DmitriyAngve').size); // 11

/*
//////////////////////////////////////////////////////////////
//////////////////////LOOPING OBJECTS/////////////////////////
//////////////////////////////////////////////////////////////

//------------------LOOPING PROPERTY NAMES(KEYS)-----------------

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); //['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `; // We are open on 3 days: thu, fri, sat,
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values); // Так же как и с ключами [{…}, {…}, {…}]

//Property ENTRIES
const entries = Object.entries(openingHours);
console.log(entries); // [Array(2), Array(2), Array(2)]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*

//////////////////////////////////////////////////////////////
///////////////////OPTIONAL CHAINING (?.)/////////////////////
//////////////////////////////////////////////////////////////

// WITHOUT OPTIONAL CHAINING (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING (?.)
console.log(restaurant.openingHours.mon?.open); // если свойство open у mon не существует, то опциональная цепочка сразу вернет undefined
console.log(restaurant.openingHours?.mon?.open);

//Real-world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // [day]!!!!!!!
  console.log(`On ${day}, we are open at ${open}`);
}

//------------------METHODS--------------------

console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist');
//['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Methods does not exist'); // Methods does not exist

//------------------ARRAYS--------------------

const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
console.log(users[0]?.name ?? 'User array empty');

// То же самое, но длиннее
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

/*
//////////////////////////////////////////////////////////////
///////////////////LOOPING ARRAYS FOR-OF//////////////////////
//////////////////////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // выведен все элементы массива menu один за одним

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // same as `${item[0]+1}: ${item[1]}`
}

console.log([...menu.entries()]); // тут entries создаст ОДИН массив, состоящий из массивов в которых индекс и элемент menu

/*

//////////////////////////////////////////////////////////////
///////////////////LOGICAL ASSIGNMENT OPERATOR////////////////
//////////////////////////////////////////////////////////////

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
/*
// ---------------OR ASSIGNMENT OPERATOR-----------------

// rest1.numGuests = rest1.numGuests || 10; // есть ли в rest1 numGuests или 10
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1); // {name: 'Capri', numGuests: 20} (if numGuests: 0 - вернет 10, потому что 0 - falsy)
console.log(rest2); // name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10} - добавлено свойство numGuests
*/
// ---------------NULLISH ASSIGNMENT OPERATOR-----------------
/*
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); //{name: 'Capri', numGuests: 0}
console.log(rest2); //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
*/

// ---------------AND ASSIGNMENT OPERATOR-----------------
/*
rest1.owner &&= '<ANONYMIOUS>';
rest2.owner &&= '<ANONYMIOUS>';

console.log(rest1); //{name: 'Capri', numGuests: 0}
console.log(rest2); //{name: 'La Piazza', owner: '<ANONYMIOUS>'} - owner отсутствует, вернется первое falsy - '<ANONYMIOUS>'

/*
//////////////////////////////////////////////////////////////
///////////////////THE NULLISH COALESCING OPERATOR(??)////////
//////////////////////////////////////////////////////////////

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //10

// Nullish: null and undefined (NOT include 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0 (rule)

/*
//////////////////////////////////////////////////////////////
////////////////////SHORT CIRCUITING(&& AND ||)///////////////
//////////////////////////////////////////////////////////////

// Use ANY data type, return ANY data type, short-circuiting (если первое значение правдиво, то сразу вернуть его) JS даже не рассмотрить второе значение

// OR
console.log('----------OR-----------');
console.log(3 || 'jonas'); // 3
console.log('' || 'jonas'); // jonas
console.log(true || 0); // true
console.log(undefined || null); // null (вернет последний - оба falsy)

console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello - первое правдивое значение

//Real-world example
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND
console.log('----------AND-----------');
console.log(0 && 'Jonas'); // 0 первое FALSY
console.log(7 && 'Jonas'); // Jonas - последнее TRUTHY

console.log('hello' && 23 && null && 'jonas'); // null ервое FALSY

// Real-world example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'sppinach'); // mushrooms ['sppinach']
}

// Проверяем существует ли
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'sppinach'); // mushrooms ['sppinach']
/*

//////////////////////////////////////////////////////////////
////////////////////REST OPERATOR ARRAYS//////////////////////
//////////////////////////////////////////////////////////////

// ------------HOW REST WORKING WITH DESTRUCTURING ASSIGNMENT----
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]. REST собирает неиспользуемые элементы в массив

// Вынимаем элементы из массива, остальные пакуем в массив (rest всегда в конце!!!)
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//////////////////////////////////////////////////////////////
////////////////////REST OPERATOR OBJECTS/////////////////////
//////////////////////////////////////////////////////////////

const { sat, ...weedays } = restaurant.openingHours;
console.log(weedays);

// ------------HOW REST WORKING WITH FUNCTIONS----------------

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); // [2, 3]
add(5, 3, 7, 2); // [5, 3, 7, 2]
add(8, 2, 3, 4, 6, 5); // [8, 2, 3, 4, 6, 5]

const x = [23, 5, 7];
add(...x); // 23 + 5 + 7 = 35

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// mushrooms ['onion', 'olives', 'spinach']
restaurant.orderPizza('mushrooms'); // mushrooms []

/*
//////////////////////////////////////////////////////////////
////////////////////SPREAD OPERATOR ARRAY/////////////////////
//////////////////////////////////////////////////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// const newArr = [1, 2, arr]; // [1, 2, [7, 8, 9]]
const newArr = [1, 2, ...arr]; //[1, 2, 7, 8, 9]
console.log(newArr);
console.log(...newArr); // 1 2 7 8 9

// Создаем массив с дополнительным элементов из main.Menu объекта restaurant
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Спред оператор не создает новых переменных

// Cope array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Спред работает со всеми перебираемыми объектами

// Iterablesl arrays, maps, sets, but NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str); // J o n a s
// console.log(`${...str} Shmedtmann`); // Unexpected token '...'

// Real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // Here is our delicious pasta with ${ing1}, ${ing2} and ${ing3}

//////////////////////////////////////////////////////////////
////////////////////SPREAD OPERATOR OBJECTS///////////////////
//////////////////////////////////////////////////////////////

const newRestaraunt = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaraunt); // {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

// Copy objects
const restarauntCopy = { ...restaurant };
restarauntCopy.name = 'Ristorante Roma';
console.log(restarauntCopy.name); //Ristorante Roma
console.log(restaurant.name); // Classico Italiano

/*
//////////////////////////////////////////////////////////////
////////////////////DESCTRUCTURING OBJECTS////////////////////
//////////////////////////////////////////////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//Что если нам нужны имена переменных отличаюшиеся от свойств имен объекта?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant; // Без menu = [] лог покажет андефайнд
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// { a, b } = obj; // Syntax error из-за фигурных скобок
({ a, b } = obj); // добавили скобки
console.log(a, b); // 23 and 7

// Nested objects
// Выводим в лог вложенный свойства вложенного объекта

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); //11 23 из объекта restaraunt

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23 из объекта restaraunt с их переименованием

//////////////////////////////////////////////////////////////
////////////////////DESCTRUCTURING ARRAYS/////////////////////
//////////////////////////////////////////////////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destr we declare all theree variables at the same time

const [x, y, z] = arr; // const arr = [x,y,z];
console.log(x, y, z);
console.log(arr); // [2, 3, 4] - on destoyed only unpacked

let [first, sec] = restaurant.categories; //unpacking only restaurant.categories[Italian, Pizzeria]
console.log(first, sec); // Italian Pizzeria

let [prv, , ...tret] = restaurant.categories; // ", ," - skipped
console.log(prv, tret);

//Swicth categories
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// #1 Old

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// #2 New (shorter)

[main, secondary] = [secondary, main];
console.log(main, secondary);

// UNPACKING FROM from an array in an object
const [starter, mainCourse] = restaurant.order(2, 0); // 3 элемент из starterMenu и 1 из mainMenu
console.log(starter, mainCourse);

// NESTED
const nested = [2, 4, [5, 6, 7, 8]];
// const [i, , j] = nested; // i and j - variables, "nested" - то откуда берем
// console.log(i, j);

//destructuring inside destructuring
const [i, , [j, , k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
*/

//////////////////////////////////////////////////////////////
////////////////////CODING CHALLENGE #1///////////////////////
//////////////////////////////////////////////////////////////

/*
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

//1. Создать два массива из объекта
const [players1, players2] = game.players;
console.log(players1, players2);
//2. Вытащить из массива один элемент и остальные оставить в массиве
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3. Создать один массив из двух массивов
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4. Создать массив, добавив в него 3 элемента
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5. В объекте, находящимся в объекте изменить названия свойств
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6. Создать функциюб которая будет принимать произвольное количество игроков (не массив) и выводить каждых из них в консоль вместе с количеством их упоминаний в массиве
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
//7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/

/*
//////////////////////////////////////////////////////////////
////////////////////CODING CHALLENGE #2///////////////////////
//////////////////////////////////////////////////////////////

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

//1. Изобъекта взять массив, деструктурировали его и записали в строку
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
//2. Используя loop for-of посчититать среднее арифметическое odds
const odds = Object.values(game.odds);
console.log(odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3. Вывести в консоль 3 odds, но в формате строки из примера
for (const [team, odd] of Object.entries(game.odds)) {
  // создаем строку str, которая создается проверяя свойства odds, если team (из Object.entries(game.odds) равно "x", то выводим "draw", если нет, то выводим строку про victory, где game - сам большой объект, а team - это название команд в том же объекте)
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/
