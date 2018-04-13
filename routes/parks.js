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

router.get('/new', (req, res) => {
  res.render('parks/new');
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

router.get('/:id/delete', (req, res) => {
  var parkId = req.params.id;
  Park.findByIdAndRemove(parkId)
    .exec(function (error, user) {

      if (error) {
        console.log("Error while deleting Park with ID of" + parkId);
        return;
      }
      res.redirect('/parks');

    })
})


module.exports = router;
