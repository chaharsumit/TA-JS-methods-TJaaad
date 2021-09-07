// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101);

// - Find the last index of `9` in numbers

numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.join(' ');

// - Add two new words in the strings array "called" and "sentance"

strings.concat('called','sentence');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join(' ');

// - Remove the first word in the array (strings)

strings.shift();

// - Find all the words that contain 'is' use string method 'includes'

strings.filter(x => x.includes('is'));

// - Find all the words that contain 'is' use string method 'indexOf'

strings.filter(x => x.indexOf('is') != -1);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every(x => x % 3 == 0);

// -  Sort Array from smallest to largest

numbers.sort((a,b) => a - b);

// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers

numbers.reduce((curr,next) => curr > next ? curr : next);

// - Find longest string in strings

strings.reduce((curr, next) => curr.length > next.length ? curr : next);

// - Find all the even numbers

numbers.filter(x => x % 2 == 0);

// - Find all the odd numbers

numbers.filter(x => x % 2 != 0);

// - Place a new word at the start of the array use (unshift)

strings.unshift('if');

// - Make a subset of numbers array [18,9,7,11]

numbers.slice(3,8);

// - Make a subset of strings array ['a','collection']

numbers.splice(3,4);
numbers.slice(3,7);

// - Replace 12 & 18 with 1221 and 1881

numbers.splice(numbers.indexOf(12),1,1221);

// - Replace words in strings array with the length of the word

let lengthStrings = strings.map(x => x.length);

// - Find the sum of the length of words using above question

lengthStrings.reduce((acc, curr) => acc + curr);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.filter(x => x.firstname.startsWith('J'));

// - Create new array with only first name

customers.map(x => x.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")

let customerNames = customers.map(x => x.firstname.concat(' ',x.lastname));

// - Sort the array created above alphabetically

customerNames.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

let vowels = ['a','e','i','o','u'];
let wovelNames = customers.filter(x => {
  for(vowel of vowels){
    if(x.firstname.includes(vowel)){
      return x.firstname;
    }
  }
});
