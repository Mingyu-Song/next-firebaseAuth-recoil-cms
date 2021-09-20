import { firestoreAdmin, serverTimestamp } from './firebase-admin';

export async function getOrder(uid) {
  try {
    const ref = firestoreAdmin.collection('order');
    const query = ref.where('orderer', '==', uid);
    const snapshot = await query.get();
    console.log(snapshot);
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { messages };
  } catch (error) {
    return { error };
  }
}

export async function createPost({
  uid,
  name,
  createdAt,
  postContent,
  postTitle,
  urlSlug,
}) {
  try {
    const ref = firestoreAdmin.collection('posts').doc();
    const value = {
      uid,
      author: name,
      postContent,
      postTitle,
      createdAt,
      urlSlug,
    };

    await ref.set(value);

    return;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

// export async function getOrder(merchant_uid) {
//   try {
//     const ref = firestoreAdmin.collection("order").doc(merchant_uid);
//     const snapshot = await ref.get();
//     const payment = { id: snapshot.id, ...snapshot.data() };

//     return { ...payment };
//   } catch (error) {
//     return { error };
//   }
// }

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
