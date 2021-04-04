import { onNavigate } from "./utils/history.js";
import { Feed } from "./pages/feed/index.js";
import { Home } from "./pages/home/home.js";
import { Login } from "./pages/home/login.js";
import { Register } from "./pages/home/register.js";
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
  document
  .querySelectorAll(".home-buttons")
  .forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonClicked = event.path[0].innerHTML
      buttonClicked == "Login" ? Login() : Register()
    })
  })
}
});
