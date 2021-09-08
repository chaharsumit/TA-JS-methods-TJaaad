let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map(x => x.name);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map(x => x.grade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map(x => x.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

peopleName.filter(x => {
  if(x.startsWith('J') || x.startsWith('P')){
    return x;
  }
});

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

peopleName.filter(x => {
  if(x.startsWith('A') || x.startsWith('C')){
    return x;
  }
});

// Log all the filtered male ('M') in persons array

persons.filter(x => {
  if(x.sex === 'M'){
    return x;
  }
});

// Log all the filtered female ('F') in persons array


persons.filter(x => {
  if(x.sex === 'F'){
    return x;
  }
});

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

persons.filter(x => {
  if(x.sex === 'F' && (x.name.startsWith('J') || x.name.startsWith('C'))){
      return x;
  }
});

// Log all the even numbers from peopleGrade array

peopleGrade.filter(x => x % 2 == 0);

// Find the first name that starts with 'J' in persons array and log the object

persons.find(x => x.name.startsWith('J'));

// Find the first name that starts with 'P' in persons array and log the object

persons.find(x => x.name.startsWith('P'));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

persons.find(x => x.name.startsWith('J') && x.grade > 10 && x.sex === 'F');

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter(x => x.sex === 'F');

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter(x => x.sex === 'M');

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc,curr) => acc + curr);

// Find the average grade

let avg = peopleGrade.reduce((acc,curr) => acc + curr) / peopleGrade.length;

// Find the average grade of male

malePersons.map(x => x.grade).reduce((acc,curr) => acc + curr) / malePersons.length;

// Find the average grade of female

femalePersons.map(x => x.grade).reduce((acc,curr) => acc + curr) / femalePersons.length;

// Find the highest grade

peopleGrade.sort((a,b) => a - b)[peopleGrade.length - 1];

// Find the highest grade in male

malePersons.map(x => x.grade).sort((a,b) => a- b)[malePersons.length - 1];

// Find the highest grade in female

femalePersons.map(x => x.grade).sort((a,b) => a- b)[femalePersons.length - 1];

// Find the highest grade for people whose name starts with 'J' or 'P'

(persons.map(function (x){
  if(x.name.startsWith('J') || x.name.startsWith('P')){
    return x.grade;
  }else{
    return 0;
  }
}).sort((a,b) => a- b))[persons.length - 1];

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a,b) => a - b).forEach(x => console.log(x));

// Sort the peopleGrade in descending order

peopleGrade.sort((a,b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

[...peopleGrade].sort((a,b) => b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`

peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

[...peopleName].sort();
