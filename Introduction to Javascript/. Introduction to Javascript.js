// Console:
// console.log();

Use the console.log code in the editor to log your age to the console.
        console.log(6 + 6); 

On the next line, write another console.log to print out a different number representing the number of weeks you’ve been programming.
        console.log(1);

Comments:
// or /* */
A single line comment will comment out a single line and is denoted with two forward slashes // preceding it. 
For Example:
// Prints 5 to the console
console.log(5);
        
A multi - line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.
For Example: /*
            This is all commented 
            console.log(10);
            None of this is going to run!
            console.log(99);
            */ 
You can also use this syntax to comment something out in the middle of a line of code:
For Example:
console.log(/*IGNORED!*/ 5);  // Still just prints 5 

Data Types:
Examples ==

        Number: console.log(2011);
String: console.log('Javascript');
Boolean: true or false(yes or no questions)
Null: Absence of a value meaning 0
Undefined: This data type is denoted by the keyword undefined(without quotes).It also represents the absence of a value though it has a different use than null.
        Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding.No need to worry about these for now
    // First 6 are primitive data types
   
  Object: Collections of related data.

        Q1.Log the string 'JavaScript' to the console.
                Q2.Log the number 2011 to the console.
                        Q3.Print 'Woohoo! I love to code! #codecademy' to the console.
                                Q4.Print the number 20.49 to the console.

                                        A1.console.log('JavaScript');
A2.console.log(2011);
A3.console.log('Woohoo! I love to code! #codecademy');
A4.console.log(20.49);


Arithmetic Operators
An operator is a character that performs a task in our code.JavaScript has several built -in arithmetic operators, that allow us to perform mathematical calculations on numbers.These include the following operators and their corresponding symbols:

Add: +
        Subtract: -
                Multiply: *
                        Divide: /
Remainder: %

        Q1 Inside of a console.log(), add 3.5 to your age.This is the age you’ll be when we start sending people to live on Mars.
Q2 On a new line write another console.log().Inside the parentheses, take the current year and subtract 1969. The answer is how many years it’s been since the 1969 moon landing.
Q3 Create another console.log().Inside the parentheses divide 65 by 240. 
Q4 Create one last console.log().Inside the parentheses, multiply 0.2708 by 100. That’s the percent of the sun that is made up of helium.Assuming we could stand on the sun, we’d all sound like chipmunks!

A1 console.log(27 + 3.5); 30.5
A2 console.log(2021 - 1969); 52
A3 console.log(65 / 240); 0.2708333333333333
A4 console.log(0.2708 * 100); 27.08


String Concatenation:
Operators aren’t just for numbers! When a + operator is used on two strings, it appends the right string to the left string:
EXAMPLE:
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
    // Prints 'I love to code.'
    
Q1 Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'. 
Q2 We left off the space last time.Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space(' ') between the two words.
A1 console.log('Hello' + 'World'); 
A2 console.log('Hello' + ' ' + 'World');


Properties:
console.log('Hello'.length); // Prints 5
The(dot).is another operator! We call it the dot operator.

In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'.The program prints 5 to the console, because Hello has five characters in it.

Q1 Use the.length property to log the number of characters in the following string to the console: 'Teaching the world how to code'
A1 console.log('Teaching the world how to code'.length);


Methods:
Remember that methods are actions we can perform.JavaScript provides a number of string methods.We call, or use, these methods by appending an instance with:
- a period(the dot operator)
        - the name of the method
                - opening and closing parentheses
        
        For EXAMPLE: 'example string'.methodName().
        For EXAMPLE: console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
                      
                     
Q1 Use the.toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.
Q2 In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.If we browse the JavaScript string documentation(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim(). Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.

        A1 // Use .toUpperCase() to log 'Codecademy' in all uppercase letters
        console.log('Codecademy'.toUpperCase());
A2 // Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());



Built -in Objects:
In addition to console, there are other objects built into JavaScript.Down the line, you’ll build your own objects, but for now these “built -in” objects are full of useful functionality.
For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built -in Math object.
The great thing about objects is that they have methods! Let’s call the.random() method from the built -in Math object:
console.log(Math.random()); // Prints a random number between 0 and 1 
EXAMPLE:
Math.floor(Math.random() * 50);
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
        
Q1 Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
Q2 Now, use Math.floor() to make the output a whole number.Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().
Q3 Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.Use this method with the number 43.8.Log the answer to the console.
Q4 Use the JavaScript documentation to find a method on the built -in Number object that checks if a number is an integer.Put the number 2017 in the parentheses of the method and use console.log() to print the result. 

A1 console.log(Math.random() * 100);
A2 console.log(Math.floor(Math.random() * 100);
A3 console.log(Math.ceil(43.8));
A4 console.log(Number.isInteger(2017));

Review
Let’s take one more glance at the concepts we just learned:

Data is printed, or logged, to the console, a panel that displays messages, with console.log().
We can write single - line comments with // and multi-line comments between /* and */.
There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
Numbers are any number without quotes: 23.8879
Strings are characters wrapped in single or double quotes: 'Sample String'
The built -in arithmetic operators include +, -, *, /, and %.
Objects, including instances of data types, can have properties, stored information.The properties are denoted with a.after the name of the object, for example: 'Hello'.length.
        Objects, including instances of data types, can have methods which perform actions.Methods are called by appending the object or instance with a period, the method name, and parentheses.For example: 'hello'.toUpperCase().
We can access properties and methods by using the., dot operator.
        Built -in objects, including Math, are collections of methods and properties that JavaScript provides.












