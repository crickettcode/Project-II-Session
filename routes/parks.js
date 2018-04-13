var express = require('express');
var router = express.Router();
const Park = require('../db/models/Park')


/* GET users listing. */
router.get('/', function (req, res) {
  Park.find({})
    .then((parks) => {
      res.render('parks/index', {
        parks
      })
    })
    .catch((error) => {
      console.log(error)
    })
});

router.get('/:parkId', (req, res) => {
  const parkId = req.params.parkId
  Park.findById(parkId)
    .then((park) => {
      res.render('parks/show', {
        park
      })
    })
    .catch((error) => {
      console.log(error)
    })
})


module.exports = router;
