module.exports = function(sequelize, DataTypes) {
    var Wrs = sequelize.define("Wrs", {
      player_name: DataTypes.STRING,
      player_position: DataTypes.STRING,
      yards_gained: DataTypes.INTEGER,
      touchdowns: DataTypes.INTEGER/*,
      currency_value: DataTypes.INTEGER*/
    });
    return Wrs;
  };