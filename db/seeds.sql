

INSERT INTO departments ( name_dept) 
VALUES
('Sales'),
( 'Engineering'),
( 'Legal'),
('Finance');




 

INSERT INTO roles ( title, salary, department_id)
 VALUES
('Sales lead', 100000, 1),
('Sales person', 80000, 1),
('Lead engineer', 150000, 2),
('Software engineer', 120000, 2),
('Accountant', 125000, 3),
('Account manager', 160000, 3),
('Legal team lead', 250000, 4), 
('Lawyer', 190000, 4);



 

INSERT INTO employees ( first_name, last_name, role_id, manager_id) 
VALUES
('John', 'Doe', 1, 3),
('Mike', 'Chan', 2, 1),
('Mayowa', 'Michael', 4, NULL),
('Ashley', 'Rodriguez', 3, null),
('Kevin', 'Tupik', 4, 3), 
('Malia', 'Brown', 5, null)



 