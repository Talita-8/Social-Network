
const db = firebase.firestore();

export const createPost = (postText, id) => {
    const date = new Date();
    db.collection("Posts")
      .get({
        id_user: `${id}`,
        date: date.toLocaleString(),
        time: date.getTime(),
        likes: [],
        loveIt: [],
        post_text: `${postText}`
      })
      .then(() => {
        alert("Mensagem postada!");
      })
      .catch((error) => {
        alert(
          "Houve algum problema, recarregue a página e tente novamente: ",
          error
        );
      });
  };

  export const getAllPosts = () => {
    return db.collection("Posts")
    .orderBy("date", "desc")
    .get();
  };