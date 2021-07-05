const inquirer = require('inquirer');
const fs = require('fs');

const generate = require('./src/template');

const teamMembers = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role in the company?",
        choices: () => {
            if (teamMembers.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'firstName',
        message: 'What is their first name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter this employee's first name!");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is their last name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter this employee's last name!");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's ID number?",
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log("Please enter a valid ID number for this employee!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `What is this manager's office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumber => {
            if (!isNaN(parseInt(officeNumber))) {
                return true;
            } else {
                console.log("Please enter this manager's valid office number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `What is this employee's Github username?`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter a valid Github username for this engineer!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does this intern attend?",
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter a valid school for this intern!");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAnotherEmployee',
        message: 'Would you like to add another employee to your team?',
        default: true
    }
]

const promptUser = () => {
    return inquirer.prompt(questions)
        .then(response => {
            teamMembers.push(response);
            // if they want to add another employee
            if (response.addAnotherEmployee) {
                return promptUser();
            } else {
                return teamMembers;
            };
        });
};

const writeHtml = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log("Your page was succesfully created!");
    });
};

promptUser()
    .then(data => generate(data))
    .then(generateHtml => writeHtml(generateHtml))
    .catch(err => console.log(err));