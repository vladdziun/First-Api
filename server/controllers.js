const Person = require('./models.js');

module.exports = {
  
  getAllPersons: (req, res) => {
    Person.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  createPerson: (req, res) => {
    const DATA = req.body;
    Person.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  deletePerson: (req, res) => {
    const ID = req.params.id;
    Person.findOneAndRemove({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOnePerson: (req, res) => {
    const ID = req.params.id;
    Person.findOne({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  updatePerson: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Person.findOneAndUpdate({_id: ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}

