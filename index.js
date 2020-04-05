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

var myStr = "This is my string ";

myStr += "we are going to concantinate the string with an operator";

console.log(myStr);

// Finding the length of a string.
// we can use the .length property.

var exampleStrLength = 0;
var myExampleStr = "Working From Home";

exampleStrLength = myExampleStr.length;

console.log(exampleStrLength);

// About bracket notation, remember that bracket notation starts at 0, this is called "zero based indexing"

firstLetterOfStr = myExampleStr[0];

console.log(firstLetterOfStr);

// We can find the last letter of a given string even without knowing the length of said string by placing the variable inside of a bracket with .length - 1 inside said bracket.
firstLetterOfStr = myExampleStr[myExampleStr.length - 1];

console.log(firstLetterOfStr);


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

	var wordGame = "";

	wordGame += "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + "alone" + " " + myAdverb;

	return wordGame;
}
console.log(wordBlanks("Cat","orange","jumped", "quickly"));

// Working with arrays

var testArray = ["Sean", 32];

// Nested Arrays, an array within an array

var testNest = [["First Element", 1], "Another Array", 23];

fromArray = [12,32,44];
var theData = fromArray[0];

console.log(fromArray[0]);

// Modifying arrays with indexes

fromArray[0] = 45; //Here we reassign index 0 fromArray and change it to 45, it was previously 12.

console.log(fromArray);

// Pulling from nested array
//Array:					0			1				2
var arrayArray = [[1,2,3],[10,11,12],[100,200,300]];
//Element:			0	1	2	0	1	2		0	1	2

// When selecting indexes from nested arrays, the first index refers to which array within the nested array that we are pulling from.
// The second number refers to which element from within the array that we need to choose.
var dataArray = arrayArray[1][2];

console.log(dataArray);

//Amend data to the end of an array with the "push" function.

var array4push = [["Janet", 42],["Elephant", 63]];

array4push.push(["Example", 9000]);

console.log(array4push);

// The .pop function removes the final element from the array.
array4push.pop();

console.log(array4push, "We removed the last array with our .pop function.");

// The .shift function removes the first element of the array.

array4push.shift();

console.log(array4push, "We have removed the first array");

array4push.unshift("We just added this string to the beginning of our array.");

console.log(array4push);

