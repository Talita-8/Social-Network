import {
  getAllPosts,
  createPost,
  signOut,
  likePost,
  lovePost,
} from "../../services/index.js";

export const feedFunctions = () => {
  let postContainer = document.querySelector(".all-posts");

  const showPosts = (post, id) => {
    postContainer.innerHTML += `
      <div data-id="${id}" class="each-post">
         <p class="post-text">${post.post_text}</p>
         <p class="post-date">${post.date}</p>
         <button id="like-${id}" "title="Curti" class="like-button">Like ${post.likes.length}</button>
         <button id="love-${id}" "title="Amei" class="love-button">Love ${post.loveIt.length}</button>
      </div>    
    `;
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
        showPosts(posts.data(), posts.id);
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
