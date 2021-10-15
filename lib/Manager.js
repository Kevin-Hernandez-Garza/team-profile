// In addition to the 'Employee' properties and methods 'Manager' will also have: 
/*

- officeNumber
- getRole() //Overridden to 'Manager'

*/

const Employee = require("./Employee");


class Manager extends Employee {

    getRole() {
        return
    }

}

module.exports = Manager;