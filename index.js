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

const userQuestions = () => {
    return inquirer.prompt([{
            name: 'git_username',
            type: 'input',
            message: 'Enter your GitHub username:',
            validate: gitHubNameInput => {
                if (gitHubNameInput) {
                    return true
                } else {
                    console.log('Enter your GitHub username!')
                    return false
                }
            }
        }, {
            name: 'git_url',
            type: 'input',
            message: 'Enter your GitHub project URL: ',
            validate: projectURLInput => {
                if (projectURLInput) {
                    return true
                } else {
                    console.log('Enter your project URL!')
                    return false
                }
            }
        }, {
            name: 'email',
            type: 'input',
            message: 'Enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Enter your email address!')
                    return false
                }
            }
        }, {
            name: 'project_title',
            type: 'input',
            message: 'What is the title of your project? [Required]',
            validate: TitleInput => {
                if (TitleInput) {
                    return true
                } else {
                    console.log('Enter your project title!')
                    return false
                }
            }
        }, {
            name: 'description',
            type: 'input',
            message: 'Enter a description: [Required]',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log("Enter your project's description!")
                    return false
                }
            }
        }, {
            name: 'installConfirm',
            type: 'confirm',
            default: false,
            message: 'Do you want to include installation instructions?',
        }, {
            name: 'install',
            type: 'input',
            message: 'Enter installation instructions:',
            when: ({
                installConfirm
            }) => {
                if (installConfirm) {
                    return true
                } else {
                    return false
                }
            }
        },{
            name: 'usageConfirm',
            type: 'confirm',
            message: 'Do you want to include usage information?',
        },{
            name: 'usage',
            type: 'input',
            message: 'Enter usage information:',
            when: ({
                usageConfirm
            }) => {
                if (usageConfirm) {
                    return true
                } else {
                    return false
                }
            }
        },{
            name: 'testConfirm',
            type: 'confirm',
            message: 'Are there testing instructions?'
        },{
            name: 'test',
            type: 'input',
            message: 'Enter testing instructions:',
            when: ({
                testConfirm
            }) => {
                if (testConfirm) {
                    return true
                } else {
                    return false
                }
            }
        },{
            name: 'licenseConfirm',
            type: 'confirm',
            message: 'Would you like to include a license?'
        },{
            name: 'licensing',
            type: 'checkbox',
            message: 'Select license(s) for this project.',
            choices: ['MIT', 'Apache', 'Boost', 'ISC', 'None'],
            when: ({
                licenseConfirm
            }) => {
                if (licenseConfirm) {
                    return true
                } else {
                    return false
                }
            }
        },{
            name: 'contributions',
            type: 'input',
            message: 'Who made contributions?'
        }
    ])
};

userQuestions()
    .then((userData) => {
        console.log(userData, "190")
        const readme = generateReadMe(userData)
        fs.writeFile("README.md", readme, err => {
            if (err) throw err;
            console.log("README.md created!");
            console.log("=================")
        });
    });