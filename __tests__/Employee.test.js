// properties
/*

- name 
- id
- email
- getName()
- getId()
- getEmail()
- getRole() //Returns 'Employee'

- The other three classes will extend from 'Employee'
*/

const Employee = require('../lib/Employee');


test('creates name for employee', () => {
    // "new" keyword creates a new "Employee" Object
    const employee = new Employee('Kevin');

    expect(employee.name).toEqual('Kevin');
});

test('gets employee id', () => {
    const employee = new Employee('Kevin', '1234');

    expect(employee.id).toBe('1234');
})

test('gets employee email', () => {
    const employee = new Employee('Kevin', '1234', 'kev.hernandezgarza@gmail.com');

    expect(employee.email).toBe('kev.hernandezgarza@gmail.com');
})

test('get employee role', () => {
    const employee = new Employee('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'Employee');

    expect(employee.getRole()).toEqual('Employee');
})

test('gets employee id', () => {
    const employee = new Employee('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'Employee');

    expect(employee.getName()).toEqual(employee.name);
})

test('gets employee email', () => {
    const employee = new Employee('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'Employee');

    expect(employee.getId()).toEqual(employee.id);
})

test('', () => {
    const employee = new Employee('Kevin', '1234', 'kev.hernandezgarza@gmail.com', 'Employee');

    expect(employee.getEmail()).toEqual(employee.email);
})