# Pollbuddy - JavaScript and React

This is the documentation of my progress on learning JavaScript and React over the course of working on this project.  
For JavaScript, I used this website: [https://www.w3schools.com/js/DEFAULT.asp](https://www.w3schools.com/js/DEFAULT.asp)   
For React, I used [https://www.codecademy.com/learn/react-101](https://www.codecademy.com/learn/react-101)

## JavaScript

1. `getElementById()` is a common HTML method in JavaScript. The parameter of the method is the name of an HTML element. 
This method can be used to change the content of an HTML element through its innerHTML tag. For instance, let's say there's an 
HTML element showing a picture of a cow, with the id `cowImage`

```bash
<img id="cowImage" src="cow.gif" style="width:100px">
```
- By using `getElementById()`, you can change the content of `cowImage` to another image entirely.   

```bash
document.getElementById('cowImage').src='buffalo.gif'
```

2. JavaScript code can be placed inside of the head or body of an HTML page. You can also put JavaScript code in 
an external source code file, where the HTML page can call that file. This method is more efficient, because it reduces 
page loading time, and it makes code maintenance and debugging easier. Scripts can be added to an HTML page like this 

```bash
<script src="script1.js"></script>
<script src="src/main/jScript/script2.js"></script>
```
- JavaScript has a few keywords that are different than other programming languages. 'The keyword `var` is how you 
declare single variables in JavaScript. Furthermore, `let` declares a block variable, meaning it allows you to define 
multiple variables or use multiple variables in an operation, such as `let a = b + c`. Variables that are declared with `let` 
can't be redeclared; you can't change its value like variables using `var`. You can only "change" the value of a `let` variable 
in a block, but it doesn't change its overall value outside of the block. 

```bash
let a = 100; // a is 100 
{
let a = 1; // a is 1 inside of this block 
}
// a is still 100 here 
```

3. You define functions using the `function` keyword. Similar to Python, you don't need to declare variable types for the parameters. You can create and define objects like this: 
```bash
const building = {
  owner: "Johnson",
  height: 125,
  cost: 125000,
  color: "grey"
};
```
- JavaScript objects use name-value pairs, and each of these elements are called properties. You can access an object's property via `building.owner` or `building[cost]`. You can also define methods inside of the object. 

```bash
const building = {
  owner: "Johnson",
  height: 125,
  cost: 125000,
  getComponentCost : function() {
    return cost / height;
  }
};
```

4. In JavaScript, you can add integers and Strings together to make new Strings similar to Java. Some of the more unique and interesting methods you can use in JavaScript are `toFixed()`, which rounds a decimal number to a specific digit, and `Number()`, which can covert other JavaScript variables to numbers. 
- Arrays can be initialized like this: 
```bash
const food = [
  "Burger",
  "Apple",
  "Rice"
];
```
- Alternatively, you can initialize an array with one line:
```bash
const food = new Array("Burger", "Apple", "Rice");
```
- You add elements to the end of the array via `array.push()`. You can remove the last element of an array using `array.pop()`. Furthermore, you can remove the first element of an array with `array.shift()`. With an array of strings, you can join all of the elements together into one string with another String using `array.join()`.
```bash
food.join(" - ");
# Result -> "Burger - Apple - Rice"
```
- JavaScript has a few convenient methods for changing the order of elements in an array. The basic methods are `array.sort()` and `array.reverse()`, which reverses the elements of the array. You can also define your own sorting criterion by creating a new function inside of the sort method parameter: 
```bash
const nums = [76, 80, 14, 3, -7, 203];
nums.sort(function(a, b){return a - b});
```
5. `Date` objects allow a browser to display time. Below are three different ways to create `Date` objects
```bash
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```
- The most common way is the second method. You can change the number of parameters to determine how you want to format the time for the object. There are multiple different formats for dates. One is the ISO format, such as `2017-07-14`. Another format is Short Date, which uses slashes like `2013/11/28`. The final format is Long Date, written like `Mar 12 2024`. You can use `Date.parse()` to convert the time between a date string and January 1, 1970 to milliseconds. You can then use the milliseconds to covert it into a `Date` object. 

```bash
let msecs = Date.parse("December 19, 2019");
const d = new Date(msecs);
document.getElementById("front").innerHTML = d;
```