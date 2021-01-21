import { emailLogin, googleLogin, subscribe, errorRegister } from '../../services/index.js';

export const funcLogin = async() => {
  const modalBox = document.getElementById('boxLogin');
  window.onclick = function(event) {
    if (event.target == modal) {
     modalBox.style.display = "none";
    }
  }
  const modal = document.getElementById('box-login') ;
  const goFeed = document.getElementById('feed-in');

  document.getElementById('login-btn').addEventListener("click", (e) => {
    e.preventDefault();


      modal.style.display= 'block';
      modal.style.width = '50%';

    goFeed.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById ('password').value;
    emailLogin(email, password);
    })
  })


  document.getElementById('google-login').addEventListener('click', (e) =>{
    e.preventDefault();
    googleLogin();
  })
    
 
  document.getElementById('subscribe').addEventListener("click", (e) => {
    e.preventDefault();
      let email = document.getElementById('new-email').value;
      let password = document.getElementById('password-register').value;
      let userName = document.getElementById('name').value;

   subscribe(email, password, userName);
   errorRegister ();
  }); 

  const cancelBtn = document.getElementById('cancel-login');
  const closeModal = document.getElementById('close-modal');

    cancelBtn.addEventListener('click', close)
    closeModal.addEventListener('click', close)

      function close() {
        modal.style.display='none'
      }
 };


 

 