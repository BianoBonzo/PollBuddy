# Pollbuddy - JavaScript and React

This is the documentation of my progress on learning JavaScript and React over the course of working on this project.  
For JavaScript, I used this website: [https://www.w3schools.com/js/DEFAULT.asp](https://www.w3schools.com/js/DEFAULT.asp)   
For React, I used [https://www.codecademy.com/learn/react-101](https://www.codecademy.com/learn/react-101)

## JavaScript

1. `getElementById()` is a common HTML method in JavaScript. The parameter of the method is the name of an HTML element. This method can be used to change the content of an HTML element through its innerHTML tag. For instance, let's say there's an HTML element showing a picture of a cow, with the id `cowImage`

```bash
<img id="cowImage" src="cow.gif" style="width:100px">
```
- By using `getElementById()`, you can change the content of `cowImage` to another image entirely.   

```bash
document.getElementById('cowImage').src='buffalo.gif'
```