function troubleshooting() {
    const a = 1;
    const b = 1;

    let result;

    result = a + b;
    
    return result;
}

console.log(troubleshooting());

number = Number(prompt("enter a number"));

function numberChecker() {
	if(number >= 10) {
		return true;
	} else {
		return false;
	}
}

console.log(numberChecker());

function name(name = 'default') {
    console.log(`Hello ${name}!`);
}

const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]

const tripled = originals.map((digit) => digit * 3);

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

function lastletter(word) {
    return word.charAt(word.length - 1);
};

/*
When the user inputs a number
Initialize a counter variable and set its value to zero
While counter is smaller than user inputted number increment the counter by one
Print the value of the counter variable
*/

function CountInput(InputNumber) {
    for (x = 1; x < InputNumber; x++ ) {
        console.log(x);
    };
};

function FizzBuzz() {
    GetInput = parseInt(prompt("Please Enter a whole number"));

    for (let i = 1; i <= GetInput; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz")
        }
        else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } 
        
        else {
            console.log(i)
        }
    }
}