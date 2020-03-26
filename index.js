console.log("This is a place of JavaScript");

var number = 5; // This is an in-line comment

/* this is how you write a
multi-line comment
 */

number = 9;

/* "var" can be used throughout the whole program
"let" will only be used within the scope of where it is declared
"const" is a variable that will never change
 */

/* Declaring vs. assigning */
var a; // Here, a variable is declared to be 'a';

console.log(a); /* Here, when we console.log(a), we get a value of 'undefined', that is because at this point in the code,
the variable 'a' has been declared, but it has not been assigned a value */

var b = 2; // Here, a variable is declared to be 'b' and is being assigned '2' with the equals sign.

a = 7; // Here, the variable 'a' is being assigned 7, this is because we have previously declared 'a' as a variable.

b = a; // Here, we have assigned the value of 'b' to be equal to a; so currently, b would be assigned a value of 7.

console.log(a); // Here, 'console.log(a)' is going to have a value of '7' because that is where it has been declared.

// Initializing three variables

var a2 = 5;

var b2 = 10;

var c2 = "I am a"; // When initializing a string, remember to place quotation marks around said string.

// We can edit the values of the variable within themselves like so:

console.log("EDITING VARIABLES");

a2 = a2 + 1;
console.log(a2);

b2 = b2 + 5;
console.log(b2);

c2 = c2 + " String :)";
console.log(c2);

// Number Operators

console.log("NUMBER OPERATORS");

var sum = 2 + 3;

console.log("The sum of 2 and 3 is", sum);

var difference = 10 - 2;

console.log("The difference of 10 and 2 is", difference);

var product = 2 * 3;

console.log("The product of 2 and 3 is", product);

var quotient = 8 / 4;

console.log("The quotient of 8 and 4 is", quotient);

myNumber = 10;

myNumber++; // You can add 1 (increment) to a variable by adding "++" at the end of the variable;

console.log("This value used to be 10, but by adding an increment, it is now:", myNumber);

myNumber--;

console.log("Same as above but a decriment, so now instead of 10, it is still:", myNumber);

myNumber--;

console.log("The value of myNumber is still being kept in memory, so in order to get to a value of 9 we have to decrement twice, like so:", myNumber);

console.log("A quick note when console logging, a space is automatically added to the end of the console log if we are logging more than one thing, in order to remove it we need to add a '+', after the initial declaration in the log, like so:"+ myNumber);

// About Decimal Numbers, IE floats

var flProduct = 2.0 * 2.6;

console.log("This is a float", flProduct);

/* About the remainder operator
 The remainder operator is '%' and it gives us the remainder of two numbers.
 for instance 11 divided by three gives us an even 9 with a remainder of two
 This is often used to determine whether a number is even or odd.
 */


var remainder;

myRemainder = 11 % 3;

console.log("With the remainder (%) operator, we get the remainder of two numbers divided, for instance the remainder of 11 divided by 3 (11 % 3) is:", myRemainder);

// About the += operator

var a3 = 3;

a3 += 12; //This is a shorthand version of writing 'a3 = a3 + 12;

console.log("This is our shorthand version of adding 12 to the variable a3's current value which was assigned as 3:", a3);

a3 -= 11;

console.log("Same as above but with a '-=' operator so: 15 - 11 is", a3);

// Practicing using string variables

var myFirstName = "Here is \"a double quoted string\" if you type in a backslash '\\' it will ignore the quotation mark as a non string";

console.log(myFirstName);

console.log("To get the backslash '\\' to display via the console log, you can type in two in a row '\\\\' this is because the escape character ignore the function of the next character");
console.log("so if you type in two back-slashes '\\' the first backslash causes the second backslash to ignore it's usage and it is printed as part of the string.");

/* ]
 About single quote characters
 If you have your string surrounded by single quotes('), you can just add in double quotes ("),
 or if you use backticks((`)this key is located on the upper left side of keyboard) you can put both double and single quotes inside of a string.
 */

/**
 HERE ARE SOME ESCAPE CHARACTERS
 CODE    OUTPUT
 \'		single quote
 /"		double quote
 \\		backslash
 \n		newline
 \r		carriage return
 \t		tab
 \b		backspace
 \f		form feed
 **/

console.log("what happens if I enter the newline \nand then I type more text?");

var myEscExample = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(myEscExample);

// Concantinating strings

// We can concatenate strings by adding a plus.

console.log('"console.log("Here is a str" + "ing")" Becomes:');

console.log("Here is a str" + "ing");