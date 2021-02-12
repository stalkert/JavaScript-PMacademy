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
  console.log(searchQuery);
  userSearch.fetchArticles(searchQuery).then((data) => {
    console.log(data);
    if (data.message === "Not Found") {
      console.log("No result");
    } else {
      refs.userInfo.innerHTML =
        "<img src=" +
        `${data.avatar_url}` +
        ">" +
        "<br>" +
        "<h2>" +
        `${data.login}` +
        "</h2>";
      followersUrl = data.followers_url;
      repositoriesUrl = data.repos_url;
      followersBtn.style.display = "block";
      repositoriesBtn.style.display = "block";
    }
  });
}

function showRepositories() {
  userSearch.fetchArticles(repositoriesUrl, "").then((data) => {
    console.log(data);
    if (data.message === "Not Found") {
      console.log("No result");
    } else {
      refs.repositoriesList.innerHTML = data.reduce((acc, current) => {
        return (
          acc +
          "<li>" +
          "<a href=" +
          `${current.html_url}` +
          ">" +
          `${current.name}` +
          "</a>" +
          "</li>"
        );
      }, "");
    }
  });
}

function showFollowers() {
  userSearch.fetchArticles(followersUrl, "").then((data) => {
    console.log(data);
    if (data.message === "Not Found") {
      console.log("No result");
    } else {
      refs.followersList.innerHTML = data.reduce((acc, current) => {
        return (
          acc +
          "<li>" +
          "<a href=" +
          `${current.html_url}` +
          ">" +
          `${current.login}` +
          "</a>" +
          "</li>"
        );
      }, "");
    }
  });
}
function clearList() {
  refs.repositoriesList.innerHTML = "";
  refs.followersList.innerHTML = "";
  refs.userInfo.innerHTML = "";
  refs.followersBtn.style.display = "none";
  refs.repositoriesBtn.style.display = "none";
}
