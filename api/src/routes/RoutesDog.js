const { Router } = require("express");
const router = Router();
const express = require("express");

const { getFullApi } = require("../controllers/Controllers");

const { Dog, Temperament } = require("../db");

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

module.exports = router;
router.use(express.json());
