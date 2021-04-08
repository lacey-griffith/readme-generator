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
                name: 'project_title',
                type: 'input',
                message: 'What is the title of your project?',
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
                message: 'Describe your project:'
            }, {
                name: 'installConfirm',
                type: 'confirm',
                default: false,
                message: 'Do you want to include installation instructions?',
            }, {
                name: 'install',
                type: 'input',
                message: 'Proivde installation instructions:',
                when: ({
                    installConfirm
                }) => {
                    if (installConfirm) {
                        return true
                    } else {
                        return false
                    }
                }
            }, {
                name: 'usage',
                type: 'input',
                message: 'Do you want to include usage information?',
            }, {
                name: 'contributions',
                type: 'input',
                message: 'Who made contributions?'
            }, {
                name: 'testing',
                type: 'input',
                message: 'Are there testing instructions?'
            }, {
                name: 'licensing',
                type: 'checkbox',
                message: 'Select license(s) for this project.',
                choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'ISC', 'None']
            }, {
                name: 'site_image',
                type: 'input',
                message: 'To include a site image, enter the image path:'
            },
            {
                name: 'addREADME',
                type: 'confirm',
                message: 'Would you like to create another README.md?',
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