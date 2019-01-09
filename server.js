const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { environment: { name, port }, dbms: { host, dbname, dbport }} = require('./config/config');

const app = express();

app.use(bodyParser.json());

process.env.MONGO_URL = `mongodb://${ host }:${ dbport }/${ dbname }`;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.listen(port, () => {
    console.log(`Starting server on ${ name } environment using the port ${ port }`);
});