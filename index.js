// TODO: Include packages needed for this application
const fs = require('fs');
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?(Required)",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter the project title!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: ",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter the project title!');
                  return false;
                }
              }
            
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter the installation process');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?",
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter the usage information !');
                  return false;
                }
              }
        },
        {
            // type: "list",
            type:"list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
                "No License"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?",
            validate: contributingInput => {
                if (contributingInput) {
                  return true;
                } else {
                  console.log('Please enter the contributors!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "tests",
            message: "Enter the tests instructions?",
            validate: testsInput => {
                if (testsInput) {
                  return true;
                } else {
                  console.log('Please enter the tests instructions!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "questions",
            message: "Enter the questions here ",
            validate: questionsInput => {
                if (questionsInput) {
                  return true;
                } else {
                  console.log('Please enter the questions!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            validate: usernameInput => {
                if (usernameInput) {
                  return true;
                } else {
                  console.log('Please enter the username!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter the project title!');
                  return false;
                }
              }
        } 

    ])
};

// TODO: Create a function to write README file
const writeFile = data => {
    return new Promise((resolve , reject) => {
        fs.writeFile('./dist/README.md', data, err => {
        if (err){
            reject(err);
            return;
        }
        resolve({
            ok:true,
            message:'File created!'
        })
    })
})
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(answers => {
        console.log(answers);
        return generateMarkdown(answers)
    })
    .then(data => writeFile(data))
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();

