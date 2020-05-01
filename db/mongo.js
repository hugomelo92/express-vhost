const mongoose = require('mongoose');

module.exports = {
    connect: function() {
        return mongoose.connect('mongodb://db:27017/mongode', {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
                .then(result => {
                    console.log('MongoDB Conectado');
                })
                .catch(error => {
                    console.log(error);
                })
    }
}