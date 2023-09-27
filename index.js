// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const { prompts } = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
         if (err) throw new Error (err);
    console.log('README generated!');
    });
}

    
    // TODO: Create a function to initialize app
function init() {
    console.log(`
        Welcome to the README generator!
        Please answer the following prompts to generate your README file.
        `);

     inquirer.prompt(questions)
     .then(readmeData => {
        fs.writeToFile('README.md', generateMarkdown(readmeData))
    })
};

// Function call to initialize app
init();
