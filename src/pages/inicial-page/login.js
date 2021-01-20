import { funcLogin } from './login-functions.js'

window.onload = () => {
document.getElementById('main-page').innerHTML = `

  <div class= "register" id="register">
    <form action="#" method="post" name= "data-register">
      <fieldset class='subscribe-box'>
        <fieldset class="group">
          <div class="inputs-logins">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" value="">
          </div>
        </fieldset>
        <div class="inputs-logins">
          <label for="email">E-mail:</label>
          <input type="text" id="new-email" name="new-email" value="">
        </div>
        <div class="inputs-logins">
          <label for="password-register">Senha:</label>
          <input type="password" id="password-register" placeholder="mínimo de 6 caracteres" autocomplete="off" name="password-register" value="">
        </div>
        
        <button class="subscribe-btn" id="subscribe" type="submit" name="submit">Cadastrar</button>
      </fieldset>
    </form>
  </div>

   <button id="google-login" class="google-login"><img class='logo-google'src="./img/google-icon.jpg">Continuar com o Google</button>
   <button id="login-btn" class="login-btn">Login</button> 

  <section id='login-button' class="half-screen">
    <div id="box-login" class="modal">

      <form class="modal-box animate" action="" method="post">
          <div class="img-container">
            <span id="close-modal" class="close" title="Fechar">&times;</span>
          </div>

            <div class="container">
              <label for="E-mail"><b>E-mail</b></label>
              <input id="email" type="text" placeholder="Ex.: maeterrinha@gmail.com" name="email" required>
              <label for="psw"><b>Password</b></label>
              <input id="password" type="password" placeholder="Ex.: 1234" autocomplete="off" name="psw" required>

              <button id="feed-in" class="feed-in" type="submit">Login</button>
            </div>

           <div class="container">
             <button id="cancel-login" type="button" class="cancel-btn">Cancel</button>
           </div>
      </form>
    </div>
  </section>
  <div class="inicial-page" id="inicial-page">
    <span id="about-link" class="about-link">Venha fazer parte!<span>
  </div>
  `
funcLogin();
}
  
