import { firestoreAdmin } from './firebase-admin';

export async function createPost({
  uid,
  name,
  createdAt,
  postContent,
  postTitle,
  urlSlug,
}) {
  try {
    const postRef = firestoreAdmin.collection('posts').doc();
    const postBody = {
      uid,
      author: name,
      postContent,
      postTitle,
      createdAt,
      urlSlug,
    };

    await postRef.set(postBody);
  } catch (error) {
    throw new Error(error);
  }
}

export async function createComment({
  uid,
  name,
  postId,
  commentContent,
  createdAt,
  parentCommentId,
}) {
  try {
    let commentRef = firestoreAdmin
      .collection('posts')
      .doc(postId)
      .collection('comments');
    if (parentCommentId) {
      commentRef.doc(parentCommentId).collection('childComments').doc();
    } else {
      commentRef.doc();
    }

    const commentBody = {
      uid,
      author: name,
      postId,
      commentContent,
      createdAt,
    };

    await commentRef.set(commentBody);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateOrder(merchant_uid, value) {
  try {
    const ref = firestoreAdmin.collection('order').doc(merchant_uid);
    await ref.set(value, { merge: true });
  } catch (error) {
    return { error };
  }
}

export async function updateMessage(merchant_uid, value) {
  try {
    const ref = firestoreAdmin.collection('messages').doc(merchant_uid);
    await ref.set(value, { merge: true });
  } catch (error) {
    return { error };
  }
}
