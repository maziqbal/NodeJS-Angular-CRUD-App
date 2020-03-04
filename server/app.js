let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Product = require('./model/userModel'),
    bodyParser = require('body-parser'),
    cors = require('cors');

let routes = require('./routes/routes');

/** Connect to MongoDB database */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db-users', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
mongoose.set('debug', true);
/** Middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors( {origin: 'http://localhost:4201'}));
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

/** Server */
app.listen(port);

console.log('Nodejs Mongodb RESTful API started on: ' + port);
