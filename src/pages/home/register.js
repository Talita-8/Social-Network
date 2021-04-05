export const Register = () => {
  const container = document.querySelector(".about-text");
  container.innerHTML = `
    <div class="login-area">
    <form>
      <input type="text" placeholder="Escolha um email">
      <input type="password" autocomplete="off" placeholder="Crie uma senha">
      <input class="home-buttons" type="submit" value="Cadastrar">
    </form>
    <button class="return-button" title="Voltar">◄</button>
  </div>
    `;
};
