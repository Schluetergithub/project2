var db = require("../models");

module.exports = function (app) {

  app.get("/api/qbs/", function (req, res) {
    {
      db.Qbs.findAll({}).then(function (result) {
        return res.json(result);
      })
    }
  })

  app.get("/api/rbs/", function (req, res) {
    {
      db.Rbs.findAll({}).then(function (result) {
        return res.json(result);
      })
    }
  })

  app.get("/api/wrs/", function (req, res) {
    {
      db.Wrs.findAll({}).then(function (result) {
        return res.json(result);
      })
    }
  })

};
