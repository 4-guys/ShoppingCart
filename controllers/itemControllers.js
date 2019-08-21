const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Items
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByItemName: function(req, res) {
    db.Items
      .findByItemName(req.params.itemName)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByBrandName: function(req, res) {
    db.Items
      .findByBrandName(req.params.brandName)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
