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
const createLicense = licenseInfo => {
    if (!licenseInfo) {
        return ``
    }
    return `
    # Licensing
    ${licenseInfo}
    `;
}
const createTests = testInfo => {
    if (!testInfo) {
        return ``;
    }
    return `
    # Tests
    ${testInfo}
    `;
}

module.exports = data => {
    console.log(data.licensing)
    const {
        project_title,
        description,
        install,
        usage,
        licensing,
        test,
        contributions,
        email,
        git_username
    } = data
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
    ${createLicense(licensing)}
    ${createTests(test)}
    # Contributing
    ${contributions}
    
    # Questions
    If you have any questions please contact me at ${email}.
    You can also visit my GitHub profile by clicking [here.](https://github.com/${git_username}).
`;
};