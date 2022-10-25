import { Login, User } from './interfaces';


interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
};


class Employee implements Login {
    //# = private
    #id: number;

    protected name: string;

    address: Address;
    //static let's you call the method without creating an instance of the class
    static getEmployeeCount(): number {
        return 50;
    }

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    Login(): User {
        return { name: "John", id: 1, email: "john@yahoo.com" };
    }

    getNamesWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, "John", { street: "ABC", city: "Toronto", state: "Colorado", pin: "123456" });

john.empId = 100;
console.log(john.empId);

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNamesWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

//Employee.getEmployeeCount();

let address = john.getNamesWithAddress();

let mike = new Manager(2, "Mike", { street: "CBD", city: "Baku", state: "Colorado", pin: "123456" });

console.log(john);
console.log(address);
console.log(mike.getNamesWithAddress());