module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_passconfirm: DataTypes.STRING,
      agree: DataTypes.BOOLEAN,

      team_name: DataTypes.STRING,
      currency: DataTypes.INTEGER,

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return Users;
  };