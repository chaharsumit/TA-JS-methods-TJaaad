let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end

fruits.push('papaya');

// Remove the last element from fruits array

fruits.pop();

// Log the current length of fruits array

fruits.length; // 4

// Remove the first element from fruits and log the value of fruits (use delete arr[0])

delete fruits[0];

// Log the element on index 0 and 1

console.log(`${fruits[0]}
${fruits[1]}`);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)

if(fruits[0] === 'undefined' && fruits[1] === 'Banana'){
  fruits.shift();
}

// Add a new element to the start ('Guava') and shift the index of all other to one higher value

fruits.unshift('Guava');

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

fruits.unshift('Dragon Fruit');

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

fruits[1] === 'Guava' && fruits[0] === 'Dragon Fruit' ? true : false;

// Update the value of index 1 to `Pears`

fruits[1] = 'Pears';

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

fruits.splice(1,'Kiwi','Lemon');

// Remove (slice) all the element from index 5

fruits.slice(5);

// Create another array named moreFruits with values ['Berries', 'Melons']

let moreFruits = ['Berries', 'Melons'];

// Concat moreFruits into fruits array (re-assign so the value gets updated)

let fruitNew = fruits.concat(moreFruits);

// Log the name of all fruit in console

fruitNew.forEach((fruit) => console.log(fruit));

// Convert each fruit name to lowercase and log it

fruitNew.forEach((fruit) => console.log(fruit.toLowerCase()));

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

let lowercaseFruits = [];
fruitNew.forEach((fruit) => lowercaseFruits.push(fruit.toLowerCase()));

// Convert all fruits name into uppercase and store in new array named uppercaseFruits

let uppercaseFruits = [];
fruitNew.forEach((fruit) => uppercaseFruits.push(fruit.toUpperCase()));

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

numbers.flat().forEach((num) => console.log(num));

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

numbersTwo.flat(2).forEach((num) => console.log(num));

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

numbersThree.flat(4).forEach((num) => console.log(num));
numbersThree = numbersThree.flat(4);

// Use forEach to log all the elements of numberThree array

numbersThree.forEach((num) => console.log(num));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map

let doubleNumbers = numbersThree;
doubleNumbers.map((num) => num * 2);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

let tripleNumbers = numbersThree;
tripleNumbers.map((num) => num * 3);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

let halfNumbers = numbersThree;
halfNumbers.map((num) => num / 2);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

let oddNumbers = [];
oddNumbers = numbersThree.filter((num) => num % 2 != 0);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

let evenNumbers = [];
evenNumbers = numbersThree.filter((num) => num % 2 == 0);

// Find the index of 10 in numbersThree array

numbersThree.indexOf(10); // 9

// Reverse the values of numbersThree array

numbersThree.reverse();

// Reverse the values of numbersTwo array

numbersTwo.reverse();

// Join all fruits with '-', convert to uppercase and log it

console.log(fruits.map((fruit) => fruit.toUpperCase()).join('-'));

// Join all fruits with '&', convert to lowercase and log it

console.log(fruits.map((fruit) => fruit.toLowerCase()).join('&'));
