/* Operators lab */
/* Task One */

function PEMDAS() {
    const total = 10 + 32 * 12 / 3;
    console.log(`PEMDAS ${total}`);
} // end function

PEMDAS();

function Parenthesis() {
    const total = (10 + 32) * 12 / 3
    console.log (`Parenthesis ${total}`);
} // end function

Parenthesis(); 

/* Next task */

function additionAssign() {
    let numAdd1 = 9;
    let numAdd2 = 7;
    numAdd1 += numAdd2;
    console.log(`Addition Assignment Operator ${numAdd1}`);
} // end function

additionAssign();

function multiplyAssign(num3, num4) {
    num3 *= num4;
    console.log(`Multiply Assignment Operator ${num3}`);
} // end function

multiplyAssign(6, 5);

function modulusAssign(num5) {
    num5 %= 34;
    console.log(`Modulus Assignment Operator ${num5}`);
} // end function

modulusAssign(22);

/* Third task */

function compare(value1, value2){
    const isSame = value1 == value2;
    const isOtherSame = value1 === value2;
    const isDifferent = value1 != value2;
    console.log(`is same ${isSame} is other same ${isOtherSame}
    is differet ${isDifferent}`)

} // end function

compare(8, '8')


