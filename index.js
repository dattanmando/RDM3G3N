// Packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

// An array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please input your project description',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please input installation',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please input usage',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What license does the project have?',
        name: 'license',
        choices: ['MIT', 'Apache','GPL']
      },
      {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'How did you run the tests, if any?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'How can a user contact you if they have feedback or questions? Please include GitHub link to profile',
        name: 'questions',
      },

];

// A function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
}

// A function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    const readmeData = generateMarkdown(response)
    writeToFile('README.md', readmeData)
  });
}

// Function call to initialize app
init();
