const { axios } = require("axios");

const { Dog, Temperament } = require("../db");

// GET API

const getApiData = async () => {
    const infoApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key`);
};

