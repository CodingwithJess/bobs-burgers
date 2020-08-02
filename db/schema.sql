CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger(
	id int NOT NULL AUTO_INCREMENT,
	name varchar (255) NO NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);