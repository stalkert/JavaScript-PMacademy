"use strict";

import userSearch from "./js/service.js";
import refs from "./js/refs.js";
import debounce from "./js/debounce.js";

refs.searchForm.addEventListener(
  "input",
  debounce(userSearchInputHandler, 1000)
);

function userSearchInputHandler(e) {
  e.preventDefault();
  clearListRepositoriesAndFollowers();

  const searchQuery = e.target.value;
  console.log(searchQuery);
  userSearch.fetchArticles(searchQuery).then((data) => {
    console.log(data);
  });
}

function clearListRepositoriesAndFollowers() {
  refs.repositoriesList.innerHTML = "";
  refs.followersList.innerHtml = "";
}
