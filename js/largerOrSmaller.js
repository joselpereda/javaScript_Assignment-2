//Prompt user to enter two intgers
//Convert input to numbers
let num1 = parseInt(prompt("Enter first integer: "));
let num2 = parseInt(prompt("Enter second integer: "));

//check which number is greatest and display it in browser
if (num1 < num2) {
    document.write (`${num2} is greater.`);
} else if (num1 > num2) {
    document.write (`${num1} is greater.`);
} else {
    document.write (`${num1} and ${num2} are equal!`);
}

