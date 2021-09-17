import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

// Auth exports
export const authAdmin = admin.auth();

// Firestore exports
export const firestoreAdmin = admin.firestore();
export const serverTimestamp = admin.firestore.FieldValue.serverTimestamp;
