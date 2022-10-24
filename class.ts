class Employee {
    //# = private
    #id: number;

    protected name: string;

    address: string;
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

    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    getNamesWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, "John", "123 Queen Street");

john.empId = 100;
console.log(john.empId);

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNamesWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

//Employee.getEmployeeCount();

let address = john.getNamesWithAddress();

let mike = new Manager(2, "Mike", "Tustin Village Way");

console.log(john);
console.log(address);
console.log(mike.getNamesWithAddress());