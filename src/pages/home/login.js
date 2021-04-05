export const Login = () => {
  const container = document.querySelector(".about-text");
  container.innerHTML = `
    <div class="login-area">
      <form>
        <input type="text" placeholder="Digite seu email">
        <input type="password" autocomplete="off" placeholder="Digite sua senha">
        <input class="home-buttons" type="submit" value="Entrar">
      </form>
      <button class="return-button" title="Voltar">◄</button>
    </div>
    `;
};
