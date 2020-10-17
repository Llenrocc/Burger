const express = require("express");
const router = express.Router();
const burger = require('../models/burger'); // Import the model burger.js

router.get('/', function (req, res) {
    res.redirect('/index');
});

// Index page
router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// create a burger
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

//devour the burger
router.post('/burger/eat:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

// Export routes for server.js
module.exports = router;