const fs = require('fs')
const inquire = require('inquirer')

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
    name: "languages",
    type: "checkbox",
    message: "What languages do you know?",
    choices: ['NODE.JS', 'JAVASCRIPT', 'PYTHON']
}
const q4 = {
    name: "github_username",
    type: "input",
    message: "What is your GitHub username?",
}
function displayQuestions(array) {}
const displayQuestions = ([q1,q2,q3,q4]) => {
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), err => {
        if(err)
        return console.log("Error!");
    });
    console.log(data)
    createPage(data);
} 


const createPage = (data) => {
        return `
    # TITLE

    **Technologies**

    **Description**
    
    **URL**
    https://${githubName}.github.io/${githubProject}/
    
    ![Site Image](IMAGEPATH)
    
    
    **Contributions**
    `;
    }


fs.writeFile('README.md', displayQuestions(data), err => {
    if (err) throw err;
    console.log("README created!");
});