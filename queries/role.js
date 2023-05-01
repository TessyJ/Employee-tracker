const connection = require("./connection");

class Role {
  constructor(connection) {
    this.connection = connection;
  }

  // method to get all roles
  findAll() {
    return this.connection.promise().query("SELECT * from roles");
  }

  // method to create a new role
  create(title, salary, departmentId) {
    return this.connection
      .promise()
      .query("INSERT INTO roles SET ?", {
        title,
        salary,
        department_id: departmentId,
      });
  }

  // Delete Role
  deleteRole(roleId) {
    return this.connection
      .promise()
      .query("DELETE FROM roles WHERE id = ?", roleId);
  }
}

module.exports = new Role(connection);
