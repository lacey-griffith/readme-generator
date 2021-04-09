const createInstall = installInfo => {
    if (!installInfo) {
        return ``;
    }
    return `

    # Installation
    ${installInfo}

    `;
}
const createUsage = usageInfo => {
    if (!usageInfo) {
        return ``;
    }
    return `

    # Usage
    ${usageInfo}

    `;
}
// const createLicense = licenseInfo => {
//     if (!licenseInfo) {
//         return ``;
//     }
//     return `
//     # License
//     ${licenseInfo}
//     `;
// }
const createTests = testInfo => {
    if (!testInfo) {
        return ``;
    }
    return `

    # Tests
    ${testInfo}

    `;
}

module.exports = pageData => {
    //destructure user data
    const {
        git_username,
        email,
        git_url,
        ...questions
    } = pageData
    // destructure project data
    const {
        project_title,
        description,
        install,
        usage,
        contributions,
        test,
        ...READMEdata
    } = pageData.projectInfo[0]

    console.log(pageData.projectInfo[0].licensing)

    return `
    # ${project_title}

    # Description
    ${description}

    # Table Of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Testing](#testing)
    * [Questions](#questions)
    ${createInstall(install)}
    ${createUsage(usage)}
    # License
    $ {createLicense(license)}
    fix this :)
    ${createTests(test)}
    # Contributing
    ${contributions}

    # Questions
    If you have any questions please contact me at ${email}.
    You can also visit my GitHub profile by clicking [here.](https://github.com/${git_username}).
`;
};