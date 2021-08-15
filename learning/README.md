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

6. You can use parentheses to determine whether an expression is true or false, such as `(5 < 10)`. Every value that's not a boolean expression is false. For instance:  
```bash
let x = "";
Boolean(x);       # False
let y = 0;
Boolean(y);       # False
```
- You can create boolean objects using the `new` keyword, such as `let x = new Boolean(true);` JavaScript also contains conditional statements, where you can set the value of a variable depending on a certain condition: 

```bash
let foo = (x < 10) ? "Less Than" : "Greater Than";
```
7. You can get the data type of a variable using the `typeof` keyword. The data types are returned as Strings. It's important to note the data types of more complex elements in JavaScript. For instance, NaN is a number. The data type of arrays, dates, and nulls are objects. Furthermore, an `undefined` data type exists for undefined variables. 

- JavaScript contains a unary + operator that can convert variables to different data types. For instance: 

```bash
let g = "100";      # y is a string
let h = + g;        # h is now a number
let s = "John";     # s is a string
let t = + s;        # x is now a number (NaN)
```
- You can convert booleans to numbers. `Number(false)` returns 0 while `Number(true)` returns 1. When you output a variable, JavaScript automatically calls the variable's `toString()` method.

8.  JavaScript contains `try`, `catch`, and `finally` blocks similar to Java. There a couple of common errors in JavaScript to look out for and deal with. For instance, the `RangeError` if a number is used outside of its legal values. For instance, if you declare a number with only two digits, you cannot set the number of digits of the variable to 100. 

```bash
let foo = 12;
try {
  foo.toPrecision(100);  
}
catch(err) {
  doc.getElementById("error").innerHTML = err.name;
}
```
- A `ReferenceError` occurs when an unknown reference to a variable that doesn't exist is used. `SyntaxError` occurs when improper JavaScript syntax exists in the source code. `TypeError` occurs when you use an operator or method on a variable that is the incorrect data type. 

## React
1. Reacts uses a syntax extension for JavaScript code called `JSX`, which looks similar to HTML. Units are called `JSX elements`. These are essentially HTML code snippets that are placed inside of JavaScript files. An example is `<p>Hello world</p>`. These elements can be stored as variables. For instance, JSX elements can be stored as fields of an object. 

```bash
const drinks = {
  carbonated: <li>Pepsi</li>,
  sweet: <li>Apple Juice</li>,
  sour: <li>Lemonade</li>,
  bitter: <li>Coffee</li>,
  salty: <li>River</li>
};
```
- JSX elements can have attributes, similar to HTML. These attributes are defined within the symbols in the HTML syntax. 

```bash
const p1 = <p id='large'>foo</p>
const p2 = <p id='small'>bar</p>
```
- JSX elements can be nested inside of other JSX elements 

```bash
const myDiv = (
  <div>
    <h1>
      Hello world
    </h1>
  </div>
);
```
- You render JSX expressions using the built in `ReactDOM` JavaScript library. You use `ReactDOM.render()`, where the first argument is a JSX expression and the second argument is a JSX element that serves as a container for the first argument. Below is an example where you can put two lines of text on an HTML page with an HTML element with the id `app`

```bash
import React from 'react';
import ReactDOM from 'react-dom';

const myText = (
  <ul>
    <li>This is</li>
    <li>the Beginning!</li>  
  </ul>
);

ReactDOM.render(
  myText, 
  document.getElementById('app')
); 
```

2. `class` is still a keyword in JavaScript, so you can't use that word as an attribute in React. There are certain self-closing tags in HTML, where you need cannot leave out a forward slash in React source code. For instance, `<img>` and `<br>` are not acceptable in JSX. Instead, you do `<img />` and `<br />`.

- To do an arithmetic operation in a JSX element, you have to use curly braces for an HTML page to show the proper result. For instance, in the code snippet below, without the curly braces, the HTML page will show `2 + 3`. With the curly braces, it shows `5` instead. 

```bash
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
```
- You can also use the curly braces to call JavaScript variables or JavaScript functions in React code, such as in the first argument of `ReactDOM.render()` or attribute values. JSX also has the conditional operator `?`

```bash
const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
```
- You can use the `&&` operator and brackets to ensure that an element only appears if a certain condition is true, such as `{ !fullStomach && <li>Pickle Jar</li>}`. Furthermore, React has an array `.map()` method that allows you to create a list of JSX elements. 
```bash
const classmates = ['Jason', 'Grant', 'Tony'];

const classList = classmates.map(classmate =>
  <li>{classmate}</li>
);
```

- You can also give unique keys to each JSX element like this: 
```bash
const const classmates = ['Jason', 'Grant', 'Tony'];

const classList = classmates.map((classmate, i) =>
  <li key={'classmate_' + i}>{classmate}</li>
);
```