export const Register = () => {
  const container = document.querySelector(".about-text");
  container.innerHTML = `
    <div class="login-area">
    <form>
      <input type="text" placeholder="Digite seu email">
      <input type="password" placeholder="Digite sua senha">
      <input type="submit" value="Cadastrar">
    </form>
    <button class="return-button" title="Voltar">◄</button>
  </div>
    `;
};
