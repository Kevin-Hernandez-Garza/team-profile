// In addition to the 'Employee' properties and methods 'Manager' will also have: 
/*

- officeNumber
- getRole() //Overridden to 'Manager'

*/

const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('get managers  basic information', () => {
    const manager = new Manager('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'Manager', '567');

    expect(manager.name).toBe('Kevin');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('kev.hernandezgarza@gmail.com');
});

test('gets managers office number', () => {
    const manager = new Manager('Kevin', '1234', 'kev.hernandezgarza@gmail.com', '567', 'Manager')

    expect(manager.officeNumber).toBe('567');
});

test('gets manager role', () => {
    const manager = new Manager('Kevin', '1234', 'kev.hernandezgarza@gmail.com', '567', 'Manager');

    expect(manager.getRole()).toEqual('Manager');
});