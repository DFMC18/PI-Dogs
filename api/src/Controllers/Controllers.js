const { axios } = require("axios");

const { Dog, Temperament } = require("../db");

// GET API

const getApiData = async () => {
  const infoApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key`
  );
  const showApi = infoApi.data.map((parameters) => {
    return {
      id: parameters.id,
      name: parameters.name,
      weight: parameters.weight.metric.split("-"),
      Image: parameters.Image.url,
    };
    return showApi;
  });

  const getDataBase = async () => {
    return await Dog.findAll({
      include: {
        model: Temperament,
        atributtes: ["name"],
        through: { atributtes: [] },
      },
    });
  };
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
