const baseUrl = "https://api.github.com/users/";

export default {
  fetchArticles(query) {
    const requestParams = `${query}`;
    return fetch(baseUrl + requestParams).then((res) => res.json());
  },
};
