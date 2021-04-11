// x TITLE
// x Description
// x Installation instructions
// x Usage Information
// x Contribution Guidelines
// x Test instruction
// x license options
// x Questions (includes [x] github user-name and [x] link to repo
// x email address as a contact solution

// const { SSL_OP_LEGACY_SERVER_CONNECT } = require('constants');
const fs = require('fs')
const inquirer = require('inquirer')
const generateReadMe = require('./src/page-template')

// MOCK DATA 
// const mockData = {
//     git_username: 'lacey',
//     git_url: 'www.github.com/lacey-griffith/readme-generator',
//     email: 'lacey.griffith04@gmail.com',
//     projectInfo: [{
//         project_title: 'ReadMe Generator',
//         descriptionConfirm: true,
//         description: 'A project to generate README.md files for users',
//         installConfirm: true,
//         install: 'This is how you would install this application',
//         usageConfirm: true,
//         usage: 'This is usage information for ReadMe Generator',
//         contributions: 'Lacey Griffith made contributions',
//         testConfirm: true,
//         test: 'this is testing information for ReadMe Generator',
//         licensing: [Array],
//         site_image: 'ok',
//         addREADME: false
//     }]
// }

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
                name: 'descriptionConfirm',
                type: 'confirm',
                default: true,
                message: 'Do you want to add a description?'
            }, {
                name: 'description',
                type: 'input',
                message: 'Enter the description:',
                when: ({
                    descriptionConfirm
                }) => {
                    if (descriptionConfirm) {
                        return true
                    } else {
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
            }, {
                name: 'usageConfirm',
                type: 'confirm',
                message: 'Do you want to include usage information?',
            },
            {
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
            },
            {
                name: 'contributions',
                type: 'input',
                message: 'Who made contributions?'
            }, {
                name: 'testConfirm',
                type: 'confirm',
                message: 'Are there testing instructions?'
            },
            {
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
            },
            {
                name: 'licenseConfirm',
                type: 'confirm',
                message: 'Would you like to include a license?'
            },
            {
                name: 'licensing',
                type: 'checkbox',
                message: 'Select license(s) for this project.',
                choices: ['MIT', 'Apache', 'Boost', 'ISC'],
                when: ({
                    licenseConfirm
                }) => {
                    if (licenseConfirm) {
                        return true
                    } else {
                        return false
                    }
                }
            }, {
                name: 'site_image',
                type: 'input',
                message: 'To include a site image, enter the image path or press enter to skip.'
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
        const readme = generateReadMe(userData)
        fs.writeFile("README.md", readme, err => {
            if (err) throw err;
            console.log(userData)
            console.log("README.md created!");
            console.log("=================")
            console.log(userData.projectInfo[0].licensing)
        });
    });
//
// MOCK DATA 
//const readme = generateReadMe(mockData)