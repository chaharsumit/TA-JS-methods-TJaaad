Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: no parameters
   - Return: returns a new string by uppercasing all letters(string data type)
   - Example:
	 ```js
	 'str'.toUpperCase // 'STR'
	 '1'.toUpperCase // '1'
	 let name = 'sumit';  name.toUpperCase(); // 'SUMIT'
	 ``` 
   - `toUpperCase()` returns a new string by uppercasing all letters in the calling string 

3. `toLowerCase`

   - Parameter: no parameters
   - Return: returns a new string by uppercasing all letters(string data type)
   - Example:
   ```js
   'SUMIT'.toLowerCase(); // 'sumit'
   '12S'.toLowerCase(); // '12s'
   let str = 'AbCd';  str.toLowerCase(); // 'abcd'
   ```
   - `toLowerCase()` returns a new string by lowercasing all letters of the calling string
    
4. `trim`

   - Parameter: no parameters
   - Return: returns a new string by cutting off whitespace from both sides(string data type)
   ```js
   let str = '    hello '; str.trim(); // 'hello'
   'hello '.trim(); // 'hello'
   'sumit chahar'.trim(); // 'sumit chahar' don't trin whitespaces between letters or words
   ```
   - `trim()` returns a new string by removing whitespaces from all sides
5. `trimEnd`

   - Parameter: no parameters
	 - Return: returns a new string by cutting off whitespace from right side(string data type)
	 ```js
   let str = '    hello   '; str.trimEnd(); // '    hello'
   'hello '.trimEnd(); // 'hello'
   '  sumit chahar      '.trimEnd(); // '  sumit chahar'
   ```
   - `trimEnd()` returns a new string by removing whitespaces from right side
   
6. `trimStart`

   - Parameter: no parameters
   - Return: returns a new string by cutting off whitespace from left side(string data type)
   ```js
   let str = '    hello  '; str.trimStart(); // 'hello  '
   '   hello'.trimStart(); 'hello'
   '      sumit chahar  '.trimStart(); // 'sumit chahar  '
   ```
   - `trimStart()` returns a new string by removing whitespaces from left side
   
7. `concat`
	 
   - Parameter: 'n' number of parameters and can be any value even null or undefined
   - Return: returns a new string with all parameter values concatenated to the calling string
	 ```js
	 let str1 = 'sumit';
	 let str2 = 'chahar';
	 str1.concat(' ',str2); // 'sumit chahar'
	 str1.concat(1, str2); // 'sumit1chahar'
	 str1.concat(null, str2); // 'sumitnullchahar'
	 ```
   -  `concat` concatenated the calling string with each of its parameters converting the parameters to string before concatenation and return a new string as result
8. `endsWith`
	 
   - Parameter: searchString , length(optional) - string.length by default
   - Return: returns true or false(Boolean Type)
	 ```js
	 let string1 = 'sumit chahar'
	 string1.endsWith('r'); // true
	 string1.endsWith('r', 2); // false
	 string1.endsWith('it', 5); // true
	 ```
   - `endsWith` searches for the calling string to end with searchString if it does then returns true else returns false.
9. `includes`
	 
   - Parameter: searchString, position(optional) from where to begin search - 0 by default
   - Return: return true or false(Boolean Type)
	 ```js
	 let str = 'hello world';
	 str.includes('world'); // true
	 str.includes('hello'); // true
	 str.includes('h', 1); // false
	 ```
   - `includes` checks if our calling string includes our given searchString or not returns a boolean value true if yes else false.
10. `indexOf`
	 
   - Parameter: no parameters i.e. undefined -OR- SearchElement(string type), fromIndex(number type) - defaults to 0 
   - Return: returns index-number for element found and -1 for not found (number Type) or '0' in case no parameter is passed
	 ```js
	 let element = 'e';
	 let str = 'hello';
	 str.indexOf(element); // 1
	 str.indexOf(element, 0); // 1
	 str.indexOf(element, 3); // -1
	 ```
   - `indexOf` checks over the entire string if the string has the searchValue then it retuns its index number in string or -1 if not.
