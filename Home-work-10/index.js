import userSearch from "./js/service.js";
import refs from "./js/refs.js";
import debounce from "./js/debounce.js";

let followersUrl = "";
let repositoriesUrl = "";
const followersList = 'followersList';
const repositoriesList = 'repositoriesList';
const followersBtn = 'followersBtn';
const repositoriesBtn = 'repositoriesBtn';

refs.searchForm.addEventListener(
  "input",
  debounce(userSearchInputHandler, 1000)
);

refs.followersBtn.addEventListener("click", showUserData(followersList, followersBtn));
refs.repositoriesBtn.addEventListener("click", showUserData(repositoriesList, repositoriesBtn));

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
      refs.followersBtn.style.display = "block";
      refs.repositoriesBtn.style.display = "block";
    }
  });
}

function showUserData(dataTypeList, dataTypeBtn) {
  return () => {
    userSearch.fetchArticles(dataTypeList === followersList ? followersUrl : repositoriesUrl, "").then((data) => {
      if (data.message === "Not Found" || data.length === 0) {
        refs[dataTypeList].innerHTML = "No result";
      } else {
        refs[dataTypeList].innerHTML = data.reduce((acc, current) => {
          return (
            acc +
            `<li class = "item"> <a class = "item-link" href=${current.html_url}>${dataTypeList === followersList ? current.login : current.name} </a></li>`
          );
        }, "");
      }
    });
  refs[dataTypeBtn].disabled = "false";
 }
}

function clearList() {
  refs.repositoriesList.innerHTML = "";
  refs.followersList.innerHTML = "";
  refs.userInfo.innerHTML = "";
  refs.followersBtn.removeAttribute("disabled");
  refs.repositoriesBtn.removeAttribute("disabled");
  refs.followersBtn.style.display = "none";
  refs.repositoriesBtn.style.display = "none";
}
