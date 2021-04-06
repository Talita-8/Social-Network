import {
  getAllPosts,
  createPost,
  signOut,
  likePost,
  lovePost
} from "../../services/index.js";

export const feedFunctions = () => {
  let postContainer = document.querySelector(".all-posts");

  const showPosts = (post, id) => {
    postContainer.innerHTML += `
      <div class="each-post" data-id="${id}">
         <p class="post-text">${post.post_text}</p>
         <p class="post-date">${post.date}</p>
         <button title="Curti" class="like-button">Like ${post.likes.length}</button>
         <button title="Amei" class="love-button">Love ${post.loveIt.length}</button>
      </div>    
    `;
  };
  getAllPosts()
    .then((snapshot) => {
      snapshot.forEach((posts) => {
        showPosts(posts.data(), posts.id);
      });
    })
    .then(() => {
      document.querySelectorAll(".like-button")
      .forEach((button) => {
        button.addEventListener("click", (e) => {
          const idPost = e.path[0].parentNode.dataset.id;
          likePost(idPost);
        });
      });
      document.querySelectorAll(".love-button")
      .forEach((button) => {
        button.addEventListener("click", (e) => {
          const idPost = e.path[0].parentNode.dataset.id;
          lovePost(idPost);
        });
      });
    });

  document.querySelector(".post-button")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const post = document.querySelector(".post-input").value;
    createPost(post);
  });

  document.querySelector(".logout-button")
  .addEventListener("click", () => {
    signOut();
  });
};
