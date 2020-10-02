const router = require("express").Router();
const db = require("../data/dbConfigs");

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    return res.status(200).json(cars);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const { vin, make, model, mileage, transmission, title } = req.body;

  if (!req.body || !vin || !make || !model || !mileage)
    return res
      .status(500)
      .json({ message: "Missing required car data to create new car" });

  if (isNaN(mileage))
    return res.status(500).json({ message: "Mileage must be a number" });

  const car = {
    vin: vin.toUpperCase(),
    make: make.toUpperCase(),
    model: model.toUpperCase(),
    mileage: parseInt(mileage),
  };

  if (transmission) car.transmission = transmission.toUpperCase();

  if (title) car.title = title.toUpperCase();

  try {
    const carId = await db("cars").insert(car);
    console.log(carId[0]);
    if (carId.length === 0)
      return res
        .status(500)
        .json({ message: "Could not insert new car to database." });

    return res.status(200).json((await db("cars").where({ id: carId[0] }))[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

module.exports = router;
