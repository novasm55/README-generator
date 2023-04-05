// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    
    {
        name: 'fileName',
        type: 'input',
        message: 'Enter fileName: ',
      
    },
    {
        name: 'projectTitle',
        type: 'input',
        message: 'Enter projectTitle: ',
      
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter projectDescription: ',
    
    },

    {
        name: 'installation',
        type: 'input',
        message: 'Enter installation instructions:',
     
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter usage information:',
        
    },
    {
        name: 'license',
        type: 'list',
        message: 'Project license:',
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None']
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'OpenSource contribution needs: ',
      
    },

    {
        name: 'tests',
        type: 'input',
        message: 'Enter testing information:',
       
    },
    {
        name: 'email',
        type: 'input',
        message: 'Email:',

    },
    {
        name: 'username',
        type: 'input',
        message: 'GitHub username:',
   
    },

    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function (e) {
    e ? console.log(e) : console.log("File " + fileName + " generated successfully!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers)=>{
            const md = generateMarkdown(answers);
            writeToFile(`${answers.fileName}.md`, md);
        })
        .catch((e) => console.error(e));
}

// Function call to initialize app
init();