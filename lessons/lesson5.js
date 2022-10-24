/* Lesson 5 - Functions & Scope */

/* Functions are the building block of JavaScript
They are considered first class objects. */
function simplefunction() {
    console.log("Hello JavaScript");
} // end function

/* This function returns a string */
function simplefunction2() {
    return 'Simple function 2 return';
} // end function

/* This function takes a parameter */
function simplefunction3(message) {
    console.log(message);
} // end function

/* Calling Functions above */
simplefunction();

let simple = simplefunction2(); 
console.log(simple);

console.log(simplefunction2());

simplefunction3('Simple Message 3')

simplefunction3(42);
 
/* Function Expression
Define a function inside an expression */
const squarefoot = function(length, width) {
    return length * width;
} // end function 

console.log(squarefoot(24,32));

/* Global scope */
/* Variables can have local or global scope. */
/* Global meaning everyone can see it vs local
which is contained within. */
function sample1() {
    able = 32; 
    let beta = 'Hello';
    console.log(beta);
} // end funtion

function sample2() {
    /* able has no defined declaration keyword
    therefore it is global. */
    console.log(able);

    console.log(beta);
} //end function

sample1();
// sample2();

/* Nested Function */
/* Funtion inside of functions. In netr function has
access to the outer function. The outer
funtion does not have access to the inner function scope. */
function outerScope(value1) {
    let charlie = 20;

    //Inner Function
    function innerScope() {
        let total = charlie + value1;
        console.log(total);
    } // end function

    // call innerScope function
    innerScope();

} // end function

outerScope(10);      

/* Closure */
/* A way for a function to have private
variables using an anonymous function
with a nested function. */
const addFive = function () {
    let total = 0;
    return function() {
        total += 5;
        return total;
     } // end inner function
}(); // end outer function

addFive();
addFive();
console.log(addFive());

/* default parameter */
/* Adding a default parameter to a funtion will
allow you to call that function and supply a value
for that parameter, or not */
function subtractThis(value4, value5 = 10) {
    return value4 - value5;
} // end function

/* Function called using both variables. The
default value in the parameter is ignored. */
console.log(subtractThis(15, 7));

/* Funtion called only supplying the first
value, which is used for the first parameter. The 
default parameter will be used since it was not
supplied when the function is called. */
console.log(subtractThis(34));

/* rest parameter */
/* Allows for an indefinite number of arguments as an array */
function groupSample(...args) {
    console.log(args);
}

/* Calling this function with a coma separated
set of information. This information is the arguments */
groupSample('Welcome' , 'to' , 'JavaScript', 10, 15, 20);

/* Arrow Functions */
/* A compact version of a function expression. */

/* Traditional Anonymous Function (Function Expression) */
const we = function(value) {
    return value + 100;
}

console.log(we(15));

/* Arrow function of the above function */
const me = value50 => value50 + 100;

console.log(me(15));

/* Traditional way - Two parameters */
const example2 = function(num1, num2) {
    return num1 + num2;
} // end function

/*Arrow function version of above */ 
const example2b = (num3, num4) => num3 + num4;

console.log(example2(23,64));
console.log(example2b(23,64));

/* Traditional way - No parameters */
const example3 = function() {
    return 10 + 5;
} // end function

/* Arrow function version of above */
const example3b = () => 10 + 5;

console.log(example3());
console.log(example3b());

