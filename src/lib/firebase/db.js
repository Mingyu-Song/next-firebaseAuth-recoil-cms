import { firestore } from './firebase';

export async function getPosts() {
  try {
    const ref = firestore.collection('posts');
    const snapshot = await ref.get();
    const posts = snapshot.docs.map((doc) => doc.data());

    return posts;
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
