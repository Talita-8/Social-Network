
export const Feed = () => {
  const rootElement = document.createElement("div");
  rootElement.classList.add("feed-container")
  rootElement.innerHTML = `
   <section class="feed-menu">
    <ul>
      <li><button class="logout-button">Sair</button></li>
    </ul>
   </section>
   <div class="write-post-area">
    <textarea
    cols="50" rows="5" placeholder="Poste uma ideia, uma dica ou uma oportunidade para mulheres."></textarea>
    <button class="post-button">Postar</button>
   <article class="all-posts"></article>
   </div>
    `
  return rootElement;
};

