import { getPosts, Like, Dislike, Love, Unlove, DeletePost } from '../../services/index.js';

export const Feed = () => {
    // Coloque sua página
   
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div class='nav-bar'> 
   <nav>
     <ul>
        <li id='logo-feed'></><img src='./pages/feed/img/nav-bar/rocket-icon.png' alt'rocket-logo'>TPM</li>
       <!-- <li id='profile-edit'>Meu perfil</li>
        <li>Feed</li> 
        <li>Comunidades</li> -->
        <li id='log-out'>Sair</li>
     </ul>
   </nav>
  </div>
    <div id="profile">
      <figure class='figure-profile'>
        <img class="picture-profile" src="./pages/feed/img/profile/profile-exemple.jpg" alt="foto do perfil"> 
        <p id="name-profile">Keiti Peurri</p>
      </figure>
      
      <form>
        <input id="write-post" class="write-post" type="text" placeholder="Poste uma ideia, uma dica ou uma oportunidade">
        <input type="submit" id='post-it' class="button-feed" value="Postar">
      </form>
    </div>
    <div id='posts'></div>
    `;
   
  const loadPost = (post) => {
  
    const loop = Array.from(Array(post.length).keys());
    loop.forEach(() =>
    document.getElementById('posts').innerHTML  += `
     <section data-id='${post.id}'> 
        <p>
          ${post.data().post_text}
        </p>
      <ul>
        <li data-id='${post.data().likes}'><button id='like' title='Curti' class='like react-button'><img src='./pages/feed/img/reacts/like.png' alt='botao de curtir'>${post.data().likes.length}</button></li>
        <li data-id='${post.data().loveIt}'><button id='love' title='Amei' class='love react-button'><img src='./pages/feed/img/reacts/heart.png' alt='botao de amar'>${post.data().loveIt.length}</button></li>
        <li><button id='delete' title='Apagar' class='delete react-button'>X</button></li>
       </ul> 
        </section>
     `
    )  }

    getPosts().then(querySnapshot => {
      querySnapshot.forEach((post) => {
        loadPost(post)
      });
 
const allLike = document.querySelectorAll('.like');
allLike.forEach((button) => {
  button.addEventListener('click', (e) => {
    let container = e.target.parentNode.parentNode.parentNode;
     let idLike = e.target.parentNode
     Like(container.dataset.id);
     console.log('Você curtiu isso');
       if(firebase.auth().currentUser.uid == idLike.dataset.id)
         Dislike(container.dataset.id);
         console.log('Você descurtiu isso');    
         });
     });


   const allLove = document.querySelectorAll('.love');
   allLove.forEach((button) => {
      button.addEventListener('click', (e) => {
        let container = e.target.parentNode.parentNode.parentNode;
        let idLove = e.target.parentNode
        Love(container.dataset.id);
        console.log('Você amou isso');
        if(firebase.auth().currentUser.uid == idLove.dataset.id)
           Unlove(container.dataset.id);
           console.log('Você descurtiu isso');    
        });
      });

   const deleteBtn = document.querySelectorAll('.delete');
      deleteBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
        let container = e.target.parentNode.parentNode.parentNode;
        const question = window.confirm('Você realmente deseja apagar?');
        if (question === true) {
          DeletePost(container.dataset.id);
         }
      });
    });  
 });
  return rootElement;
};