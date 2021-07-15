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
// [Github](https://github.com/eycs0317/weatherDashboard)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache') {
    return '[License-link](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'BSD') {
    return '[License](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Eclipse') {
    return '[License](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'GNU') {
    return '[License](http://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'IBM') {
    return '[License](https://opensource.org/licenses/IPL-1.0)'
  } else if (license === 'MIT') {
    return '[License](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla') {
    return '[License](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'Zlib') {
    return '[License](https://opensource.org/licenses/Zlib)'
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
function generateMarkdown(data) {
  return `# **${data.title}**

  ${renderLicenseBadge(data.license)}


  ## Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation-instructions)
  * [Usage](#usage)
  * [Tests](#test-command)
  * [Contributions](#contributions)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ${renderLicenseSection(data.license)}

  ## Installation Instructions
  ${data.dependencies}

  ## Usage
  ${data.usage}

  ## Test Command
  ${data.testCommand}

  ## Contributions
  ${data.contributions}

  [Github](https://github.com/${data.username})

  ## Questions
  email: ${data.email}
`;
}

module.exports = generateMarkdown;
