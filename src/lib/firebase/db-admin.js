import getOrderTime from "lib/helpFunctions/getOrderTime";
import { firestoreAdmin, serverTimestamp } from "./firebase-admin";

export async function getOrder(uid) {
  try {
    const ref = firestoreAdmin.collection("order");
    const query = ref.where("orderer", "==", uid);
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

export async function createOrder({ uid, ...params }) {
  try {
    const order_id = getOrderTime();
    const ref = firestoreAdmin.collection("order").doc(order_id);
    await ref.set({
      ...params,
      createdAt: serverTimestamp(),
      order_id,
      uid,
      order_status: "결제 대기",
    });

    return { order_id };
  } catch (error) {
    return { error };
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
    const ref = firestoreAdmin.collection("order").doc(merchant_uid);
    await ref.set(value, { merge: true });
  } catch (error) {
    return { error };
  }
}

export async function updateMessage(merchant_uid, value) {
  try {
    const ref = firestoreAdmin.collection("messages").doc(merchant_uid);
    await ref.set(value, { merge: true });
  } catch (error) {
    return { error };
  }
}
