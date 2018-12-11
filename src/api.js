import axios from "axios";
const BASE_URL = "https://saucy-mendicant.herokuapp.com/api/";

export const getTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${BASE_URL}topics`);
  return topics;
};

export const getArticles = async slug => {
  if (slug === "") return [];
  if (slug === "all") {
    const {
      data: { articles }
    } = await axios.get(`${BASE_URL}articles`);
    return articles;
  } else {
    const {
      data: { msg }
    } = await axios.get(`${BASE_URL}topics/${slug}/articles`);
    return msg;
  }
};

export const getArticleById = async id => {
  const { data } = await axios.get(`${BASE_URL}articles/${id}`);
  return data;
};
