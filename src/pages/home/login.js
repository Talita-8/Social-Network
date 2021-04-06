import { signIn } from "../../services/index.js";
let user = firebase.auth().currentUser;
 
export const Login = () => {
  const container = document.querySelector(".about-text");
  container.innerHTML = `
    <div class="login-area">
      <form>
        <input class="email-input" type="text" placeholder="Digite seu email">
        <input class="password-input" type="password" autocomplete="off" placeholder="Digite sua senha">
        <input class="home-buttons" type="submit" value="Entrar">
      </form>
      <button class="return-button" title="Voltar">◄</button>
    </div>
    `;

    document
    .querySelector(".home-buttons")
    .addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.querySelector(".email-input").value
      const password = document.querySelector(".password-input").value
  
      signIn(email, password)
      .then((userCredential) => {
        console.log(userCredential.user)
      })
      .catch((err) => console.error(err.code, err.message));
    });
};
