'use strict';

var path = require('path');
var config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const logme = require('logme');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { ga_key: config.ga_key, maps_key: config.maps_key });
});

app.post('/sms/receive', (req,res) => {
    if( req.body.AccountSid === config.twilio.sid ) {
        logme.debug('inbound SMS message from '+req.body.From+' : '+req.body.Body)
    } else {
        logme.error('What?! Someone other than Twilio is posting to our endpoint')
        console.dir(req.body)
    }
    res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>')

})

module.exports = app;