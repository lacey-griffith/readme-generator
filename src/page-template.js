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
    if (license === 'None') {
        return ``;
    } else {
        // for (let lic of license) {
        return `
[![License: $](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
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
        git_username,
        git_url
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
${git_url}

# Questions
If you have any questions please contact me at ${email}.
You can also visit my GitHub profile by clicking [here.](https://github.com/${git_username}).
`;
};