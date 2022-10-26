/* Lesson 8 - Looping Statments */

/*
Most loos have 3 key factors
1.An Initialized value -This is a variable
that is not set to 0.
2. The condition - Typically a comparion operaor that
evaluates to either true or false.
3. The Increment or decremnt - This is used
to increase or decrease the value of the initilized variable.
*/

/* While loop */
/* his loop will continue as long as the condition is true.
Thecondition is checked before the body of the loop is executed */
function whileExample() {
    let value = 0;
    while(value < 10) {
        console.log(value);
        value++;
    } //end function
} //end function

whileExample();

/* Do While loop */
/* This loop will begin by executing the block of code once.
Then, the condition is checked. If the condition is true,
the loopwill continue until the condition is false. */
function doWhileExample() {
    let num = 0;
    do {
        console.log(num);
        num++;
    } while(num < 5)
    // end do while

} // end function

doWhileExample();

/* for loop */
/* A more compact way to loop that uses the 3 key factors */
function forExample() {
    for( let index = 0; index <= 7; index++) {
        console.log(`Number is ${index}`);
    } //end for loop
} //end function

forExample();

/* Display the even numbers from 0 to 20 */
function evenNumbers() {
    for(let num2 = 0; num2 <= 20; num2++) {
        
        if (num2 % 2 == 0) {
            console.log('${num2} is even.');
      
        }
    } //end for
} //end function

evenNumbers();

/* break and continue statements*/
function exampleBreakContinue() {
 
    for(let i =0; i < 10; i++) {
        if(i=== 2) {
            continue;
        } //end if

        if(i===7) {
            console.log('Loop breaks');
        break;
        } //end if
        console.log(i)
    } // end for loop
    console.log('Loop ends');
} // end function

exampleBreakContinue();

/* Label statement */
/* Alabel provides an identifier for a statement */
function exampleLabel() {
    let value2 = '';

    myLabel:
    for(let i = 0; i < 30; i++) {
        if(i % 2 == 0) {
            continue myLabel;
        } //end if

        value2 += (`${i},`);
    } // end for loop

    console.log(value2);

} // end function

exampleLabel();