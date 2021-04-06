
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
        likes: [],
        loveIt: [],
        post_text: `${postText}`
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
  };

  export const getAllPosts = () => {
    return db.collection("Posts")
    .orderBy("date", "desc")
    .get();
  };

  export const likePost = (postId) => {
    const userId = firebase.auth().currentUser.uid
    db.collection("Posts").doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(userId),
    })
    .then(() => console.log("You liked it"))
    .catch((error) => console.log(error))
  };

  export const lovePost = (postId) => {
    const userId = firebase.auth().currentUser.uid
    db.collection("Posts").doc(postId)
    .update({
      loveIt: firebase.firestore.FieldValue.arrayUnion(userId),
    })
    .then(() => console.log("You loved it"))
    .catch((error) => console.log(error))
  };

  export const deletePost = (postId) => {
    db.collection('Posts').doc(postId)
      .delete()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Houve algum problema, recarregue a página e tente novamente.", error);
      });
  };