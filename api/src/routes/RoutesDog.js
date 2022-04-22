const { Router } = require("express");
const router = Router();
const express = require("express");
const { Dog, Temperament } = require("../db");
const { getFullApi } = require("../controllers/Controllers");

router.get("/dogs", async (req, res) => {
  const name = req.query.name;
  const fullApi = await getFullApi();

  if (name) {
    const dogName = await fullApi.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );

    dogName.length
      ? res.status(200).send(dogName)
      : res.status(404).send("Dog not found");
  } else {
    res.status(200).send(fullApi);
  }
});

router.get("/dogs/:id", async (req, res) => {
  const id = req.params.id;
  const dogId = await getFullApi();

  if (id) {
    const idDog = await dogId.filter((dog) => dog.id == id);
    idDog.length
      ? res.status(200).send(idDog)
      : res.status(404).send("Dog not found");
  }
});

router.post("/dogs", async (req, res) => {
  const {
    name,
    height_max,
    height_min,
    weight_max,
    weight_min,
    life_span,
    image,
    temperament,
    createInDb,
  } = req.body;

  try {
    const createDog = await Dog.create({
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      image: image
        ? image
        : "https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg",
      life_span,
      createInDb,
    });

    let temperamentDb = await Temperament.findAll({
      where: { name: temperament },
    });

    createDog.addTemperament(temperamentDb);
    res.status(200).send("Breed Created successfully");
  } catch (error) {
    res.send("Error: Post failed");
  }
});

module.exports = router;
router.use(express.json());
