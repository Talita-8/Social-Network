const db = firebase.firestore();

export const fb = {
  signUp: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  signIn: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  signOut: () => {
    return firebase.auth().signOut();
  },

  signUpGoogle: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((user) => {
      console.log(user.user);
    })
    .catch((err) => {
      alert("Houve algum problema, tente uma conta diferente", err)
    });
  },

  createPost: (postText) => {
    const id = firebase.auth().currentUser.uid;
    const date = new Date();
    db.collection("Posts")
      .add({
        id_user: id,
        date: date.toLocaleString(),
        likes: [],
        loveIt: [],
        post_text: `${postText}`,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert(
          "Houve algum problema, recarregue a página e tente novamente: ",
          error
        );
      });
  },

  getAllPosts: () => {
    return db.collection("Posts").orderBy("date", "desc").get();
  },

  likePost: (postId) => {
    const userId = firebase.auth().currentUser.uid;
    db.collection("Posts")
      .doc(postId)
      .update({
        likes: firebase.firestore.FieldValue.arrayUnion(userId),
      })
      .then(() => console.log("You liked it"))
      .catch((error) => console.log(error));
  },

  lovePost: (postId) => {
    const userId = firebase.auth().currentUser.uid;
    db.collection("Posts")
      .doc(postId)
      .update({
        loveIt: firebase.firestore.FieldValue.arrayUnion(userId),
      })
      .then(() => console.log("You loved it"))
      .catch((error) => console.log(error));
  },
  
  deletePost: (postId) => {
    db.collection("Posts")
      .doc(postId)
      .delete()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert(
          "Houve algum problema, recarregue a página e tente novamente.",
          error
        );
      });
  },
};
