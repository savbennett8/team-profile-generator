// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

function Employee(name = '', email = '') {
    this.name = name;
    this.id = Math.floor(Math.random() + 1);
    this.email = email;
}

Employee.prototype.getName = function () {
    return `${this.name}`;
};

module.exports = Employee;