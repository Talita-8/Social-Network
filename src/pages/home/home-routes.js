import { About } from "./about.js";
import { Login } from "./login.js";
import { Register } from "./register.js";

export const homeFunctions = () => {
  About();
  document.querySelectorAll(".home-buttons").forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonClicked = event.path[0].innerHTML;
      buttonClicked == "Login" ? Login() : Register();
      document
        .querySelector(".return-button")
        .addEventListener("click", () => {
          About();
        });
    });
  });
};
