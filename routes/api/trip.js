const router = require("express").Router();
const { Location, Traveller, Trip } = require("../../models");


router.post("/", (req, res) =>{
    Trip.create(req.body)
    .then((newTrip) => res.status(200).json(newTrip))
    .catch((err) => {
        res.status(400).json(err);
    })
})

router.delete("/:id", async (req, res) => {
    try {
      const tripDelete = await Trip.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!tripDelete) {
        res.status(404).json({ message: "No trip with this id!!!!" });
        return;
      }
      res.status(200).json(tripDelete);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;