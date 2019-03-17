const controllers = require('./controllers.js');

module.exports = app => {
  app
    .get('/api/persons', controllers.getAllPersons)
    .get('/api/persons/:id', controllers.getOnePerson)
    .post('/api/persons', controllers.createPerson)
    .put('/api/persons/:id', controllers.updatePerson)
    .delete('/api/persons/:id', controllers.deletePerson)
}