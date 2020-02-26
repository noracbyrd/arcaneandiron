const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.User.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findAll({
            where: {
              id: req.params.id
            }
          })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    // update: function (req, res) {
    //     db.User
    //         // .findOneAndUpdate({ _id: req.params.id }, {$push: req.body }, { new: true })
    //         // .then(dbModel => res.json(dbModel))
    //         // .catch(err => res.status(422).json(err));
    // },
    // lets a user remove a User from active view, but keeps the record. sets "archive" from "false" to "true"
    // remove: function (req, res) {
    //     db.User
        // .findOneAndUpdate({ _id: req.params.id }, {archive: true})
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    // }
};
