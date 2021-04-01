//in addition to 'Employee' class, this one includes:
// officeNumber

// getRole() // Overridden to return 'Manager'
const Employee = require('../lib/Employee');

function Manager(officeNumber = '') {
    this.name = Employee.name;
    this.id = Employee.id;
    this.email = Employee.email;

    this.officeNumber = officeNumber;
};

// class Manager extends Employee {
//     officeNumber = this.officeNumber;
//     super(name, id, email);
// };


module.exports = Manager;