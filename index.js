// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
console.log('generateMarkdown--->',generateMarkdown)
const questions = [
  {
  type: 'input',
  name: 'username',
  message: `What is your GitHub username?`
  },
  {
    type: 'input',
    name: 'email',
    message: `What is your email address?`
  },
  {
    type: 'input',
    name: 'projectName',
    message: `What is your project's name`
  },
  {
    type: 'input',
     name: 'description',
     message: `Please write a short description of your project?`
  },
  {
    type: 'input',
     name: 'license',
     message: `What kind of license should your project have?`
  },
  {
    type: 'input',
     name: 'dependencies',
     message: `What command should be run to install dependencies?`
  },
  {
    type: 'input',
     name: 'testCommand',
     message: `What command should be run to run tests?`
  },
  {
    type: 'input',
     name: 'repoUse',
     message: `What does the user need to know about using the repo?`
  },
  {
    type: 'input',
     name: 'test',
     message: `What command should be run to run tests?`
  },
  {
    type: 'input',
     name: 'contributing',
     message: `What does the user need to know about contributing to the repo?`
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers)
  })
}

// Function call to initialize app
// init();

