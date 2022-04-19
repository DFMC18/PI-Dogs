const { Router } = require("express");
const router = Router();
const express = require("express");
const axios = require("axios");
const { Temperament } = require("../db");
const { route } = require("./RoutesDog");
const { API_KEY } = process.env;

router.get("/temperament", async (req, res) => {
  const apiTemps = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const temperaments = apiTemps.data.map((t) => t.temperament);
  const temps = temperaments.toString();
  const recolectado = temps.split(",");
  recolectado.forEach((tm) => {
    let i = tm.trim();
    Temperament.findOrCreate({
      where: { name: i },
    });
  });
  const allTemperaments = await Temperament.findAll();
  res.status(200).send(allTemperaments);
});

router.use(express.json());
module.exports = router;
