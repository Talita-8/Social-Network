import { fb } from "../../services/index.js";
let user = firebase.auth().currentUser;

export const Register = () => {
  const container = document.querySelector(".about-text");
  container.innerHTML = `
    <div class="login-area">
    <form>
      <input class="email-input" type="text" placeholder="Escolha um email">
      <input class="password-input" type="password" autocomplete="off" placeholder="Crie uma senha">
      <p class="alert"><p>
      <input class="home-buttons" type="submit" value="Cadastrar">
    </form>
    <button class="return-button" title="Voltar">◄</button>
  </div>
    `;

  document.querySelector(".home-buttons").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector(".email-input").value;
    const password = document.querySelector(".password-input").value;

    fb.signUp(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        const alertArea = document.querySelector("#alert");

        if (error.code === "auth/weak-password") {
          alertArea.innerHTML = "Senha muito fraca";
        }
        if (error.code === "auth/email-already-in-use") {
          alertArea.innerHTML = "Email já cadastrado";
        }
        if (error.code === "auth/invalid-email") {
          alertArea.innerHTML = "Email inválido";
        }
      });
  });
};
