// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)


  # Table of Contents
  * [Description](#project-description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)

  ## Description

  ${data.description}


  ## Table of Contents
    *
  ## Authors
  ${data.username}
  email: ${data.email}
  [Github](https://github.com/${data.username})


  ## Installation Instructions
    ${data.dependencies}

  ##License

  ## Contribution Guidelines

  ## Test Command

  ${data.testCommand}

  ## Questions
`;
}

module.exports = generateMarkdown;
