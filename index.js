// packages to run the apps
const inquirer = require("inquirer");
const Department = require("./queries/department");
const Role = require("./queries/role");
const Employee = require("./queries/employee");
// Prompt the user to select an action to perform

inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "Add a department",
        "View all departments",
        "Delete a department",
        "View department budget",
        "Add an employee",
        "Update an employee role",
        "Update an employee manager",
        "View all employees",
        "View employees by manager",
        "View employees by department",
        "Delete an employee",
        "Add a role",
        "View all roles",
        "Delete a role",
        "Exit",
      ],
    },
  ])
  .then((answer) => {
    switch (answer.action) {
      case "View all departments":
        Department.findAll()
          .then(([rows]) => {
            console.table(rows);
          })
          .catch((err) => console.error(err));
        break;
      case "View all roles":
        Role.findAll()
          .then(([rows]) => {
            console.table(rows);
          })
          .catch((err) => console.error(err));
        break;
      case "View all employees":
        Employee.findAll()
          .then(([rows]) => {
            console.table(rows);
          })
          .catch((err) => console.error(err));
        break;
      case "Add a department":
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the name of the new department?",
            },
          ])
          .then((answer) => {
            Department.create(answer.name).then(() =>
              console.log(`Added ${answer.name} to the database`)
            );
          });
        break;
      case "Add a role":
        inquirer
          .prompt([
            {
              type: "input",
              name: "title",
              message: "What is the title of the new role?",
            },
            {
              type: "number",
              name: "salary",
              message: "What is the salary for the new role?",
            },
            {
              type: "number",
              name: "department_id",
              message: "What is the department ID for the new role?",
            },
          ])
          .then((answer) => {
            Role.create(answer.title, answer.salary, answer.department_id).then(
              () => console.log(`Added ${answer.title} to the database`)
            );
          });
        break;
      case "Add an employee":
        inquirer
          .prompt([
            {
              type: "input",
              name: "first_name",
              message: "What is the employee's first name?",
            },
            {
              type: "input",
              name: "last_name",
              message: "What is the employee's last name?",
            },
            {
              type: "number",
              name: "role_id",
              message: "What is the employee's role ID?",
            },
            {
              type: "number",
              name: "manager_id",
              message:
                "What is the employee's manager ID? (Leave blank if none)",
            },
          ])
          .then((answer) => {
            Employee.create(
              answer.first_name,
              answer.last_name,
              answer.role_id,
              answer.manager_id
            ).then(() =>
              console.log(
                `Added ${answer.first_name} ${answer.last_name} to the database`
              )
            );
          });
        break;
      case "Update an employee role":
        inquirer
          .prompt([
            {
              type: "number",
              name: "employee_id",
              message: "What is the ID of the employee you'd like to update?",
            },
            {
              type: "number",
              name: "new_role_id",
              message: "What is the new role ID for the employee?",
            },
          ])
          .then((answer) => {
            Employee.updateRole(answer.employee_id, answer.new_role_id).then(
              () => console.log(`Updated employee role`)
            );
          });
        break;
      case "Delete a department":
        inquirer
          .prompt([
            {
              type: "number",
              name: "department_id",
              message: "What is the ID of the department you'd like to delete?",
            },
          ])
          .then((answer) => {
            Department.deleteDepartment(answer.department_id).then(() =>
              console.log(`Deleted department`)
            );
          });

        break;
      case "View department budget":
        inquirer
          .prompt([
            {
              type: "number",
              name: "department_id",
              message:
                "What is the ID of the department you'd like to view the budget for?",
            },
          ])
          .then((answer) => {
            Department.viewDepartmentBudget(answer.department_id)
              .then(([rows]) => {
                console.table(rows);
              })
              .catch((err) => console.error(err));
          });
        break;
      case "Update an employee manager":
        inquirer
          .prompt([
            {
              type: "number",
              name: "employee_id",
              message: "What is the ID of the employee you'd like to update?",
            },
            {
              type: "number",
              name: "new_manager_id",
              message: "What is the new manager ID for the employee?",
            },
          ])
          .then((answer) => {
            Employee.updateManager(
              answer.employee_id,
              answer.new_manager_id
            ).then(() => console.log(`Updated employee manager`));
          });
        break;
      case "View employees by manager":
        inquirer
          .prompt([
            {
              type: "number",
              name: "manager_id",
              message:
                "What is the ID of the manager you'd like to view employees for?",
            },
          ])
          .then((answer) => {
            Employee.viewEmployeesByManager(answer.manager_id)
              .then(([rows]) => {
                console.table(rows);
              })
              .catch((err) => console.error(err));
          });
        break;
      case "View employees by department":
        inquirer
          .prompt([
            {
              type: "number",
              name: "department_id",
              message:
                "What is the ID of the department you'd like to view employees for?",
            },
          ])
          .then((answer) => {
            Employee.viewEmployeesByDepartment(answer.department_id)
              .then(([rows]) => {
                console.table(rows);
              })
              .catch((err) => console.error(err));
          });
        break;
      case "Delete an employee":
        inquirer
          .prompt([
            {
              type: "number",
              name: "employee_id",
              message: "What is the ID of the employee you'd like to delete?",
            },
          ])
          .then((answer) => {
            Employee.deleteEmployee(answer.employee_id).then(() =>
              console.log(`Deleted employee`)
            );
          });
        break;
      case "Delete a role":
        inquirer
          .prompt([
            {
              type: "number",
              name: "role_id",
              message: "What is the ID of the role you'd like to delete?",
            },
          ])
          .then((answer) => {
            Role.deleteRole(answer.role_id).then(() =>
              console.log(`Deleted role`)
            );
          });
        break;
      case "Exit":
        process.exit();
        // break;
    }
  });
