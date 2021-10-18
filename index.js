const fs = require('fs');
const inquirer = require('inquirer');
// const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let newTeam = [];

// building a team
const employeeInput = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern', 'Finished with the Team!'],

    
        }

    ])
    .then(chooseEmployee => {
        if(chooseEmployee.roles === 'Intern') {
            promptIntern();
        } else if(chooseEmployee.roles === 'Engineer'){
            promptEngineer();
        } else if (chooseEmployee.roles === 'Finished with the Team!') {
            generateHtml();
        }
    })
}

// adding manager 
const managerPrompt = () => {
    inquirer.prompt([
         {
             type: 'input',
             name: 'managerName',
             message: "What is the manager's name? (Required)",
             validate: managerInput =>  {
                 if(managerInput) {
                     return true;
                 } else {
                     console.log('Who is your leader? 🧑🏽‍💻');
                     return false;
                 }
             }

         },

         {
             type: 'input',
             name: 'managerId',
             message: 'What is your ID?',
             validate: validateId => {
                 if(validateId) {
                     return true;
                 } else  {
                     console.log('Please enter your ID!');
                     return false;
                 }
             }

         },

         {
             type: 'input',
             name: 'email',
             message:'What would be a good email to reach your manager at?',
             validate: validateEmail => {
                 if(validateEmail) {
                     return true;
                 } else {
                     console.log("You don't want use to contact you? 🥲");
                     return false;
                 }
             }
         },

         {
             type: 'input',
             name: 'office',
             message: "What is your Manager's office number",
             validate: validOffice => {
                 if(validOffice) {
                     return true;
                 } else {
                     console.log('Please provide an office number!');
                 }
             }
         }

     ])
     .then(managerInfo => {
            let manager = new Manager(
            managerInfo.name,
            managerInfo.id,
            managerInfo.email,
            managerInfo.officeNumber,
            managerInfo.role
        )

        // pushing the manager object to the array
        newTeam.push(manager);

        // prompt the adding a team-mate question
        employeeInput();
     });

}

// intern mate 
const promptIntern = () => {
    inquirer.prompt([
         {
             type: 'input',
             name: 'internName',
             message: "What is the intern's name? (Required)",
             validate: internInput =>  {
                 if(internInput) {
                     return true;
                 } else {
                     console.log('Who is your intern? 🧑🏽‍💻');
                     return false;
                 }
             }

         },

         {
             type: 'input',
             name: 'Id',
             message: 'What is your ID?',
             validate: validateId => {
                 if(validateId) {
                     return true;
                 } else  {
                     console.log('Please enter your ID!');
                     return false;
                 }
             }

         },

         {
             type: 'input',
             name: 'email',
             message:'What would be a good email to reach your intern at?',
             validate: validateEmail => {
                 if(validateEmail) {
                     return true;
                 } else {
                     console.log("You don't want use to contact him? 🥲");
                     return false;
                 }
             }
         },

         {
             type: 'input',
             name: 'school',
             message: "What school did you go to?",
             validate: validOffice => {
                 if(validOffice) {
                     return true;
                 } else {
                     console.log('Please provide an university!');
                 }
             }
         }

     ])
     .then(internInfo => {
            let intern = new Intern(
            internInfo.name,
            internInfo.id,
            internInfo.email,
            internInfo.school,
            internInfo.role
        )

        // pushing the intern object to the array
        newTeam.push(intern);

        // prompt the adding a team-mate question
        employeeInput();
     });
}


// engineering mate
const promptEngineer = () => {
    inquirer.prompt([
         {
             type: 'input',
             name: 'engineerName',
             message: "What is the engineer's name? (Required)",
             validate: engineerInput =>  {
                 if(engineerInput) {
                     return true;
                 } else {
                     console.log('Who is your Software Dev? 🧑🏽‍💻');
                     return false;
                 }
             }

         },

         {
             type: 'input',
             name: 'Id',
             message: 'What is his ID?',
             validate: validateId => {
                 if(validateId) {
                     return true;
                 } else  {
                     console.log('Please enter your ID!');
                     return false;
                 }
             }

         },

         {
             type: 'input',
             name: 'email',
             message:'What would be a good email to reach your Dev at?',
             validate: validateEmail => {
                 if(validateEmail) {
                     return true;
                 } else {
                     console.log("You don't want use to contact him? 🥲");
                     return false;
                 }
             }
         },

         {
             type: 'input',
             name: 'github',
             message: "What is their GitHub account?",
             validate: validAccount => {
                 if(validAccount) {
                     return true;
                 } else {
                     console.log('Please provide an GitHub account!');
                 }
             }
         }

     ])
     .then(engineerInfo => {
            let engineer = new Engineer(
            engineerInfo.name,
            engineerInfo.id,
            engineerInfo.email,
            engineerInfo.github,
            engineerInfo.role
        )

        // pushing the intern object to the array
        newTeam.push(engineer);

        // prompt the adding a team-mate question
        employeeInput();
     });
}







// creating function to initiate app, starting with the manager prompt
function init() {
    managerPrompt();
}

//calling function
init();