import { firestore } from './firebase';

export async function getUser(uid) {
  try {
    const userRef = firestore.collection('users').doc(uid);
    const userSnapshot = await userRef.get();
    const user = userSnapshot.data();
    if (user) {
      if (!user.displayId) {
        return { hasNotDisplayId: true };
      }
      return user;
    } else {
      return { isNotUser: true };
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function getPost(displayId, urlSlug) {
  try {
    console.log(displayId, urlSlug);
    const postsCol = firestore.collection('posts');
    const postSnapshot = await postsCol
      .where('displayId', '==', displayId)
      .where('urlSlug', '==', urlSlug)
      .get();

    const postDoc = postSnapshot.docs[0];
    const post = { ...postDoc.data(), postId: postDoc.id };
    console.log({ post });
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
      const { uid, ...exceptUserRefData } = doc.data();
      const user = await getUser(uid);
      return { ...exceptUserRefData, ...user };
    });

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
    .set({ uid, ...other, displayId: 'sv002' }, { merge: true });
}

// export function createOrder({ uid, ...params }) {
//   return firestore
//     .collection('order')
//     .doc(uid)
//     .set({ uid, ...params });
// }
