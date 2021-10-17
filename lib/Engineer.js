// In addition to the 'Employee' properties and methods 'Engineer' will also have: 
/*
// property
- github // GitHub Username

// methods
- getGithub()
- getRole() // Overridden to return 'Engineer'

*/

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github){
        super(Employee);

        this.github = github;
        this.role = "Engineer";
    }
    
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

}


module.exports = Engineer;