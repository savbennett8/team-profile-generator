const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');
const manager = new Manager('Richard', 'Price', 1, 321);

test('create manager object', () => {
    expect(manager.firstName).toBe('Richard');
    expect(manager.lastName).toBe('Price');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get manager name', () => {
    expect(manager.getName()).toEqual(expect.any(String));
});

test('get manager id', () => {
    expect(manager.getId()).toEqual(expect.any(String));
});

test('get manager email', () => {
    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get manager role', () => {
    expect(manager.getRole()).toEqual(expect.any(String));
});

test('get manager id', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});