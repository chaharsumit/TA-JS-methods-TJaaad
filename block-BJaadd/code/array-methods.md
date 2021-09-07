Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: separator(optional) - default to ',' (any type but converted to string if not string)
   - Return: return a string(string type) with all of the calling arrays elements concatenated using the separator.
   - Example:
     ```js
     let arr = [1,2,3,4,5];
     arr.join(); // '1,2,3,4,5'
     arr.join(''); // '12345'
		 arr.join('...'); // '1...2...3...4...5'
     ```
   - `join` takes in a calling array and concatenates every element together returning a new string with elements spearated by a separator if passed as parameter.
   - No it does not mutate the original array

3. `flat`

   - Parameter: depth optional default to 1 level(number type)
   - Return: return a new array with all subarrays concatenated into the parent array
   - Example: 
     ```js
     let arr = [1,2,[3,4,[5,6,[7,8]]]];
     arr.flat(); // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ]
     arr.flat(3); // [1, 2, 3, 4,5, 6, 7, 8]
     arr.flat(infinity); // [1,2,3,4,5,6,7,8] 
     ```
   - `flat` takes a calling array and concatenates its subarrays according to the depth passed in as parmeter it also removes any empty spaces inside the array 
   - No it does not mutate the original array

4. `push`

   - Parameter: n number of elements(any type)
   - Return: the new length of the array after execution of push(number Type)
   - Example:
     ```js
     let arr = [];
     arr.push('hello'); // returns 1
     arr.push('world'); // return 2
     arr.push(2); // returns 3
     console.log(arr); // ['hello','world','2'] 
     ```
   - `push` makes alterations in the calling array by adding items to the end of the array and returns the arrays new length after each time push() is performed
   - yes it does mutate the original array

5. `indexOf`

   - Parameter: searchitem(Any type value), fromIndex(optional)(number Type value)
   - Return: returns the index number where item is found or -1 if not found(Number type value)
   - Example:
     ```js
     let arr = ["1","2","3","4"];
     arr.indexOf("1"); // 0
     arr.indexOf("1", 2); // -1
     arr.indexOf("3", -3); // 2
     ```
   - `indexOf` finds out on which position does the first occurence of given searchElement happens and returns the index number where the element is found
   - No it does not mutate the original array

6. `lastIndexOf`

   - Parameter: search item(any value), fromIndex(number Type)(optional) - defaults to arr.length - 1
   - Return: last index of the search element in the array from the fromIndex
   - Example:
     ```js
     let arr = [1,2,3,4,5,6,2,1,7,3,2,6,1,3];
     arr.lastIndexOf(2); // 0
     arr.lastIndexOf(1,-11); // -1
     arr.lastIndexOf(3,-3); 
     ```
   - `lastIndexOf` searches the array to right to left and return the index of first occurence of the item from right to left or -1 if not found
   - No it does not mutate the original array

7. `includes`

   - Parameter: search item(any value), fromIndex(number Type)(optional) - defaults to 0
   - Return: true or false(boolean type)
   - Example:
     ```js
     [1,2,3,4,5,6].includes(1); // true
     [1,2,3,4,5,6].includes(1,-3); // false
     [1,2,3,4,5,6].includes(6,6); // false
     ```
   - `includes` seaches for the occurence of search item from left to right and returns  true or false for found or not found.
   - No it does not mutate the original array

8. `reverse`

   - Parameter: none
   - Return: return the same array but by mutating it with its reversed version(object type returned)
   - Example:
     ```js
     [1,2,3].reverse(); // [3,2,1]
     ['a','b','c'].reverse(); // ['c','b','a']
     ['hello', 'world'].reverse(); // ['world', 'hello']
     ```
   - 	`reverse` just takes our calling array and reverses the order of its elements returning the address of the new array into our calling array
   - Yes it does mutate the original array

9. `every`

   - Parameter: callback function , current element, optional - index, array
   - Return: return a boolean value true or false
   - Example:
     ```js
     [1,2,3,4].every(x => typeof x === "number"); // true
     [1,2,3,4,'s'].every((x) => typeof x == "number"); // false
     [2,4,6].every(x => x % 2 == 0); // false
     ```
   - `every` checks if for each and every item in the calling array we have our condition satisfied or not only if condition satisfied for all values of array it returns true else false
   - No it does not mutate the original array

10. `shift`

   - Parameter: none
   - Return: returns the removed element.
   - Example:
     ```js
     let arr = [1,2,3,4]
     arr.shift(); // [2,3,4]
     arr.shift(); // [3,4]
     let arr = [];
     arr.shift(); // [] returns undefined if calling array is empty
     ```
   - `shift` deletes the first element from the array and returns the deleted element
   - Yes it does mutate the original array

11. `splice`

   - Parameter: start starting index of item deletion, deletecount how many items to delete, elements(optional)
   - Return: returns a new array of deleted elements
   - Example:
     ```js
     let arr = [1,2,3,4];
     arr.splice(0); // []
     arr.splice(0,6,5,6); // [1,2,3,4,5,6]
     arr.splice(-2); // [3,4]
     ```
   - `splice` is used to remove elements from a given starting index and upto the number of deletecount and splice can also act as concatenator for an array if its deletecount > arr.length thus items in parameters will be added till array length
   - No it does not mutate the original array

