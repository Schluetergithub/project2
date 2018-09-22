DROP DATABASE IF EXISTS fantasyPlayers_db;
CREATE DATABASE fantasyPlayers_db;

USE fantasyPlayers_db;

CREATE TABLE players(
  id INT NOT NULL AUTO_INCREMENT,
  
  qb_name VARCHAR(100),
  
  qb_routename VARCHAR(100),
  
  passingYards_gained INT default 0,
  
  passingTouchdowns INT default 0,
  
  rb_name VARCHAR(100),

  rb_routename VARCHAR(100),
  
  rushingYards_gained INT default 0,
  
  rushingTouchdowns INT default 0,
  
  wr_name VARCHAR(100),
  
  wr_routename VARCHAR(100),
  
  receivingYards_gained INT default 0,
  
  receivingTouchdowns INT default 0,
  
  PRIMARY KEY (id)
);

INSERT INTO players (qb_name,qb_routename,passingYards_gained,passingTouchdowns,rb_name,rb_routename,rushingYards_gained,rushingTouchdowns,wr_name,wr_routename,receivingYards_gained,receivingTouchdowns)
VALUES('Tom Brady','tombrady',300,4,'Todd Gurley','toddgurley',200,2,'Brandon Cooks','brandoncooks',150,2),
      ('Jared Goff','jaredgoff',275,3,'Dalvin Cook','dalvincook',120,1,'Stefon Diggs','stephondiggs',100,1),
      ('Kirk Cousins','kirkcousins',225,2,'Latavius Murray','lataviusmurray',50,1,'Robert Woods','robertwoods',125,1);
      

