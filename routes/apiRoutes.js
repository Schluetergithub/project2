var db = require("../models");
var Users = require("../models/Users.js");

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
      Users.findAll({}).then(function (result) {
        return res.json(result);
      })
    }
  })

  app.post("/api/users", function(req, res) {

    var userData = req.body;

    Users.create({
      username: userData.username,
      qb: userData.qb,
      qbYards: userData.qbYards,
      qbTouchdowns: userData.qbTouchdowns,
      qbScore: userData.qbScore,
      rb: userData.rb,
      rbYards: userData.rbYards,
      rbTouchdowns: userData.rbTouchdowns,
      rbScore: userData.rbScore,
      wr: userData.wr,
      wrYards: userData.wrYards,
      wrTouchdowns: userData.wrTouchdowns,
      wrScore: userData.wrScore,
    });

  })

};