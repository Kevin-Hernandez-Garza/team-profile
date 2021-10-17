// In addition to the 'Employee' properties and methods 'Manager' will also have: 
/*

- officeNumber
- getRole() //Overridden to 'Manager'

*/

const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email) {
        super(Employee);

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Manager';
        this.officeNumber = '567'
    }



    getRole() {
        return this.role;
    }

}

module.exports = Manager;