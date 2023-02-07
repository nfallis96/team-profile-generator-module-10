const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/teamGenerator");

var teamArr = [];
const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team managers name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the team managers ID number",
        name: "managerID",
      },
      {
        type: "input",
        message: "Enter the team managers email address",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Enter the team managers office number",
        name: "managerOffice",
      },

    ])
    .then((mngrData) => {
      const { name, managerID, managerEmail, managerOffice } = mngrData;
      const manager = new Manager(name, managerID, managerEmail, managerOffice);
      teamArr.push(manager);
      console.log(teamArr);
    });
};

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
      .then(employeeData => {
        const { role, employeeName, employeeID, employeeEmail, employeeSchool, employeeGithub, addAnother } = employeeData;
     
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(employeeName, employeeID, employeeEmail, employeeGithub);
        console.log(employee)
      } else if (role === "Intern") {
        employee = new Intern(employeeName, employeeID, employeeEmail, employeeSchool);
        console.log(employee)
      }
      teamArr.push(employee);
      if (addAnother) {
        return addAnotherEmployee(teamArr);
      } else {
        return teamArr;
      }
    })
}

const employeeQuestions = () => {
  return inquirer
    .prompt([
        {
            type: "input",
            message: "Enter team managers name",
            name: "name",
          },
          {
            type: "input",
            message: "Enter the team managers ID number",
            name: "managerID",
          },
          {
            type: "input",
            message: "Enter the team managers email address",
            name: "managerEmail",
          },
          {
            type: "input",
            message: "Enter the team managers office number",
            name: "managerOffice",
          },
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
    .then(employeeData => {
        const { name, managerID, managerEmail, managerOffice, role, employeeName, employeeID, employeeEmail, employeeSchool, employeeGithub, addAnother } = employeeData;
        const manager = new Manager(name, managerID, managerEmail, managerOffice);
        teamArr.push(manager);
        console.log(teamArr);
     
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(employeeName, employeeID, employeeEmail, employeeGithub);
        console.log(employee)
      } else if (role === "Intern") {
        employee = new Intern(employeeName, employeeID, employeeEmail, employeeSchool);
        console.log(employee)
      }
      teamArr.push(employee);
      if (addAnother) {
        return addAnotherEmployee(teamArr);
      } else {
        return teamArr;
      }
    })
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, error =>
    error ? console.error(error)
      : console.log("index.html created!")
  );
};

employeeQuestions()
.then(teamArr => {
    return generateHTML(teamArr);
  }) 
  .then(data => {
    return writeFile(data);
  })
  .catch((err) => {
    console.log(err);
  });