const connection = require("./connection");

class Department {
  constructor(connection) {
    this.connection = connection;
  }

  // method to get all departments
  findAll() {
    return this.connection.promise().query("SELECT * FROM departments");
  }

  // method to create a new department
  create(name) {
    return this.connection
      .promise()
      .query("INSERT INTO departments SET ?", { name });
  }

  // Delete Department
  deleteDepartment(departmentId) {
    return this.connection
      .promise()
      .query("DELETE FROM departments WHERE id = ?", departmentId);
  }

  // view department budget
  viewDepartmentBudget(departmentId) {
    return this.connection
      .promise()
      .query(
        "SELECT SUM(salary) AS department_budget FROM employees LEFT JOIN roles ON employees.role_id = roles.id WHERE roles.department_id = ?",
        departmentId
      );
  }
}

module.exports = new Department(connection);
