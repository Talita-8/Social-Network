import { getPosts } from '../../services/index.js';
import { reactPost } from './buttons-post.js'

export const Feed = () => {
    // Coloque sua página
   
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div class='nav-bar'> 
   <nav>
     <ul>
        <li id='logo-feed'></><img src='./pages/feed/img/nav-bar/hands.png' alt'hand-logo'>TPM</li>
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
      </figure>
      
      <form class="post-area">
        <input id="write-post" class="write-post" type="text" placeholder="Poste uma ideia, uma dica ou uma oportunidade para mulheres. Aqui é um espaço seguro!">
        <input type="submit" id='post-it' class="button-feed" value="Postar">
      </form>
    </div>
    <div id='posts'></div>
    <div id='comments'></div>
    `;
   
  const loadPost = (post) => {
  
    const loop = Array.from(Array(post.length).keys());
    loop.forEach(() =>
    document.getElementById('posts').innerHTML  += `
     <section class='each-post' data-id='${post.id}'> 
        <p>
          ${post.data().post_text}
        </p>
      <ul>
        <li data-id='${post.data().likes}'><button id='like' title='Curti' class='like react-button'>☺︎ ${post.data().likes.length}</button></li>
        <li data-id='${post.data().loveIt}'><button id='love' title='Amei' class='love react-button'>♡ ${post.data().loveIt.length}</button></li>
        <li><button id='delete' title='Apagar' class='delete react-button'>X</button></li>
       </ul> 
        </section>
     `
    ) }

    getPosts().then(querySnapshot => {
      querySnapshot.forEach((post) => {
        loadPost(post)
      });
    reactPost();
 });
  
  return rootElement;
};

 