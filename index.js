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

// const readMeData = process.argv.slice(2)
// const [githubName, githubProject] = readMeData
const q1 = {
    name: "project_title",
    type: "input",
    message: "What is the title of your project?"
}
const q2 = {
    name: "description",
    type: "input",
    message: "Describe your project."
}
const q3 = {
    name: "install",
    type: "input",
    message: "What are the installation instructions for this project?",
}
const q4 = {
    name: "usage",
    type: "input",
    message: "What is the usage information?",
}
const q5 = {
    name: "contributions",
    type: "input",
    message: "Who made contributions?"
}
const q6 = {
    name: "testing",
    type: "input",
    message: "What are the testing instructions for your project?"
}
const q7 = {
    name: "licensing",
    type: "checkbox",
    message: "Which license would you like to include?",
    choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'ISC']
}
const q8 = {
    name: "git-username",
    type: "input",
    message: "Please enter your GitHub username."
}
const q9 = {
    name: "git-url",
    type: "input",
    message: "Please enter your GitHub project's URL."
}
const q10 = {
    name: "email",
    type: "input",
    message: "Please enter your email address."
}

inquirer.prompt([q1,q2,q3,q4,q5,q6,q7,q8,q9,q10])
.then( function(data) {
    console.log(data)
    fs.writeFile('userInfo.txt', JSON.stringify(data, null, '\t'), err => {
        if(err) throw err;
    }
)})
.catch(err => {console.log("Error")})


// const createPage = () => {
//         return `
//     # TITLE

//     **Description**

//     **Technologies**

    
//     **URL**
    
//     ![Site Image](IMAGEPATH)
    
    
//     **Contributions**
//     `;
//     }


// fs.writeFile('README.md', displayQuestions(), err => {
//     if (err) throw err;
//     console.log("README created!");
// });