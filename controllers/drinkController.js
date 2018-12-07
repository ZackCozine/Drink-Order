const db = require("../models");

// Defines methods for the liquorController
module.exports = {
 

  //findAll for type 
  findAll: function(req, res) {
    db.Drink
      .find({userID: this.props.auth.userProfile.sub})
      .sort({ type: 1, name: 1 })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Drink
     .find({userID: req.params.userId})
     .sort({ name: 1})
     .then(dbModel => {
       res.json(dbModel);
     })
     .catch(err => res.status(422).json(err));
   },
  findById: function(req, res) {
    db.Drink
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create: ", req);
    db.Drink
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Drink
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Drink
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
