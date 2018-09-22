var db = require("../models");

module.exports = function (app) {

  app.get("/api", function (req, res) {
    {
      db.players.findAll({}).then(function (result) {
        return res.json(result);
      })
    }
  })

};
