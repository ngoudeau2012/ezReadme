const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
const util = require("util");

const writeToFileAsync = util.promisify(fs.writeFile);
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your program",
            name: "projectName",
        },
        {
            type: "input",
            message: "Please provide a brief description of the program and what it does",
            name: "programDescription",
        },
        {
            type: "input",
            message: "Please provide a USER story for your application",
            name: "userStory",
        },
        {
            type: "input",
            message: "What dependencies are required for your application to run?",
            name: "dependencies",
        }, 
        {
            type: "input",
            message: "How do you use this program?",
            name: "howTo",
        },
        {
            type: "input",
            message: "Who is this program licensed under?",
            name: "license",
        },
        {
            type: "input",
            message: "How would you like for users to contribute input?",
            name: "contribution",
        },
        {
            type: "input",
            message: "Where can we provide feedback?",
            name: "feedback",
        }
    ]).then(function(answers){
        console.log(answers);
        const readMe = generateMarkdown(answers);

        return writeToFileAsync("README.md", readMe);
    })