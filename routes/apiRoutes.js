var db = require("../models");

module.exports = function (app) {

  app.get("/api/players", function (req, res) {
    {
      db.players.findAll({}).then(function (result) {
        return res.json(result);
      })
    }
  })

  app.get("/api/users", function (req, res) {
    {
      db.users.findAll({}).then(function (result) {
        return res.json(result);
      })
    }
  })

};
