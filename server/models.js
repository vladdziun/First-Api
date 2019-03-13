var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1955_dashboard',
    { useNewUrlParser: true });

const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
}, { timestamps: true })


module.exports = mongoose.model('Person', PersonSchema);