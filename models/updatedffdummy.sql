DROP DATABASE IF EXISTS fantasyPlayers_db;
CREATE DATABASE fantasyPlayers_db;

USE fantasyPlayers_db;

CREATE TABLE players(
  id INT NOT NULL AUTO_INCREMENT,
  
  qb_name VARCHAR(100),
  
  qb_routename VARCHAR(100),
  
  passingYards_gained INT default 0,
  
  passingTouchdowns INT default 0,
  
  qbGameScore INT default 0,
  
  qbPlayerValue INT default 0,
  
  rb_name VARCHAR(100),

  rb_routename VARCHAR(100),
  
  rushingYards_gained INT default 0,
  
  rushingTouchdowns INT default 0,
  
  rbGameScore INT default 0,
  
  rbPlayerValue INT default 0,
  
  wr_name VARCHAR(100),
  
  wr_routename VARCHAR(100),
  
  receivingYards_gained INT default 0,
  
  receivingTouchdowns INT default 0,
  
  wrGameScore INT default 0,
  
  wrPlayerValue INT default 0,
  
  createdAt DATE,
  
  updatedAt DATE,
  
  PRIMARY KEY (id)
);

INSERT INTO players (qb_name,qb_routename,passingYards_gained,passingTouchdowns,qbGameScore,qbPlayerValue,rb_name,rb_routename,rushingYards_gained,rushingTouchdowns,rbGameScore,rbPlayerValue,wr_name,wr_routename,receivingYards_gained,receivingTouchdowns,wrGameScore,wrPlayerValue)
VALUES('Tom Brady','tombrady',300,4,0,0,'Todd Gurley','toddgurley',200,2,0,0,'Brandon Cooks','brandoncooks',150,2,0,0),
      ('Jared Goff','jaredgoff',275,3,0,0,'Dalvin Cook','dalvincook',120,1,0,0,'Stefon Diggs','stephondiggs',100,1,0,0),
      ('Kirk Cousins','kirkcousins',225,2,0,0,'Latavius Murray','lataviusmurray',50,1,0,0,'Robert Woods','robertwoods',125,1,0,0);
      