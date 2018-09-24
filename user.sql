    CREATE TABLE users (
  id int  not NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  user_password VARCHAR(50) NOT NULL,
  user_passconfirm VARCHAR(50) NOT NULL,
  agree boolean DEFAULT TRUE,
  team_name VARCHAR(50) NULL,
  currency INT default 0,
  createdAt DATE,
  updatedAt DATE,
  PRIMARY KEY (id)
);
INSERT INTO users (first_name,last_name,email,user_password,user_passconfirm,agree)
VALUES ('Jerry', 'P','jpangeli514@gmail.com','ffjer','ffjer',true);