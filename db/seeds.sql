CREATE TABLE `departments` (
  `id` int NOT NULL primary key auto_increment,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 

INSERT INTO `departments` (`id`, `name`) VALUES
(1, 'Engineering'),
(2, 'Devops'),
(4, 'Marketing');


CREATE TABLE `roles` (
  `id` int NOT NULL primary key auto_increment,
  `title` varchar(30) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `department_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 

INSERT INTO `roles` (`id`, `title`, `salary`, `department_id`) VALUES
(1, 'HR', '200.00', 1),
(2, 'MD', '120.00', 1),
(3, 'COO', '130.00', 1);

 CREATE TABLE `employees` (
  `id` int NOT NULL  primary key auto_increment,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `role_id` int NOT NULL,
  `manager_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES
(3, 'Mayowa', 'Michael', 4, NULL);
 