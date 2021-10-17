// In addition to the 'Employee' properties and methods 'Intern' will also have: 

const Employee = require("./Employee");

/*

// property
- school

// methods
- getSchool()
- getRole() // Overridden to return 'Intern'

*/

class Intern extends Employee {
    constructor(name, id, email, school){
        super(Employee);

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}

module.exports = Intern;