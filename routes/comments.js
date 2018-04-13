var express = require('express');
var router = express.Router();
const Comment = require('../db/models/Comment')


/* GET users listing. */
router.get('/', function (req, res) {
    Comment.find({})
        .then((comments) => {
            res.render('comments/index', {
                comments
            })
        })
        .catch((error) => {
            console.log(error)
        })
});



module.exports = router;