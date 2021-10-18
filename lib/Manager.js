// In addition to the 'Employee' properties and methods 'Manager' will also have: 
/*

- officeNumber
- getRole() //Overridden to 'Manager'

*/

const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email ,officeNumber) {
        super(name, id, email);

        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }



    getRole() {
        return this.role;
    }

}

module.exports = Manager;