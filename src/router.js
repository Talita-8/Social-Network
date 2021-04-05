import { onNavigate } from "./utils/history.js";
import { Feed } from "./pages/feed/index.js";
import { Home } from "./pages/home/home.js";
import { homeFunctions } from "./pages/home/home-routes.js";
import { feedFunctions } from "./pages/feed/feed.js";
const user = firebase.auth().currentUser;

const routeRender = () => {
  const rootDiv = document.getElementById("root");
  const routes = {
    "/": Home,
    "/feed": Feed
  };
  rootDiv.innerHTML = "";
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener("popstate", routeRender);
window.addEventListener("load", (event) => {
  event.preventDefault();
  if(!user){
    onNavigate("/"); 
    homeFunctions();
  } else {
    onNavigate("/feed")
    feedFunctions();
  }
});
