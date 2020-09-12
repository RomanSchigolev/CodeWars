# Solutions of tasks from the CodeWars platform

## [Categorize New Member](https://github.com/RomanSchigolev/CodeWars/blob/master/categorize%20new%20member/categorize_new_member.js)

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

**Input:**<br/>
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

**Example Input:**<br/>
`[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]`<br/>

**Output:**<br/>
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

**Example Output:**<br/>
`["Open", "Open", "Senior", "Open", "Open", "Senior"]`<br/>

---

## [Friend or Foe](https://github.com/RomanSchigolev/CodeWars/blob/master/friend%20or%20foe/friendsOrFoe.js)

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = `["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]`<br/>

i.e.

friend `["Ryan", "Kieran", "Mark"]` should be `["Ryan", "Mark"]`<br/>

Note: keep the original order of the names in the output.</br>

---
## [Regex validate PIN code](https://github.com/RomanSchigolev/CodeWars/blob/master/regex%20validate%20PIN%20code/regex_validate_pin_code.js)

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

```
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
```

---
## [Isograms](https://github.com/RomanSchigolev/CodeWars/blob/master/Isograms/Isograms.js)

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

Implement a function that determines whether a string that contains only letters is an isogram. 

Assume the empty string is an isogram. 

Ignore letter case.

```
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
```

---
## [Counting Duplicates](https://github.com/RomanSchigolev/CodeWars/blob/master/Counting%20Duplicates/counting_duplicates.js)

**Count the number of Duplicates**

Write a function that will return the count of **distinct case-insensitive** alphabetic characters and numeric digits that occur more than once in the input string. 

The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

**Example:**
```
"abcde" -> 0 # no characters repeats more than once

"aabbcde" -> 2 # 'a' and 'b'

"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

"indivisibility" -> 1 # 'i' occurs six times

"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice

"aA11" -> 2 # 'a' and '1'

"ABBA" -> 2 # 'A' and 'B' each occur twice
```

---
## [Descending Order](https://github.com/RomanSchigolev/CodeWars/blob/master/Descending%20Order/descending_order.js)

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. 

Essentially, rearrange the digits to create the highest possible number.

**Examples:**
```
Input: 21445; Output: 54421

Input: 145263; Output: 654321

Input: 123456789; Output: 987654321
```

---
## [Vowel Count](https://github.com/RomanSchigolev/CodeWars/blob/master/Vowel%20count/vowel_count.js)

Return the number (count) of vowels in the given string.

We will consider ***a, e, i, o,*** and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

---

## [Split Strings](https://github.com/RomanSchigolev/CodeWars/blob/master/split%20strings/splitString.js)

Complete the solution so that it splits the string into pairs of two characters. 

If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

**Examples:**
```
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
```

---

## [Write Number in Expanded Form](https://github.com/RomanSchigolev/CodeWars/blob/master/Write%20Number%20in%20Expanded%20Form/Number.js)

You will be given a number and you will need to return it as a string in Expanded Form. For example:

```
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
```
NOTE: All numbers will be whole numbers greater than 0.

---

## [Find the unique number](https://github.com/RomanSchigolev/CodeWars/blob/master/Find%20the%20unique%20number/uniqueNumber.js)

There is an array with some numbers. All numbers are equal except for one. Try to find it!

```
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
```
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

---

## [Who likes it?](https://github.com/RomanSchigolev/CodeWars/blob/master/Who%20likes%20It/likeIt.js)

You probably know the "like" system from Facebook and other pages. 

People can "like" blog posts, pictures or other items.

We want to create the text that should be displayed next to such an item.

Implement a function `likes :: [String] -> String`, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

```
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
```
For 4 or more names, the number in ***and 2 others*** simply increases.

---

## [CamelCase Method](https://github.com/RomanSchigolev/CodeWars/blob/master/CamelCase%20Method/camelCase.js)

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 

All words must have their first letter capitalized without spaces.

**For instance:**
```
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
```

---

## [Adding Big Numbers](https://github.com/RomanSchigolev/CodeWars/blob/master/Adding%20Big%20Numbers/sum.js)

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. 

The input numbers are strings and the function must return a string.

**Example:**
```
add("123", "321"); -> "444"
add("11", "99");   -> "110"
```
**Notes:**

