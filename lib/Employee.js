function Employee(name = '', id = '', email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function () {
    return `Name: ${this.name}`;
};

Employee.prototype.getId = function () {
    return `Employee ID#: ${this.id}`;
};

Employee.prototype.getEmail = function () {
    return `Email: ${this.email}`;
};

Employee.prototype.getRole = function () {
    return {
        name: this.name,
        id: this.id,
        email: this.email
    };
};

module.exports = Employee;