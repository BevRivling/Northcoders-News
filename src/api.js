import axios from "axios";
const BASE_URL = "https://saucy-mendicant.herokuapp.com/api/";

export const getTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${BASE_URL}topics`);
  return topics;
};

export const getArticles = async () => {
  const {
    data: { articles }
  } = await axios.get(`${BASE_URL}articles`);
  return articles;
};
