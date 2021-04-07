import { fb } from "../../services/index.js";

export const feedFunctions = () => {
  let postContainer = document.querySelector(".all-posts");

  const showPosts = (post, id) => {
    const uid = firebase.auth().currentUser.uid;

    if (uid === post.id_user) {
      postContainer.innerHTML += `
      <div data-id="${id}" class="each-post">
         <p class="post-text">${post.post_text}</p>
         <p class="post-date">Você postou isso em: ${post.date}</p>
         <button id="like-${id}" "title="Curti" class="like-button">Like ${post.likes.length}</button>
         <button id="love-${id}" "title="Amei" class="love-button">Love ${post.loveIt.length}</button>
         <button id="delete=${id}" title="Excluir" class="delete-button"> X </button>
      </div>    
    `;
    } else {
      postContainer.innerHTML += `
      <div data-id="${id}" class="each-post">
         <p class="post-text">${post.post_text}</p>
         <p class="post-date">${post.date}</p>
         <button id="like-${id}" "title="Curti" class="like-button">Like ${post.likes.length}</button>
         <button id="love-${id}" "title="Amei" class="love-button">Love ${post.loveIt.length}</button>
      </div>    
    `;
    }
  };

  const likeUpdate = (postId) => {
    const docRef = firebase.firestore().doc(`Posts/${postId}`);
    const likeButton = document.querySelector(`#like-${postId}`);
    docRef.onSnapshot((doc) => {
      const posts = doc.data();
      likeButton.innerHTML = `Like ${posts.likes.length}`;
    });
  };

  const loveUpdate = (postId) => {
    const docRef = firebase.firestore().doc(`Posts/${postId}`);
    const loveButton = document.querySelector(`#love-${postId}`);
    docRef.onSnapshot((doc) => {
      const posts = doc.data();
      loveButton.innerHTML = `Like ${posts.loveIt.length}`;
    });
  };

  fb.getAllPosts()
    .then((data) => {
      data.forEach((posts) => {
        showPosts(posts.data(), posts.id);
      });
    })
    .then(() => {
      document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idPost = e.path[0].parentNode.dataset.id;
          fb.likePost(idPost);
          likeUpdate(idPost);
        });
      });
      document.querySelectorAll(".love-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idPost = e.path[0].parentNode.dataset.id;
          fb.lovePost(idPost);
          loveUpdate(idPost);
        });
      });
      document.querySelectorAll(".delete-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idPost = e.path[0].parentNode.dataset.id;
          confirm("Tem certeza que deseja excluir essa postagem?");
          fb.deletePost(idPost);
        });
      });
    });

  document.querySelector(".post-button").addEventListener("click", (e) => {
    e.preventDefault();
    const post = document.querySelector(".post-input").value;
    fb.createPost(post);
  });

  document.querySelector(".logout-button").addEventListener("click", () => {
    fb.signOut();
  });
};
