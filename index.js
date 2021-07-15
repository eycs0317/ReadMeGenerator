// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
// console.log('generateMarkdown--->',generateMarkdown)
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
    name: 'title',
    message: `What is your project's name`
  },
  {
    type: 'input',
     name: 'description',
     message: `Please write a short description of your project?`
  },
  {
    type: 'list',
     name: 'license',
     message: `What kind of license should your project have?`,
     choices: ['Apache', 'BSD', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla', 'Zlib', 'none']
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
     name: 'usage',
     message: `What does the user need to know about using the repo?`
  },
  {
    type: 'input',
     name: 'testCommand',
     message: `What command should be run to run tests?`
  },
  {
    type: 'input',
     name: 'contributions',
     message: `What does the user need to know about contributing to the repo?`
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName,generateMarkdown(data),(err) => {
    if(err) throw err;
    console.log('hahahaha')
  })

}

// TODO: Create a function to initialize app
async function init() {
  let data = await inquirer.prompt(questions).then(answers => {
    console.log('answers', answers)
    return answers
  })
  console.log('data', data)

  // return answers
  // console.log('before function')
  writeToFile('test.md',data)
}

// Function call to initialize app
init();

