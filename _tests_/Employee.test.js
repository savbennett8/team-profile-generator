const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Erin');

    expect(employee.name).toBe('Erin');
    expect(employee.id).toStrictEqual(expect.any(String));
    expect(employee.email).toStrictEqual(expect.any(String));
});

test('gets employees name', () => {
    const employee = new Employee('Erin');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id number', () => {
    const employee = new Employee('Erin');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('get employee email', () => {
    const employee = new Employee('Erin');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const employee = new Employee('Erin');

    expect(employee.getRole()).toHaveProperty('name');
    expect(employee.getRole()).toHaveProperty('id');
    expect(employee.getRole()).toHaveProperty('email');
});