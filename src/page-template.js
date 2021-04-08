module.exports = pageData => {
    const {
        git_username,
        email,
        git_url,
        ...questions
    } = pageData

    // console.log(git_username)
    // console.log(email)
    // console.log(git_url)
    return `
    #${pageData.projectInfo.project_title}

    **Description**
    ${pageData.projectInfo.description}

    **Table Of Contents**


    **Installation**


    **Usage**


    **License**


    **Contributions**


    **Testing**


    **Questions**
    If you have any questions please contact me at ${email}.
    You can also visit my GitHub profile by clicking [here.](https://github.com/${git_username}).
`;
};