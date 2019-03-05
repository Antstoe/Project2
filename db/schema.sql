DROP DATABASE IF EXISTS  all_Pairs;
CREATE DATABASE  all_Pairs;
USE  all_Pairs;

-- CREATE DATABASE Pairs;


CREATE TABLE all_Pairs (
	id INT AUTO_INCREMENT NOT NULL,
	pair_name VARCHAR(100) NOT NULL,
    pair_photo VARCHAR(500) NOT NULL,
    pair_q1 INTEGER(1),
    pair_q2 INTEGER(1),
    pair_q3 INTEGER(1),
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Lemon Haze and Champagne", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "5", "4", "5", CURRENT_TIMESTAMP);

INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Green Crack and Prosecco", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Lemon Kush and Sauvignon Blanc", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Pineapple Express and Chardonnay", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Mango Kush and Riesling", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Tahoe OG with Moscato", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Cinderella 99 with White Merlot", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Orange Kush with Pinot Noir Rose", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Green Crack and Prosecco", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Durban Poison with Pinot Noir", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);


INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Blue Dream with Grenache", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("OG Kush with Merlot", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Green Crack and Prosecco", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Grapefruit with Zinfandel", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Afgoo with Cab Sauvignon", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Sunset Sherbet with Mourvedre", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

    INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Blue Berry with Sherry", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);

INSERT INTO all_Pairs (pair_name, pair_photo, pair_q1, pair_q2, pair_q3, createdAt)
	VALUES ("Cheese with Ice Wine", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "2", "2", "4", CURRENT_TIMESTAMP);




-- -- SELECT * FROM all_Pairs;