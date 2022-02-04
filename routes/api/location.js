const router = require("express").Router();
const { Location, Traveler, Trip } = require("../../models");

router.get("/", (req, res) => {
  Location.findAll({
    include: [Traveler, Trip],
  })
    .then((location) => {
      res.json(location);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  try {
    const getLocation = await Location.findByPk(req.params.id, {
      include: [Traveler, Trip],
    });
    if (!getLocation) {
      res.status(404).json({ message: "No location with this id" });
      return;
    }
    res.status(200).json(getLocation);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  Location.create(req.body)
    .then((newLocation) => res.status(200).json(newLocation))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  try {
    const locationDelete = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!locationDelete) {
      res.status(404).json({ message: "No location with this id!!!!" });
      return;
    }
    res.status(200).json(locationDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
