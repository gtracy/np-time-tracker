'use strict';

var path = require('path');
var config = require('./config');
const express = require('express');


const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { ga_key: config.ga_key, maps_key: config.maps_key });
});

module.exports = app;