import {
  getAllPosts,
  createPost,
  signOut,
  likePost,
  lovePost,
} from "../../services/index.js";

export const feedFunctions = () => {
  let postContainer = document.querySelector(".all-posts");

  const showPosts = (post) => {
  const uid = firebase.auth().currentUser.uid

  if(uid === post.id_user){
    postContainer.innerHTML += `
      <div data-id="${post.id}" class="each-post">
         <p class="post-text">${post.post_text}</p>
         <p class="post-date">${post.date}</p>
         <button id="like-${post.id}" "title="Curti" class="like-button">Like ${post.likes.length}</button>
         <button id="love-${post.id}" "title="Amei" class="love-button">Love ${post.loveIt.length}</button>
         <button id="delete=${post.id}" title="Excluir" class="delete-button"> X </button>
      </div>    
    `} else {
      postContainer.innerHTML += `
      <div data-id="${post.id}" class="each-post">
         <p class="post-text">${post.post_text}</p>
         <p class="post-date">${post.date}</p>
         <button id="like-${post.id}" "title="Curti" class="like-button">Like ${post.likes.length}</button>
         <button id="love-${post.id}" "title="Amei" class="love-button">Love ${post.loveIt.length}</button>
      </div>    
    `
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
 
  getAllPosts()
    .then((data) => {
      data.forEach((posts) => {
        showPosts(posts.data());
      });
    })
    .then(() => {
      document.querySelectorAll(".like-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idPost = e.path[0].parentNode.dataset.id;
          likePost(idPost);
          likeUpdate(idPost);
        });
      });
      document.querySelectorAll(".love-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idPost = e.path[0].parentNode.dataset.id;
          lovePost(idPost);
          loveUpdate(idPost);
        });
      });
    });

  document.querySelector(".post-button").addEventListener("click", (e) => {
    e.preventDefault();
    const post = document.querySelector(".post-input").value;
    createPost(post)
  });

  document.querySelector(".logout-button").addEventListener("click", () => {
    signOut();
  });
};
