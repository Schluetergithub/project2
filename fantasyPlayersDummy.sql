DROP DATABASE IF EXISTS fantasyPlayers_db;
CREATE DATABASE fantasyPlayers_db;

USE fantasyPlayers_db;

CREATE TABLE players(
  id INT NOT NULL AUTO_INCREMENT,
  player_name VARCHAR(100) NOT NULL,
  player_position VARCHAR(50) NOT NULL,
  yards_gained INT default 0,
  touchdowns INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO players (player_name,player_position,yards_gained,touchdowns)
VALUES('Tom Brady', 'QB',300,4),
      ('Brandon Cooks','WR',150,2),
      ('Todd Gurley','RB',200,2),
      ('Jared Goff','QB',275,3),
      ('Stefon Diggs','WR',100,1),
      ('Dalvin Cook','RB',120,1),
      ('Kirk Cousins','QB',225,2),
      ('Latavius Murray','RB',50,0),
      ('Robert Woods','WR',125,2)
      
