    module.exports = pageData => {
        //console.log(pageData)
        const {
            git_username,
            email,
            git_url,
            ...questions
        } = pageData

        const {
            project_title,
            description,
            install,
            usage,
            contributions,
            test,
            ...READMEdata
        } = pageData.projectInfo[0]

        // console.log(project_title)
        // console.log(description)


        // console.log(git_username)
        // console.log(email)
        // console.log(git_url)
        return `
    #${project_title}

    # Description
    ${description}

    # Table Of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Testing](#testing)
    * [Questions](#questions)

    # Installation
    ${install}

    # Usage
    ${usage}

    # License
    

    # Contributions
    ${contributions}

    # Testing
    ${test}

    # Questions
    If you have any questions please contact me at ${email}.
    You can also visit my GitHub profile by clicking [here.](https://github.com/${git_username}).
`;
    };