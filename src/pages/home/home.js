import { About } from "./about.js";
import { Login } from "./login.js";
import { Register } from "./register.js";

export const Home = () => {
  const rootElement = document.createElement("div");
  rootElement.classList.add("main-container");
  rootElement.innerHTML = `
    <div class="main-itens">
      <img src="../images/women.png">
       <div class=about-text>
         <h1>Sobre</h1>
         <p>
            Além da Sobrevivência - Um Espaço Seguro para Mulheres 
            “Sororidade é a ideia de solidariedade entre mulheres, 
            que se apoiam para conquistar a liberdade e a igualdade que desejam. 
            É respeitar, ouvir e dar voz umas às outras sem julgamentos”
            Esse espaço é destinado às mulheres que procuram um espaço seguro 
            para compartilhar planos, sonhos, desafios, oportunidades e encontrar
            apoio e fortalecimento. Há potência em mulheres construtoras de igualdade.
         </p>
         <button class="home-buttons login">Login</button>
         <button class="home-buttons subscribe">Inscreva-se</button>
        <div>
    </div>
    `;
  return rootElement;
};

export const homeFunctions = () => {
  About();
  document.querySelectorAll(".home-buttons").forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonClicked = event.path[0].innerHTML;
      buttonClicked == "Login" ? Login() : Register();
      document
        .querySelector(".return-button")
        .addEventListener("click", () => {
          window.location.reload()
        });
    });
  });
};