export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}
//questionmark is used to make property optional
let user: User = { name: "John", id: 1, email: "john@yahoo.com" }

//user.name;
//user.email;

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John Doe", id: 1, email: "johnDoe@yahoo.com", salary: 1000 };


export interface Login {
    Login(): User;
}


let [user1, user2, ...restUsers]: User[] = [
    { name: "Peter", id: 1, email: "" },
    { name: "Ali", id: 2, email: "" },
    { name: "Joy", id: 3, email: "" },
    { name: "Company", id: 4, email: "" }
]

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id > 3);

console.log(result);

