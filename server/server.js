// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/budget'
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const budgetModel = require("../models/chart_schema");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));


app.get('/budget', (req, res) => {
    //res.sendFile('budget-data2.json', {root: __dirname});

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        budgetModel.find({})
        .then((data) => {
            res.json(data);
            mongoose.connection.close();
        }).catch((connectionError) => {
            console.log(connectionError);
        }).catch((connectionError) => {
            console.log(connectionError);
        })
    })

});

app.post('/budget', (req, res) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        var budgetEntity = {
            title: req.body.title,
            budget: req.body.budget,
            backgroundColor: req.body.backgroundColor
        };

        budgetModel.insertMany(budgetEntity)
        .then((data) => {
            res.json(data);
            mongoose.connection.close();
            console.log("Successfully communicated with database; connection closed");
        }).catch((connectionError) => {
            console.log(connectionError);
        })
    }).catch((connectionError) => {
            console.log(connectionError);
        })
})


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});