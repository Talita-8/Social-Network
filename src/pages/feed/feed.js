import { getAllPosts } from "../../services/index.js";

export const feedFunctions = () => {
 let postContainer = document.querySelector(".all-posts")

  const showPosts = (post,id) => {
    postContainer.innerHTML += `
      <div class="each-post" data-id="${id}">
         <p>${post.post_text}</p>
         <button>Like ${post.likes.length}</button>
         <button>Love ${post.loveIt.length}</button>
      </div>    
    `
  }
  getAllPosts().then((snapshot) => {
    snapshot.forEach((posts) => {
      showPosts(posts.data(), posts.id);
    });
});
};