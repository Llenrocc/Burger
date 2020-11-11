DROP DATABASE IF EXISTS burger_DB;
CREATE DATABASE burger_DB;

USE burger_DB;

CREATE TABLE burgers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    
);