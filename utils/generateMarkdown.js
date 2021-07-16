// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache') {
    return '[Apache License](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'BSD') {
    return '[BSD License](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Eclipse') {
    return '[Eclipse License](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'GNU') {
    return '[GNU License](http://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'IBM') {
    return '[IBM License](https://opensource.org/licenses/IPL-1.0)'
  } else if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla') {
    return '[Mozilla License](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'Zlib') {
    return '[Zlib License](https://opensource.org/licenses/Zlib)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
${renderLicenseLink(license)}`
  }else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, username, email, license, description, install, usage, contributions, testCommand, }) {
  var gitHubLink = `[My GitHub](https://github.com/${username})`
  var showEmail = `If you have any questions: ${email}`

  return `# **${title}**

  ${renderLicenseBadge(license)}

  ## Description

  ${description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation-instructions)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#test-command)
  * [Questions](#questions)

  ## Installation Instructions
  ${install}

  ## Usage
  ${usage}

  ${renderLicenseSection(license)}

  ## Contributions Guidelines
  ${contributions}

  ## Test Instructions
  ${testCommand}

  ## Questions
  ${email ? showEmail : ''}

  ${username ? gitHubLink : ''}

`;
}

module.exports = generateMarkdown;
