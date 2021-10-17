// In addition to the 'Employee' properties and methods 'Intern' will also have: 

/*

- school
- getSchool()
- getRole() // Overridden to return 'Intern'

*/

const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('gets intern basic information', () => {
    const intern = new Intern('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'UT-Austin', 'Intern');

    expect(intern.name).toBe('Kevin');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('kev.hernandezgarza@gmail.com');
});

test('gets intern school', () => {
    const intern = new Intern('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'UT-Austin', 'Intern');

    expect(intern.getSchool()).toBe('UT-Austin');
});

test('gets intern role', () => {
    const intern = new Intern('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'UT-Austin', 'Intern');

    expect(intern.getRole()).toBe('Intern');
});