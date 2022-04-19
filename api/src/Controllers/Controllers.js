const axios = require("axios");

const { Dog, Temperament } = require("../db");

const { API_KEY } = process.env;

const getFullApi = async () => {
  const infoApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const showApi = infoApi.data.map((parameters) => {
    return {
      id: parameters.id,
      name: parameters.name,
      weight: parameters.weight.metric.split("-"),
      image: parameters.image.url,
    };
  });
  return showApi;
};

const getDataBase = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      atributtes: ["name"],
      through: { atributtes: [] },
    },
  });
};
const join = async () => {
  const fullApi = getFullApi();
  const DataBase = getDataBase();
  const hibrido = fullApi.concat(DataBase);
  return hibrido;
};

module.exports = {
  getFullApi,
  getDataBase,
  join,
};
