module.exports = function(sequelize, DataTypes) {
    var Players = sequelize.define("players", {
      teamName: DataTypes.STRING,

      qb_name: DataTypes.STRING,
      qb_routename: DataTypes.STRING,
      passingYards_gained: DataTypes.INTEGER,
      passingTouchdowns: DataTypes.INTEGER,
      qbGameScore: DataTypes.INTEGER,
      qbPlayerValue: DataTypes.INTEGER,

      rb_name: DataTypes.STRING,
      rb_routename: DataTypes.STRING,
      rushingYards_gained: DataTypes.INTEGER,
      rushingTouchdowns: DataTypes.INTEGER,
      rbGameScore: DataTypes.INTEGER,
      rbPlayerValue: DataTypes.INTEGER,

      wr_name: DataTypes.STRING,
      wr_routename: DataTypes.STRING,
      receivingYards_gained: DataTypes.INTEGER,
      receivingTouchdowns: DataTypes.INTEGER,
      wrGameScore: DataTypes.INTEGER,
      wrPlayerValue: DataTypes.INTEGER,

      overallTeamScore: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return Players;
  };