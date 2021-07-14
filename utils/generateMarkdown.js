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
  return `# ${data.title}

  ## Description

  ${data.description}
  [link](http://xxxxxxxxxxxx)

  ##Build With

  * HTML
  * CSS

  ## Authors
  ${data.username}
  [Github](https://github.com/${data.username})


  ##Usage

  ##License

  ## Contribution Guidelines

  ## Test Instructions

  ## Questions
`;
}

module.exports = generateMarkdown;
