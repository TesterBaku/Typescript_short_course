"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//questionmark is used to make property optional
let user = { name: "John", id: 1, email: "john@yahoo.com" };
let employee = { name: "John Doe", id: 1, email: "johnDoe@yahoo.com", salary: 1000 };
let [user1, user2, ...restUsers] = [
    { name: "Peter", id: 1, email: "" },
    { name: "Ali", id: 2, email: "" },
    { name: "Joy", id: 3, email: "" },
    { name: "Company", id: 4, email: "" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
//# sourceMappingURL=interfaces.js.map