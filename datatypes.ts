//string

let lname: string;
lname = "John";
let newname = lname.toUpperCase();
console.log(newname);

//number

let age: number;
age = 25;

let dab = "25";
let result = parseInt(dab);
console.log(result);

//boolean
let isValid: boolean = true; //make sure to assign value to boolean, otherwise it throws an error
console.log(isValid);

//arrays

let empList: string[];
let depList: Array<string>;
let numList: Array<number>;

empList = ["Rufat1", "Rufat2", "Rufat3"];
numList = [1, 2, 3, 4, 5];


let results = numList.filter((num) => num > 2);

let numFind = numList.find((num) => num == 2);
console.log(numFind);

let sum = numList.reduce((acc, num) => acc + num);

console.log(sum);


//enum

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

//tuples

let swapNumbs: [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[1];
console.log(swapNumbs);

//any

let department: any; //if you don't assign datatype then it is assigned any by default
department = "IT";
department = 10;

//void



