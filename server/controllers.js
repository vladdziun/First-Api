const Person = require('./models.js')

module.exports = {
    root: (req, res)=> {
        Person.find()
            .then(data => res.json({persons: data }))
            .catch(err => res.json(err));
    },

    add: (req, res)=>{
        Person.create(req.body)
        .then(res.redirect('/'))
        .catch(err => res.json(err));
    },
    remove: (req, res)=>{
        Person.remove({name: req.params.name})
        .then(res.redirect('/'))
        .catch(err => res.json(err));
    },
    find: (req, res) => {
        Person.find({name: req.params.name})
        .then(data => res.json({persons: data }))
        .catch(err => res.json(err));

    },
    update: (req, res) => {
        Person.findOneAndUpdate({name: req.params.name}, {name:req.body.name})
        .then(res.redirect('/'))
        .catch(err => res.json(err));

    }
}