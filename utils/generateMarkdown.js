// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // `[![License](https://img.shields.io/github/license/${}/<Repository>)`
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

  [![License](https://img.shields.io/github/license/${data.username}/${data.title})


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

  ## License
  ${data.license}

  ## Installation Instructions
  ${data.dependencies}

  ## Usage
  ${data.usage}

  ## Test Command
  ${data.testCommand}


  ## Contributions

  ${data.contributions}

  ## Questions
  email: ${data.email}
  [Github](https://github.com/${data.username})






  ## Contribution Guidelines



  ## Questions
  email: ${data.email}
`;
}

module.exports = generateMarkdown;
