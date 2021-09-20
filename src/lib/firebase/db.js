import { firestore } from './firebase';

export async function getPost(author, urlSlug) {
  try {
    console.log(author, urlSlug);
    const postsCol = firestore.collection('posts');
    const postSnapshot = await postsCol
      .where('author', '==', author)
      .where('urlSlug', '==', urlSlug)
      .get();

    const postDoc = postSnapshot.docs[0];
    const post = { ...postDoc.data(), postId: postDoc.id };

    return post;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getPosts() {
  try {
    const postsCol = firestore.collection('posts');
    const postsSnapshot = await postsCol.get();
    const posts = postsSnapshot.docs.map((doc) => doc.data());

    return posts;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getComments(postId) {
  try {
    const commentsRef = firestore
      .collection('posts')
      .doc(postId)
      .collection('comments');
    const commentsSnapshot = await commentsRef.get();
    const comments = commentsSnapshot.docs.map((doc) => doc.data());

    return comments;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createUser({ uid, ...other }) {
  await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...other }, { merge: true });
}

// export function createOrder({ uid, ...params }) {
//   return firestore
//     .collection('order')
//     .doc(uid)
//     .set({ uid, ...params });
// }
