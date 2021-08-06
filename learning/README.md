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