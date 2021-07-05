const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const employee = new Employee('Erin', 'Singer', 1);

test('creates an employee object', () => {
    expect(employee.firstName).toBe('Erin');
    expect(employee.lastName).toBe('Singer');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.role).toBe('Employee');
});

test('gets employees name', () => {
    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id number', () => {
    expect(employee.getId()).toEqual(expect.any(String));
});

test('get employee email', () => {
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role));
});