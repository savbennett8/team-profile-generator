const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
const intern = new Intern('John', 'Smith', 1, 'University of Utah');

test('create intern object', () => {
    expect(intern.firstName).toBe('John');
    expect(intern.lastName).toBe('Smith');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('University of Utah');
});

test('get intern name', () => {
    expect(intern.getName()).toEqual(expect.any(String));
});

test('get intern id', () => {
    expect(intern.getId()).toEqual(expect.any(String));
});

test('get intern email', () => {
    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get intern role', () => {
    expect(intern.getRole()).toEqual(expect.any(String));
});

test('get intern school', () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
});