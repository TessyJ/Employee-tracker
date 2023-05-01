const connection = require("./connection");

class Employee {
  constructor(connection) {
    this.connection = connection;
  }

  // method to get all employees
  findAll() {
    return this.connection
      .promise()
      .query(
        'SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(managers.first_name, " ", managers.last_name) AS manager ' +
          "FROM employees " +
          "LEFT JOIN roles ON employees.role_id = roles.id " +
          "LEFT JOIN departments ON roles.department_id = departments.id " +
          "LEFT JOIN employees managers ON employees.manager_id = managers.id"
      );
  }

  // method to create a new employee
  create(firstName, lastName, roleId, managerId) {
    return this.connection
      .promise()
      .query("INSERT INTO employees SET ?", {
        first_name: firstName,
        last_name: lastName,
        role_id: roleId,
        manager_id: isNaN(managerId) ? null : managerId,
      });
  }

  // method to update an employee's role
  updateRole(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employees SET ? WHERE ?", [
        { role_id: roleId },
        { id: employeeId },
      ]);
  }

  // update employee mamanger
  updateManager(employeeId, managerId) {
    return this.connection
      .promise()
      .query("UPDATE employees SET ? WHERE ?", [
        { manager_id: managerId },
        { id: employeeId },
      ]);
  }

  // view Employees by manager
  viewEmployeesByManager(managerId) {
    return this.connection
      .promise()
      .query("SELECT * FROM employees WHERE manager_id = ?", managerId);
  }

  // view Employees by department
  viewEmployeesByDepartment(departmentId) {
    return this.connection
      .promise()
      .query(
        "SELECT * FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id WHERE departments.id = ?",
        departmentId
      );
  }

  // Delete Employee
  deleteEmployee(employeeId) {
    return this.connection
      .promise()
      .query("DELETE FROM employees WHERE id = ?", employeeId);
  }
}

module.exports = new Employee(connection);
