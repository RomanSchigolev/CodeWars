# Solutions of tasks from the CodeWars platform

## [Categorize New Member](https://github.com/RomanSchigolev/CodeWars/tree/master/categorize%20new%20member)

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

*Input*<br/>
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

**Example Input**<br/>
`[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]`<br/>

*Output*<br/>
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

**Example Output**<br/>
`["Open", "Open", "Senior", "Open", "Open", "Senior"]`<br/>
---

## [Friend or Foe](https://github.com/RomanSchigolev/CodeWars/tree/master/friend%20or%20foe)

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = `["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]`</br>

i.e.

friend `["Ryan", "Kieran", "Mark"]` should be `["Ryan", "Mark"]`
Note: keep the original order of the names in the output.</br>
---
