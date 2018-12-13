import axios from "axios";
const BASE_URL = "https://saucy-mendicant.herokuapp.com/api/";

export const getTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${BASE_URL}topics`);
  return topics;
};

export const getArticles = async (slug, queries) => {
  console.log(queries);
  let query;
  if (queries === "alphabetically") query = "sort_by=title&sort_ascending=true";
  if (queries === "date") query = "sort_by=created_at&sort_ascending=true";
  if (queries === "popularity") query = "sort_by=votes&sort_ascending=true";
  else query = "";
  console.log(query);
  if (slug === "") return [];
  if (slug === "all") {
    const {
      data: { articles }
    } = await axios.get(`${BASE_URL}articles?${query}`);
    return articles;
  } else {
    const {
      data: { msg }
    } = await axios.get(`${BASE_URL}topics/${slug}/articles?${query}`);
    return msg;
  }
};

export const getArticleById = async id => {
  const { data } = await axios.get(`${BASE_URL}articles/${id}`);
  return data;
};

export const getCommentsByArticleId = async id => {
  const {
    data: { comments }
  } = await axios.get(`${BASE_URL}articles/${id}/comments`);
  return comments;
};

export const voteArticleById = async id => {
  const body = { inc_votes: 1 };
  axios.patch(`${BASE_URL}articles/${id}`, body);
};

export const postCommentByArticleId = async (id, comment, user_id = 1) => {
  const commentToPost = { body: comment, user_id: user_id };
  const data = await axios.post(
    `${BASE_URL}articles/${id}/comments`,
    commentToPost
  );
  return data;
};

export const postArticleByTopicSlug = async (article, topicSlug) => {
  console.log(article);
  const data = await axios.post(
    `${BASE_URL}topics/${topicSlug}/articles`,
    article
  );
  return data;
};

export const deleteArticleById = async article_id => {
  const data = await axios.delete(`${BASE_URL}/articles/${article_id}`);
  return data;
};

export const voteCommentById = async comment_id => {
  const body = { inc_votes: 1 };
  const data = await axios.patch(`${BASE_URL}comments/${comment_id}`, body);
  return data;
};

export const deleteCommentById = async comment_id => {
  console.log("deleting comment: ", comment_id);
  const data = await axios.delete(`${BASE_URL}comments/${comment_id}`);
};

export const getUsers = async () => {
  const {
    data: { users }
  } = await axios.get(`${BASE_URL}/users`);
  return users;
};
