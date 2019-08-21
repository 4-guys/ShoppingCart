const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Item
<<<<<<< HEAD
      .findAll()
      // .sort({ date: -1 })
=======
      // .find(req.query)
      .sort({ date: -1 })
>>>>>>> origin/tai2
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByItemName: function(req, res) {
    db.Item
      .findAll({
        where: {
          itemCategory: req.params.itemName
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByBrandName: function(req, res) {
    db.Item
      .findByBrandName(req.params.brandName)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