11. `lastIndexOf`
	 
   - Parameter: no parameters i.e. undefined -OR- SearchElement(string type), fromIndex(number type) - defaults to 0 
   - Return: returns index-number for last occurence of element and -1 for not found (number Type) or '0' in case no parameter is passed
	 ```js
	 'sumit'.lastIndexOf('',5); // 5 empty searchValue fromIndex is returned
	 'hello world'.lastIndexOf('l'); // 9
	 'hello world'.lastIndexOf('l',3); // 3
	 ```
   - `lastIndexOf` searches for the searchValue's last occurence in the calling string and returns the last index found for the search value
12. `padEnd`
	 
   - Parameter: targetLength(number type), padString(optional) - any type but will be converted into string on execution.
   - Return: returns a new string type value with given padString applied
	 ```js
	 'sumit'.padEnd(11,'chahar'); // 'sumitchahar'
	 'hello'.padEnd(10, .); // 'hello.....'
	 'hello'.padEnd(1, '.'); // 'hello' returned as string.length > targetLength
	 ```
   - `padEnd` pads at end our callingString with the string passed in the parameter with targetLength as the maximum length of the resulting string on execution.
13. `padStart`
	 
   - Parameter: targetLength(number type), padString(optional) - any type but will be converted into string on execution.
   - Return: returns a new string type value with given padString applied
	 ```js
	 'hello'.padStart(10, '.'); // '.....hello'
	 'hello'.padStart(1, 'abcd') // 'hello' padstringValue truncated as targetLength too small
	 'hello'.padStart(6,'abcd'); // 'ahello'
	 ```
   - `padStart` pads at start our callingString with the string passed in the parameter with targetLength as the maximum length of the resulting string on execution.
14. `repeat`
	 
   - Parameter: count(number type) should be non-negative and less than infinity.
   - Return: return a new string of copies of string 'count' number of times(String type value).
	 ```js
	 let str = 'hello';
	 str.repeat(2); // 'hellohello"
	 str.repeat(-1); // error invalid count value
	 str.repeat(1.2); // 'hello' 1.2 decimal values truncated and converted to integer
	 ```
   - `repeat` repeats a given string 'n' number of times returning a new string as result
15. `replace`
	 
   - Parameter: substr, newSubstring, function
   - Return: return a new string w(string type)
	 ```js
	 let string = `dogs are lazy but cat aren't lazy`;
	 string.replace('lazy', 'active'); // "dogs are active but cat aren't lazy"
	 string.replace(lazy); // "dogs are undefined but cat aren't lazy" as there no replacement string lazy is removed and so it has undefined on its palce now
	 string.replace('are',`aren't`); // "dogs aren't lazy but cat aren't lazy"
	 ```
   - `replace` replaces the calling strings substr with the newsubstring passed as parameter and returns a new string by replacing only the first occurence of substr of calling string.
16. `slice`
	 
   - Parameter: beginIndex(number Type) , endIndex(optional, number Type) both can be negative or non-negative. If parameter is not a number then converted to '0'.
   - Return: returns a new string containing slice part(string type)
	 ```js
	 let str = 'Hello world';
	 str.slice(0); // 'Hello world'
	 str.slice(-5,-1); // 'word'
	 str.slice(-5,8); // 'wo'
	 ```
   - `slice` cuts out the part of a string between beginIndex and endIndex and returns it as a new string without changing the original state of the calling string.
17. `split`
	 
   - Parameter: separator(optional) - (string type or expression), limit(optional) - (number type)
   - Return: array of strings(object type)
	 ```js
	 let str = 'hello world';
	 str.split('',4); // ['h','e','l','l']
   str.split(); // ['hello world']
	 str.split('hello');  // ['', 'world']
	 ```
   - `split` returns an array of strings after searching for the given pattern in the calling string and divides the calling string on the basis of the pattern
18. `substring`
	 
   - Parameter: indexStart (number type), indeEnd(number type).
   - Return: returns new substring of the calling string
	 ```js
	 let str = 'hello world'
	 str.substring(); // 'hello world'
	 str.substring(0,3); // 'hel'
	 str.substring(5,0); // 'hello'
	 ```
   - `substring` is used to get a substring of the given pattern in the parameters and it returns a new array of the substring.
