# Team Profile Generator



# Team Profile Generator


GitHub Repository: https://github.com/nfallis96/team-profile-generator-module10


## Table of Contents
* [Description](#description)
* [Demo](#demo)
* [Instructions](#instructions)
* [Code Examples](#code-examples)
* [Technologies Used](#technologies-used)
* [License](#license)


## Description

The purposed of this project was to create a command line application that allows a user to generate a team profile by answering a set of prompts presented to them inside the terminal.

This application uses node.js and the npm inquirer package as it's core technologies. Jest was used for unit testing to ensure that the app would function properly.

This project's purpose was to create a command-line application that generates an HTML webpage of a team's profile. It works by answering a set of questions in the terminal. This application uses Node.js, the npm inquirer pacakage and jest; and there were required in order for the application to work.


## Demo




## Instructions

The instructions for this application to work are:
1. Clone this repository.
2. Open the repository in a code editor.  
3. go to the repository in your terminal and type ```npm install@8.2.4```, which will install the inquirer package and then type ```npm install jest```, which will install jest and both are required for this project.
4. In your terminal, type ```Node index.js``` to start the application.
5. Answer all the questions.
6. Once it's completed, go to the "dist" folder to find your html file.


## Code Examples

This example shows the function how you add another employee. 

```js
const addAnotherEmployee = (teamArr) => {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "What is this employees role?",
          name: "role",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          message: "Enter employee name",
          name: "employeeName",
        },
        {
          type: "input",
  
          message: "Enter employee ID number",
          name: "employeeID",
        },
        {
          type: "input",
          message: "Enter the employee email",
          name: "employeeEmail",
        },
        {
          type: "input",
          message: "Enter the interns school",
          name: "employeeSchool",
          when: (input) => input.role === "Intern",
        },
        {
          type: "input",
          message: "Enter the Engineers github username",
          name: "employeeGithub",
          when: (input) => input.role === "Engineer",
        },
        {
          type: "confirm",
          message: "Would you like to add another employee?",
          name: "addAnother",
          default: false
        },
      ])
```


## Technologies Used

![Java Badge](https://img.shields.io/badge/Language-JavaScript-blue)
![Node Badge](https://img.shields.io/badge/Environment-Node.js-yellow)
![Inquirer Badge](https://img.shields.io/badge/NPM-Inquirer-orange)
![Jest Badge](https://img.shields.io/badge/Test-Jest-green)
![License Badge](https://img.shields.io/badge/License-MIT-gray)


## License

MIT License

Copyright (c) 2023 Nicole Fallis 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

