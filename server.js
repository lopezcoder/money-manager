const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { environment: { name, port }, dbms: { host, dbname, dbport }} = require('./config/config');
const notificationService = require('./services/notification-service');
const incomeService = require('./services/income-service');
const expenseService = require('./services/expense-service');

const app = express();

app.use(bodyParser.json());
app.use('/notifications', notificationService);
app.use('/incomes', incomeService);
app.use('/expenses', expenseService);

process.env.MONGO_URL = `mongodb://${ host }:${ dbport }/${ dbname }`;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.listen(port, () => {
    console.log(`Starting server on ${ name } environment using the port ${ port }`);
});