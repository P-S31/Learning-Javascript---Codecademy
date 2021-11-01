// Built -in Objects:
/* In addition to console, there are other objects built into JavaScript.Down the line, you’ll build your own objects, but for now these “built -in” objects are full of useful functionality.
For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built -in Math object.
The great thing about objects is that they have methods! Let’s call the.random() method from the built -in Math object:
*/
console.log(Math.random()); // Prints a random number between 0 and 1 

//EXAMPLE:

Math.floor(Math.random() * 50);
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

/*Q1 Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
Q2 Now, use Math.floor() to make the output a whole number.Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().
Q3 Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.Use this method with the number 43.8.Log the answer to the console.
Q4 Use the JavaScript documentation to find a method on the built -in Number object that checks if a number is an integer.Put the number 2017 in the parentheses of the method and use console.log() to print the result. 
*/

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100);
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));