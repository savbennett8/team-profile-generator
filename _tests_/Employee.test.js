const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toStrictEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
});

test('gets employees name', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toStrictEqual(expect.any(String));
});