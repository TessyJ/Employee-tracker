
DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE `departments` (
  id int NOT NULL primary key auto_increment,
  name_dept varchar(30) NOT NULL);
--    ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 
 CREATE TABLE `roles` (
  id int NOT NULL primary key auto_increment,
  title varchar(30) NOT NULL,
  salary decimal(10,2) NOT NULL,
  department_id int NOT NULL
);
--  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 CREATE TABLE `employees` (
  id int NOT NULL  primary key auto_increment,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int DEFAULT NULL);

-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