* The input numbers are big.
* The input is a string of only digits
* The numbers are positives

---

## [RGB to HEX Convesrion](https://github.com/RomanSchigolev/CodeWars/blob/master/RGB%20to%20HEX/rgbToHex.js)

The rgb function is incomplete. 

Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 

Valid decimal values for RGB are 0 - 255. 

Any values that fall out of that range must be rounded to the closest valid value.

**Note:** Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:
```
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```

---

## [Find the unique number-2](https://github.com/RomanSchigolev/CodeWars/blob/master/Find%20the%20unique%20number-2/uniqueNumber.js)

Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. 

The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. 

The array contains at least one number and may contain millions of numbers. 

So make sure your solution is optimized for speed.

**Example Input:**

`[ 1, 8, 4, 4, 6, 1, 8 ]`<br/>

**Expected output:**

`6`

---

## [Shortest Word](https://github.com/RomanSchigolev/CodeWars/blob/master/shotest%20word/shortest_word.js)

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

**Example:**
```
Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
});
```
---

## [Build String](https://github.com/RomanSchigolev/CodeWars/blob/master/buildString/index.js)

We have an input object whose keys are characters, and the values are the position of these characters in the final line. 

There are no omissions among the numbers.

**Example:**
```
const obj = {
  ' ': [6],
  ',': [5],
  d: [11],
  e: [1],
  H: [0],
  l: [2, 3, 10],
  o: [4, 8],
  r: [9],
  w: [7]
};

buildString(obj) -> Hello, world
buildString2() -> ""
```
---

## [The intersection of arrays](https://github.com/RomanSchigolev/CodeWars/blob/master/IntersectionOfArrays/index.js)

The intersection of two arrays A and B is an array with only those elements A and B that simultaneously belong to both arrays, without duplicates.

Arrays are not sorted.

**Example:**
```
const arr1 = [14, 14, 8, 8, 3, 11, 7, 17, 4, 0, 5];
const arr2 = [14, 18, 14, 8, 8, 3, 2, 14, 19, 2];

IntersecArrays(arr1, arr2) -> [ 14, 8, 3 ]
```
---

## [Moving Zeros To The End](https://github.com/RomanSchigolev/CodeWars/blob/master/MovingZerosToTheEnd/index.js)

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

**Example:**
```
moveZeros([false,1,0,1,2,0,1,3,"a"]) -> [false,1,1,2,1,3,"a",0,0]
```
---

## [Scramblies](https://github.com/RomanSchigolev/CodeWars/blob/master/Scramblies/index.js)

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

**Notes:**

* Only lower case letters will be used (a-z). No punctuation or digits will be included;

* Performance needs to be considered.

Input strings s1 and s2 are null terminated.

**Examples:**
```
scramble('rkqodlw', 'world') -> True
scramble('cedewaraaossoqqyt', 'codewars') -> True
scramble('katas', 'steak') -> False
```
---

## [Human Readable Time](https://github.com/RomanSchigolev/CodeWars/blob/master/HumanReadableTime/index.js)

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

* HH = hours, padded to 2 digits, range: 00 - 99;
* MM = minutes, padded to 2 digits, range: 00 - 59;
* SS = seconds, padded to 2 digits, range: 00 - 59.

The maximum time never exceeds 359999 (99:59:59).

You can find some examples in the test fixtures.

---

## [New Cashier Does Not Know About Space or Shift](https://github.com/RomanSchigolev/CodeWars/blob/master/New%20Cashier%20Does%20Not%20Know%20About%20Space%20or%20Shift/index.js)

Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

```
1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
```

**Example:**
```
Input: getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
Output: "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
```

---

## [Return a string's even characters](https://github.com/RomanSchigolev/CodeWars/blob/master/Return%20a%20string's%20even%20characters/index.js)

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 

If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

**Example:**
```
"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
```

---

## [Difference in arrays](https://github.com/RomanSchigolev/CodeWars/blob/master/Difference%20in%20arrays/index.js)

Implement a function that finds the difference in arrays and returns it.

The order of returned elements is not important

**Example:**
```
arrayDifference1(['javascript', 'is', 'awesome'], ['javascript', 'awesome']) => ['is']
arrayDifference1([1, 2, 3, 4, 5], [3, 4, 2, 7]) => [1, 5, 7]
```