"use strict";
//string
let lname;
lname = "John";
let newname = lname.toUpperCase();
console.log(newname);
//number
let age;
age = 25;
let dab = "25";
let result = parseInt(dab);
console.log(result);
//boolean
let isValid = true; //make sure to assign value to boolean, otherwise it throws an error
console.log(isValid);
//arrays
let empList;
let depList;
let numList;
empList = ["Rufat1", "Rufat2", "Rufat3"];
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let numFind = numList.find((num) => num == 2);
console.log(numFind);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
//tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[1];
console.log(swapNumbs);
//any
let department; //if you don't assign datatype then it is assigned any by default
department = "IT";
department = 10;
//void
//# sourceMappingURL=datatypes.js.map