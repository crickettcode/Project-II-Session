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

router.post('/', (req, res) => {
  var newParkFromForm = req.body;
  var park = new Park({
    name: newParkFromForm.name,
    street: newParkFromForm.street,
    state: newStateFromForm.state,
    zip: newZipFromForm.zip,
    level: newLevelFromForm.level,
    hours: newHoursFromForm.hours,
  });

  park.save(function (err, park) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/parks');
  });

});

router.get('/:parkId/edit', (req, res) => {
  const parkId = req.params.parkId

  Park.findById(parkId)
    .then((park) => {
      res.render('parks/edit', {
        park,
        pageTitle: 'Park_Update'
      })
    })
    .catch((error) => {
      console.log(error)

    })
})

router.put('/:parkId', (req, res) => {
  const parkId = req.params.parkId
  const updatedParkInfo = req.body

  console.log(updatedParkInfo)

  Park.findByIdAndUpdate(parkId, updatedParkInfo)
    .then((park) => {
      console.log(park)
      res.redirect(`/parks`)
    })

})


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
