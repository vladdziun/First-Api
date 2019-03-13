const logic = require('./controllers.js')

module.exports = function (app) {

    app.get('/', logic.root)
    app.post('/new', logic.add)
    app.delete('/:name', logic.remove)
    app.get('/:name', logic.find)
    app.put('/:name', logic.update)
}