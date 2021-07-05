const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName, email, id, officeNumber) {
        super(firstName, lastName, email, id);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return `<span class="has-text-weight-bold">Office Number:</span>${this.officeNumber}`;
    };
};

module.exports = Manager;