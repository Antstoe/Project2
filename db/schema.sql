CREATE DATABASE proj2_db;
USE proj2_db;

CREATE TABLE `Users` (
	ID int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (ID)
);
CREATE TABLE `Weed` (
	ID int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	taste varchar(255) NOT NULL,
    effects boolean NOT NULL,
	PRIMARY KEY (ID)
);
-- Import WeedtoWine.csv

CREATE TABLE `Wine` (
	ID int NOT NULL AUTO_INCREMENT,
	type varchar(255) NOT NULL,
	taste varchar(255) NOT NULL,
	PRIMARY KEY (ID)
);

