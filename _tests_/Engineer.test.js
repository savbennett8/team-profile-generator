const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Lucas', 'Nutter', 1, 'lucasn');

test('create engineer object', () => {
    expect(engineer.firstName).toBe('Lucas');
    expect(engineer.lastName).toBe('Nutter');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('lucasn');
});

test('get engineer name', () => {
    expect(engineer.getName()).toEqual(expect.any(String));
});

test('get engineer id', () => {
    expect(engineer.getId()).toEqual(expect.any(String));
});

test('get engineer email', () => {
    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get engineer role', () => {
    expect(engineer.getRole()).toEqual(expect.any(String));
});

test('get engineer github', () => {
    expect(engineer.getGitHub()).toEqual(expect.any(String));
});