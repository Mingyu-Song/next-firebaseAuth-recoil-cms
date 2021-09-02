import { firestore } from "./firebase";

export async function createUser({ uid, ...other }) {
  await firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...other }, { merge: true });
}

export function createOrder({ uid, ...params }) {
  return firestore
    .collection("order")
    .doc(uid)
    .set({ uid, ...params });
}