12. `find`

   - Parameter: callback, element, optional - index,array
   - Return: returns the first element that satisfies the callback function else returns undefined
   - Example:
     ```js
     let arr = [1,2,3,4,'a','b','c','d'];
     arr.find(x => typeof x === 'string'); // 'a'
     arr.find(x => x % 2 == 0); // '2'
     arr.find(x => x % 2 != 0); // '1'
     ```
   - `find` checks for the elements of calling array to return true from the callback function if true then it returns the number. The first occurence of any true result is returned else undefined is returned
   - No it does not mutate the original array

13. `unshift`

   - Parameter: n number of elements
   - Return: returns the length of array after addition of elements
   - Example:
     ```js
     let arr = [];
     arr.unshift(1); // [1] return 1
     arr.unshift(2,3,4); // [2,3,4,1] returns 4
     arr.unshift(); // return 4 array remains same
     ```
   - `unshift` adds elements into the array from its starting index and makes the other elements increase their indices. It returns the new length of the calling array as array is mutated here 
   - Yes it does mutate the original array

14. `findIndex`

   - Parameter: callback, element, optional - index,array
   - Return: returns the index number where element is found or -1
   - Example:
     ```js
     let arr = [1,2,3,4,5,6,7,8,9,10];
     arr.findIndex(x => x==5); // returns 4
     arr.findIndex(x => x==11); // return -1
     arr.findIndex(x => x%5==0); // return 4
     ```
   - `findIndex` returns the index number where the callback function returns a truthy value and -1 is returned if there's no truthy value found
   - No it does not mutate the original array

15. `filter`

   - Parameter: callback, element, optional - index,array
   - Return: returns a new array containing all elements that pass the given test
   - Example:
     ```js
     let arr = [1,2,3,4,5,6,7];
     arr.filter(x => x > 0); // [1, 2, 3, 4, 5, 6, 7]
     arr.filter(x => x % 2 == 0); // [ 2, 4, 6 ]
     arr.filter(x => x % 2 != 0); // [ 1, 3, 5, 7 ]
     ```
   - `filter` is used to filter those elements of calling array out which staisfy the test conditions given in the callback function 
   - No it does not mutate the original array

16. `flat`

   - Parameter: depth optional default to 1 level(number type)
   - Return: return a new array with all subarrays concatenated into the parent array
   - Example: 
     ```js
     let arr = [1,2,[3,4,[5,6,[7,8]]]];
     arr.flat(); // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ]
     arr.flat(3); // [1, 2, 3, 4,5, 6, 7, 8]
     arr.flat(infinity); // [1,2,3,4,5,6,7,8] 
     ```
   - `flat` takes a calling array and concatenates its subarrays according to the depth passed in as parmeter it also removes any empty spaces inside the array 
   - No it does not mutate the original array
   
17. `forEach`

   - Parameter: callback, element, optional - index,array
   - Return: returns undefined
   - Example: 
     ```js
     let arr = ['h','e','l','l','o'];
     arr.forEach(x => console.log(x));
     arr.forEach(x => x.toUpperCase());
     arr.forEach(x => console.log(typeof x));
     ```
   - `forEach` iterates over each and every element of the calling array and does the specified operation on its elements.
   - No it does not mutate the original array

18. `map`

   - Parameter: callback, element, optional - index,array
   - Return: new array populated with the result returned from callback function
   - Example:
     ```js
     let arr = [1,2,3,4,5,2,3];
     arr.map(x => x * 2); // [2, 4, 6, 8, 10, 4, 6]
     arr.map(x => x == '2'); // [false,true,false,false,false,true,false]
     arr.map(x => x / 2);  // [0.5, 1, 1.5, 2, 2.5, 1, 1.5]
     ```
   - `map` iterates the calling array through all of its elements and for each element it performes the given operation and if the result is returned it pushed the result into the new array that it returns.
   - No it does not mutate the original array

19. `pop`

   - Parameter: none
   - Return: return the element deleted from the array
   - Example:
     ```js
     let arr = [1,2,3,4,5]
     arr.pop(); // [1,2,3,4]
     arr.pop(); // [1,2,3]
     arr.pop(); // [1,2]
     ```
   - `pop` deletes the last element from the calling array and returns the deleted elements
   - Yes it does mutate the original array

20. `reduce`

   - Parameter: callback, optional - initial value, currIndex, array
   - Return: return the final value of accumulator of the callback or reducer function
   - Example:
     ```js
     let arr = [1,2,3,4,5];
     let a = arr.reduce((acc, x) => acc + x); // 15
     let arr = ['h','e','l','l','o'];
		 let a = arr.reduce((acc, x) => acc + x); // 'hello'
     ```
   - `reduce` it iterates for each and every element of calling array and performs the given operation returning the final value of the accumulator
   - No it does not mutate the original array

21. `slice`

   - Parameter: optional - start,end
   - Return: returns a new array by slicing calling array from given start index to end index
   - Example:
     ```js
     let arr = [1,2,3,4,5];
     arr.slice(); // [1,2,3,4,5]
     arr.slice(0,3); // [1,2,3]
     arr.slice(0,-3); // [1,2]
     ```
   - `slice` is used to take some part of a given array and store it in another array it slices the calling array from the given start and end index and returns the new array that gets sliced out from the calling array
   - No it does not mutate the original array

22. `some`

   - Parameter: callback, element, optional - index,array
   - Return: true or false depending on truthy or falsy values
   - Example:
     ```js
     let arr = [2,5,'hello'];
     arr.some(x => x % 2 === 0); // true
     arr.some(x => x < 2); // false
     arr.some(x => x.length == 5); // true
     ```
   - `some` is used to find whether or not a condition is satisfied by any of the elements inside the array or not if yes then it returns true else it returns false
   - No it does not mutate the original array

