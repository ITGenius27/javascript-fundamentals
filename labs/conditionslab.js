/* Conditons lab */

function logicalIf(num1, num2) {
    if(num1 == num2) {
        console.log('Both conditions are the same value');
    } else {
        console.log('Both conditions were not the same value');
    }

} 

logicalIf(8, 8);

function gradeDescription(grade) {
    switch(grade) {
        case 'E': 
            console.log('Excellent');
        break;

        case 'V': 
            console.log('Very Good');
        break;

        case 'G':
            console.log('Good');
        break;

        case 'A':
            console.log('Average');
        break;
        
        case 'F':
            console.log('Fail');
        break;
        
        default: 
            console.log('Not a valid grade');
        break;    
    }
} 

gradeDescription('F');
gradeDescription('P');