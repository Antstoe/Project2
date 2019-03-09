CREATE DATABASE proj2_db;
USE proj2_db;
use h2f212wi02anw1pp;
show databases;
CREATE TABLE `wine` (
	ID int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	taste varchar(255) NOT NULL,
    effects boolean NOT NULL,
    winetype varchar(255) NOT NULL,
    image varchar(255) NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE `Wine` (
	ID int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
	sweetness varchar(255) NOT NULL,
	acidity varchar(255) NOT NULL,
	body varchar(255) NOT NULL,
	PRIMARY KEY (ID)
);
SELECT * FROM Wine