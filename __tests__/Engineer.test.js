// In addition to the 'Employee' properties and methods 'Engineer' will also have: 

/*

- github // GitHub Username
- getGithub()
- getRole() // Overridden to return 'Engineer'

*/

const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');



test('gets users github account', () => {
    const engineer = new Engineer('Kevin', '1234', 'kev.hernandezgarza@gmail.com' ,'Kevin-Hernandez-Garza', 'Employee');

    // expect(engineer.getGithub()).toEqual(expect.any('string'));
    expect(engineer.github).toEqual('Kevin-Hernandez-Garza');
    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('gets engineer role', () => {
    const engineer = new Engineer('Kevin', '1234', 'kev.hernandezgarza@gmail.com','Kevin-Hernandez-Garza' ,'Employee');

    expect(engineer.getRole()).toEqual('Engineer');
})