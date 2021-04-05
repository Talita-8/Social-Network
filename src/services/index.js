
const db = firebase.firestore();

export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return firebase.auth().signOut();
};

export const createPost = (postText) => {
  const id = firebase.auth().currentUser.uid
  const date = new Date();
    db.collection("Posts")
      .add({
        id_user: id,
        date: date.toLocaleString(),
        time: date.getTime(),
        likes: [id],
        loveIt: [id],
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