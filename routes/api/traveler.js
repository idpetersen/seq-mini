const router = require("express").Router();
const { Location, Traveller, Trip } = require("../../models");


router.get("/", (req, res) => {
    Traveller.findAll({
    })
      .then((location) => {
        res.json(location);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

module.exports = router;