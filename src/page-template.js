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
const checkLicense = license => {
    if(!license) {
        return ``;
    }
    switch(license) {
        case 'MIT':
        return '![SiteImage](MIT)';

        case 'Apache':
        return '![SiteImage](Apache)';

        case 'Boost':
        return '![SiteImage](Boost)';

        case 'ISC':
        return '![SiteImage](ISC)';

        case 'None':
        return ``;
    }
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
    ${checkLicense(licensing)}
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
    # Licensing
    This project is covered under the following licenses:
    ${licensing}
    ${createTests(test)}
    # Contributing
    ${contributions}
    
    # Questions
    If you have any questions please contact me at ${email}.
    You can also visit my GitHub profile by clicking [here.](https://github.com/${git_username}).
`;
};