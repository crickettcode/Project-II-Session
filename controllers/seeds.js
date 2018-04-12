const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = require("../models/Schema");


router.get('/Schema', function (req, res) {




    var newPark = [

        {
            name: "old fourth",
            level: "advanced",
            img: "http://somelink",

        }, {
            name: "a.langford",
            level: "beginner",
            img: "http://somelink",
        }, {
            name: "brooke run",
            level: "intermediate",
            img: "http://somelink",
        }, {
            name: "Hazard County",
            level: "all",
            img: "http://somelink",
        }


    ];

    Schema.create(newSchema, function (err) {
        console.log("SEED: NEW PARKS CREATED");
        res.redirect('/');

        module.exports = router; 