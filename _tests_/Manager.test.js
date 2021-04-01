const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('create manager object', () => {
    const manager = new Manager();

    expect(manager.name).toBe(Employee.name);
    expect(manager.id).toBe(Employee.id);
    expect(manager.email).toBe(Employee.email);
    expect(manager.officeNumber).toEqual(expect.any(String));
});