CREATE DATABASE proj2_db;
USE proj2_db;

CREATE TABLE `weed` (
	ID int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	taste varchar(255) NOT NULL,
    effects varchar(255) NOT NULL,
    winetype varchar(255) NOT NULL,
    image varchar(2555) NOT NULL,
	PRIMARY KEY (ID)
);
-- Import weed.csv

CREATE TABLE `Wine` (
	ID int NOT NULL AUTO_INCREMENT,
	type varchar(255) NOT NULL,
	taste varchar(255) NOT NULL,
	PRIMARY KEY (ID)
);

