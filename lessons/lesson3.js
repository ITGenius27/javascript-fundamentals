/* Lesson 3 - All about Strings */

// Declare a string using double quotes
let canineType = "Dog";
let canineAction = "They bark loudly.";

//Declare a string using single quote
let felineType = "Cat";
let felineAction = "They meow quietly."

/* Using Bracket Notation on a variable of string 
will output 1 character, or undefine. */
console.log(canineType[3]);

console.log(felineAction[1]);

// empty space
console.log(canineAction[4]);

console.log(felineType[0]); 

//A long sentence using the + operator
let longSentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
" In volutpat dignissim elit sed dignissim." + 
" Nam molestie congue leo, ac ultricies magna pharetra mattis." +
" Ut cursus commodo sem ac tempus." +
" Nam euismod dolor eget lacus tincidunt blandit." +
" Donec dui leo, gravida sit amet consectetur a, gravida in quam.";

//A long sentence usint the \ character
let longSecond = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
 In volutpat dignissim elit sed dignissim. \
 Nam molestie congue leo, ac ultricies magna pharetra mattis. \
 Ut cursus commodo sem ac tempus. \
 Nam euismod dolor eget lacus tincidunt blandit. \
 Donec dui leo, gravida sit amet consectetur a, gravida in quam.";

 /* Using + to concatenate multiple strings or other primitives
 together to create a new string*/
 let alpha = 'Hello ';
 let beta = 'World';

 let combine1 =alpha + beta;
 console.log(combine1);

 let combine2 = alpha + 42;
 console.log(combine2);

 let combine3 = 'The ' + beta + ' is vast.';
 console.log(combine3);

 const VALUE1 = 10;
 const VALUE2 = 20;

 // Concatenation using an Expression
 console.log('Thirty is ' + (VALUE1 + VALUE2) + ' and not ' +
 (2 * VALUE1 + VALUE2));

// Placeholder syntax using an Expression
console.log(`Thirty is ${VALUE1 + VALUE2} and not ${2 * VALUE1 + VALUE2}`);

// More Placeholders
console.log(`Here are more ${combine1} , ${combine2}`);

console.log(`Canines are ${canineType}. ${canineAction}`);

//single character from a UTF-8 Character set
let letter = '\u00A9';
console.log(letter);

//Escape Sequences
let phrase = 'My name is Roger O\'Dell.\tHow are\n you doing today?';
console.log(phrase);

let phrase2 = 'lets try    \\something \0';
console.log(phrase2);


// length of a string using the length property
let example_length = 'Loren ipsum dolor sit amet';
console.log(example_length.length);

let msg = ' Hello World ';

// Instance Methods

/* The at() method returns the character at a specified index
it will accept negative integers (number) which could back
from the last character in the string. This last position starts
at -1 and not at 0. */
console.log(msg.at(-2));
console.log(msg.at(4));

/* The charAt() method returns the character at a specified index.
This is the same as bracket notation. */
console.log(msg.charAt(2));

/* The concat() method combines 2 or more strings. */
console.log(msg.concat('', beta));

/* The includes() method determines if a searched value is in
a variable of string. It will return either true or false. */
console.log(longSentence.includes('lor'));

/* indexOf() method returns the index number of the
first occurence of searched value. */
console.log(msg.indexOf('o'));

/* slice() will return a new string based on an
index range of the original string. */
console.log(msg.slice(2, 5));
console.log(msg.slice(3));

/* The split() method divides a string into a list of
substrings based on a pattern and puts those substrings
into an array (a list) */
let word = msg.split(' ');
console.log(word);
console.log(word[2]);

/* The toLowerCase() method returns the strings with all
characters in lowercase. */
console.log(msg.toLowerCase());

/* The toUpperCase() method returns the string with all
characters in uppercase */
console.log(msg.toUpperCase());

/* The trim() method removes the empty spaces from the
beginning and the end of a string. */
console.log(msg.trim());

/* The trimStart() method removes the empty spaces from the beginning. */
console.log(msg.trimStart());

/* The trimEnd() method removes the empty spaces from the end. */
console.log(msg.trimEnd()); 
