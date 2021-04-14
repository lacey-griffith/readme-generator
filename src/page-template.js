const createInstall = installInfo => {
    if (!installInfo) {
        return `No installation instructions provided.`;
    }
    return `${installInfo}`;
}
const createUsage = usageInfo => {
    if (!usageInfo) {
        return `No usage instructions provided.`;
    }
    return `${usageInfo}`;
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
        return `No testing information provided.`;
    }
    return `${testInfo}`;
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

# Installation
${createInstall(install)}

# Usage
${createUsage(usage)}

# License
This project is covered under the following licenses:
${licensing}

# Testing
${createTests(test)}

# Contributions
${contributions}

# Questions
If you have any questions please contact me at ${email}.
You can also visit my GitHub profile by clicking [here.](https://github.com/${git_username}).
`;
};