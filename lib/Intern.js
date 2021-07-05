const Employee = require('./Employee');

class Intern extends Employee {
    constructor(firstName, lastName, id, school) {
        super(firstName, lastName, id);
        this.school = school;
        this.role = 'Intern';
    };

    getSchool() {
        return `<span class="has-text-weight-bold">School:</span> ${this.school}`;
    };
};

module.exports = Intern;