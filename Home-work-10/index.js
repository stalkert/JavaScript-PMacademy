import userSearch from "./js/service.js";
import refs from "./js/refs.js";
import debounce from "./js/debounce.js";

let followersUrl = "";
let repositoriesUrl = "";

refs.searchForm.addEventListener(
  "input",
  debounce(userSearchInputHandler, 1000)
);

refs.followersBtn.addEventListener("click", showFollowers);
refs.repositoriesBtn.addEventListener("click", showRepositories);

function userSearchInputHandler(e) {
  e.preventDefault();
  clearList();

  const searchQuery = e.target.value;
  userSearch.fetchArticles(searchQuery).then((data) => {
    if (data.message === "Not Found") {
      refs.userInfo.innerHTML = "No result";
    } else {
      refs.userInfo.innerHTML = `<img src= ${data.avatar_url} style="width: 200px;"> <br><h2> ${data.login} </h2>`;

      followersUrl = data.followers_url;
      repositoriesUrl = data.repos_url;
      followersBtn.style.display = "block";
      repositoriesBtn.style.display = "block";
    }
  });
}

function showRepositories() {
  userSearch.fetchArticles(repositoriesUrl, "").then((data) => {
    if (data.message === "Not Found" || data.length === 0) {
      refs.repositoriesList.innerHTML = "No result";
    } else {
      refs.repositoriesList.innerHTML = data.reduce((acc, current) => {
        return (
          acc +
          `<li class = "item"> <a class = "item-link" href=${current.html_url}>${current.name} </a></li>`
        );
      }, "");
    }
  });
  refs.repositoriesBtn.disabled = "false";
}

function showFollowers() {
  userSearch.fetchArticles(followersUrl, "").then((data) => {
    if (data.message === "Not Found" || data.length === 0) {
      refs.followersList.innerHTML = "No result";
    } else {
      refs.followersList.innerHTML = data.reduce((acc, current) => {
        return (
          acc +
          `<li class = "item"> <a class = "item-link" href=${current.html_url}>${current.login} </a></li>`
        );
      }, "");
    }
  });
  refs.followersBtn.disabled = "false";
}
function clearList() {
  refs.repositoriesList.innerHTML = "";
  refs.followersList.innerHTML = "";
  refs.userInfo.innerHTML = "";
  refs.followersBtn.style.display = "none";
  refs.repositoriesBtn.style.display = "none";
}
