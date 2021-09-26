import { firestoreAdmin } from './firebase-admin';

export async function createPost({
  uid,
  createdAt,
  postContent,
  postTitle,
  urlSlug,
}) {
  try {
    const postRef = firestoreAdmin.collection('posts').doc();
    const userRef = firestoreAdmin.collection('users').doc(uid);
    const postBody = {
      userRef,
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

export async function createChildComment({
  uid,
  name,
  postId,
  commentContent,
  createdAt,
  parentCommentId,
}) {
  try {
    const childCommentRef = firestoreAdmin
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .doc(parentCommentId)
      .collection('childComments')
      .doc();

    const childCommentBody = {
      uid,
      author: name,
      commentContent,
      createdAt,
    };

    await childCommentRef.set(childCommentBody);
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
}) {
  try {
    const commentRef = firestoreAdmin
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .doc();

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
