/* Arrray Collections */

/* The more recommended array
The literal way */
const days_of_week = ['Sun', 'Mon', 'Tue', 'Wed',
'Thur', 'Fri', 'Sat'];

/* The new keyboard array is less common */
const values = new Array(101, 102, 103, 104, 105);

/* An array of mixed types */
const mixture = ['Tue', 106, false];

/* Acessing an element of array based on its index */
function getMyDay() {
    let day = days_of_week[5];
    //console.log(day);
    } //end function

getMyDay();

/* Updating an element of array by its index */
function changeMyElement() {
    values[2] = 100;

    // changes a number to a string
    values[4] = 'One Hundred';

    //console.log(`Value collection changed ${values}`);
} //end function

changeMyElement();

/* Length of an array */
let size = days_of_week.length;
//console.log(size);

/* Using a loop for an array */
function loopArray() {
    for(let i = 0; i < values.length; i++) {
       //console.log(values[i]);
    } //end for loop
 } //end function

 /*using the for...in statement */
 function otherLoop() {
    for(const item of days_of_week) {
      //console.log(item)
    } // end for...of
 } //end fuction

 loopArray();

 otherLoop();

 /* The foreach Instance method using an inline function. */
 function loopForEach () {
    days_of_week.forEach(function CountEntry(myElements) {
        //console.log(myElements);
    });
 
} //end function

 loopForEach();

 const trucks = ['Chevy', 'Ford', 'Dodge', 'Toyota'];

 /* The join instance method returns a concantenated string
 of the elements of the array including a separate defined in
 the join method. */
 function truckJoin() {
    let sale = trucks.join(' & ');
    //console.log(sale);
 } //end function

 truckJoin();

 /*Th slice method will create a shallow copy
 of array that is smaller than the original. It
 creates a new array object */
 function truckSlice(start, end) {
    // ensure the paameters are numbers
    const trucks2023 = trucks.slice(start, end);
    trucks2023.forEach(function truckResult(results) {
        //console.log(results);
    });
} // end function


truckSlice(0, 2);

/* The pop method will remove the last element of the array
and will return that element to variable */
function truckPop() {
    let myTruck = trucks.pop();
    // myTruck is assigned the single item as a result of the pop method
    console.log(myTruck);

    //print out the array again. should be missing 1 element
    console.log(trucks);
} //end function

//truckPop();

/* The push method will add one or more elements to
the end of the array and return its length to a variable. */
function truckPush() { 
    const addMore = trucks.push('Nissan', 'Jeep', 'Volkswagon');
    // get the new length of the array
    console.log(addMore);
    console.log(trucks.length);
    // printout the array with new values added
    console.log(trucks);
} // end function

truckPush();

/* The reverse method will change the order of the elements
in the arrayto the opposite direction */
function truckReverse() {
    const backward = trucks.reverse();
    // backward will display the elements in reverse order 
    console.log(backward);

    //reverse is destructive because it affects the original array.
    // also changes the original aray
    console.log(trucks);
} //end function

truckReverse();


/* The shift method will remove the first element of the array and
return it to avariable. */
function truckShift() {
    let vehicle = trucks.shift();

    // vehicle will be the first element from the shift
    console.log(vehicle);

    // print out the array to show the element removed
    console.log(trucks);

} //end function

truckShift();















