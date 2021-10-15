// In addition to the 'Employee' properties and methods 'Intern' will also have: 

const Employee = require("./Employee");

/*

- school
- getSchool()
- getRole() // Overridden to return 'Intern'

*/

class Intern extends Employee {


    getSchool() {
        return
    }

    getRole() {
        return
    }
}

module.exports = Intern;