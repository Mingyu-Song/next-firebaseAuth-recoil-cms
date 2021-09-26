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
    const posts = postsSnapshot.docs.map(async (doc) => {
      const { userRef, ...exceptUserRefData } = doc.data();
      const userSnapshot = await userRef.get();
      const user = userSnapshot.data();

      return { ...exceptUserRefData, ...user };
    });

    console.log(Promise.all(posts));
    return Promise.all(posts);
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
    const comments = commentsSnapshot.docs.map(async (doc) => {
      const childCommentsRef = commentsRef
        .doc(doc.id)
        .collection('childComments');
      const childComments = await getChildComments(childCommentsRef);
      return { commentId: doc.id, ...doc.data(), childComments };
    });

    return Promise.all(comments);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getChildComments(childCommentsRef) {
  const childCommentsSnapshot = await childCommentsRef.get();
  const childComments = childCommentsSnapshot.docs.map((doc) => {
    return { commentId: doc.id, ...doc.data() };
  });
  return childComments;
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
