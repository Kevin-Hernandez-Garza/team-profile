const fs = require('fs');
const inquirer = require('inquirer');
// const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const employeeInput = () => {
    return inquirer 
    .prompt([
        {
            type: 'list',
            name: 'roles',
            choices: ['Manager', 'Engineer', 'Intern']

        }

    ])
}


const managerPrompt = () => {
    return inquire 
     .prompt([
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

     return employeeInput();

}







// creating function to initiate app
function init() {
    managerPrompt();
}

//calling function
init();