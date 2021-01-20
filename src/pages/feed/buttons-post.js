import { Like, Dislike, Love, Unlove, DeletePost } from '../../services/index.js';

export const reactPost = async() => {

    const allLike = document.querySelectorAll('.like');

    allLike.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.target.classList.add('liked')
        let container = e.target.parentNode.parentNode.parentNode;
         let idLike = e.target.parentNode
         Like(container.dataset.id);
         console.log('Você curtiu isso');
           
         if(firebase.auth().currentUser.uid == idLike.dataset.id){
             Dislike(container.dataset.id);
             e.target.classList.remove('liked')
             console.log('Você descurtiu isso');  
            }
           });
         })
    
    
       const allLove = document.querySelectorAll('.love');
       allLove.forEach((button) => {
          button.addEventListener('click', (e) => {
            let container = e.target.parentNode.parentNode.parentNode;
            let idLove = e.target.parentNode
            Love(container.dataset.id);
            console.log('Você amou isso');
            if(firebase.auth().currentUser.uid == idLove.dataset.id){
               Unlove(container.dataset.id);
               console.log('Você descurtiu isso');    }
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
  }