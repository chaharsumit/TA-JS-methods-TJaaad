let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

words.reduce((curr,next) => curr.length >= next.length ? curr : next);

// - Convert the above array "words" into an array of length of word instead of word.

words.split('');

// - Create a new array that only contains word with atleast one vowel.

let vowels = ['a','e','i','o','u'];

let wordsHavevowel = words.filter(x => {
  for(vowel of vowels){
    if(x.includes(vowel)){
      return x;
    }
  }
});

// - Find the index of the word "rhythm"

words.indexOf('rhythm');

// - Create a new array that contians words not starting with vowel.

vowels = ['a','e','i','o','u'];

let result = words.filter(x => {
    for(vowel of vowels){
      if(x.startsWith(vowel)){
        return x;
      }
  }
});

// - Create a new array that contianse words not ending with vowel

vowels = ['a','e','i','o','u'];

let result = words.filter(x => {
    for(vowel of vowels){
      if(x.endsWith(vowel)){
        return x;
      }
  }
});


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(acc,curr){
  return acc + curr;
}

numbers.reduce(sumArray);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

numbers.map(x => x * 3);

// - Create a new array that contains only even numbers

numbers.filter(x => x % 2 == 0);

// - Create  a new array that contains only odd numbers.

numbers.filter(x => x % 2 != 0);

// - Create a new array that should have true for even number and false for odd numbers.

numbers.map(x => {
 if(x % 2 == 0){
 	return true;
 }else{
  return false;
 }
});

// - Sort the above number in assending order.

numbers.sort((a,b) => a - b);

// - Does sort mutate the original array?

Yes it does mutate the array

// - Find the sum of the numbers in the array.

numbers.reduce((acc,curr) => acc + curr);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(numbers){
  let avg = numbers.reduce((acc,curr) => acc + curr) / numbers.length;
  return avg;
}


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageStrings(strings){
  let strlength = strings.map(x => x.length);
  let avg = strlength.reduce((acc,curr) => acc + curr) / strlength.length;
  return avg;
}

