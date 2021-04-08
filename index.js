// x TITLE
// x Description
// x Installation instructions
// x Usage Information
// x Contribution Guidelines
// x Test instruction
// x license options
// x Questions (includes [x] github user-name and [x] link to repo
// x email address as a contact solution

const fs = require('fs')
const inquirer = require('inquirer')
const generateReadMe = require('./src/page-template')

// const generateReadMe = require('./src/page-template.js')

// const readMe = generateReadMe();
const userQuestions = () => {
    return inquirer.prompt([{
        name: "git_username",
        type: "input",
        message: "Enter your GitHub username:"
    }, {
        name: "git_url",
        type: "input",
        message: "Enter your GitHub project's URL:"
    }, {
        name: "email",
        type: "input",
        message: "Enter your email address:"
    }])
};
const projectQuestions = userData => {
    if (!userData.projectInfo) {
        userData.projectInfo = [];
    }
    console.log(`
    **** Add README.md ****
    `);
    return inquirer.prompt([{
                name: "project_title",
                type: "input",
                message: "What is the title of your project?"
            }, {
                name: "description",
                type: "input",
                message: "Describe your project:"
            }, {
                name: "install",
                type: "input",
                message: "What are the installation instructions?",
            }, {
                name: "usage",
                type: "input",
                message: "What is the usage information?",
            }, {
                name: "contributions",
                type: "input",
                message: "Who made contributions?"
            }, {
                name: "testing",
                type: "input",
                message: "What are the testing instructions?"
            }, {
                name: "licensing",
                type: "checkbox",
                message: "Which license(s) would you like to include?",
                choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'ISC']
            }, {
                name: "site_image",
                type: "input",
                message: "To include a site image, enter the image path:"
            },
            {
                name: "addREADME",
                type: "confirm",
                message: "Would you like to create another README.md?",
                default: false
            }
        ])
        .then(readmeData => {
            userData.projectInfo.push(readmeData)
            if (readmeData.addREADME) {
                return projectQuestions(userData)
            } else {
                return userData
            }
        })
};

userQuestions()
    .then(projectQuestions)
    .then(userData => {
        console.log(userData)
    })