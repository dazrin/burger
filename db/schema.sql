CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- Remove table if it exists
DROP TABLE IF EXISTS burgers;

-- Create burger table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);