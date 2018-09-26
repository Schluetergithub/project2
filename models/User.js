module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {

      username: DataTypes.STRING,
      qb: DataTypes.STRING,
      qbYards: DataTypes.INTEGER,
      qbTouchdowns: DataTypes.INTEGER,
      qbScore: DataTypes.INTEGER,
      rb: DataTypes.STRING,
      rbYards: DataTypes.INTEGER,
      rbTouchdowns: DataTypes.INTEGER,
      rbScore: DataTypes.INTEGER,
      wr: DataTypes.STRING,
      wrYards: DataTypes.INTEGER,
      wrTouchdowns: DataTypes.INTEGER,
      wrScore: DataTypes.INTEGER,

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return Users;
  };