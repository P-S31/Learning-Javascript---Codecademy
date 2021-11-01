// Properties:
console.log('Hello'.length); // Prints 5
// The . is another operator! We call it the dot operator.

// In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'.The program prints 5 to the console, because Hello has five characters in it.

// Q1 Use the.length property to log the number of characters in the following string to the console: 'Teaching the world how to code'
console.log('Teaching the world how to code'.length);


// Methods:
//Remember that methods are actions we can perform.JavaScript provides a number of string methods.We call, or use, these methods by appending an instance with:
// - a period(the dot operator)
// - the name of the method
// - opening and closing parentheses

//For EXAMPLE: 
'example string'.methodName().


    console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true


//Q1 Use the.toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.

//Q2 In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.If we browse the JavaScript string documentation(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim(). Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.

// A1 Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// A2 Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());