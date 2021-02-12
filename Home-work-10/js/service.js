export default {
  fetchArticles(query, baseUrl = "https://api.github.com/users/") {
    const requestParams = `${query}`;
    return fetch(baseUrl + requestParams)
      .then((res) => res.json())
      .catch((error) => console.log("error"));
  },
};
