const db = require('../models');
module.exports = {
    findAll: function (req, res) {
        db.Email.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Email.findAll({
            where: {
                email: req.body.email
            }
        })
        .then(dbModel => {
            if (dbModel[0] === undefined) {
                db.Email.create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => {
                    res.status(422).json(err)
                    console.log(err)}
                    );
            }
            else {
                console.log('you need to tell the user they are already subscribed')
            }
        })
        .catch(err => {
            res.status(422).json(err)
            console.log(err)}
            );
    }


    // update: function (req, res) {
    //     db.Email
    //         // .findOneAndUpdate({ _id: req.params.id }, {$push: req.body }, { new: true })
    //         // .then(dbModel => res.json(dbModel))
    //         // .catch(err => res.status(422).json(err));
    // },
    // lets a user remove a User from active view, but keeps the record. sets "archive" from "false" to "true"
    // remove: function (req, res) {
    //     db.Email
        // .findOneAndUpdate({ _id: req.params.id }, {archive: true})
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    // }
};
