import { setAuthHeader, unsetAuthHeader } from 'api/axios';
import { useState, useEffect } from 'react';
import { createUser } from './db';
import firebase, { auth, googleAuthProvider } from './firebase';

const formatAuthUser = (user) => {
  const { uid, displayName, email, photoURL, providerData } = user;
  const userWithoutToken = {
    uid,
    displayName,
    email,
    photoURL,
    provider: providerData[0]?.providerId ?? null,
  };
  createUser({ ...userWithoutToken });
  return {
    ...userWithoutToken,
  };
};

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const token = await authState.getIdToken();
    setAuthHeader(token);

    const formattedUser = formatAuthUser(authState);
    setAuthUser({ token, ...formattedUser });

    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signWithGoogle = async () => {
    try {
      const { user } = await auth.signInWithPopup(googleAuthProvider);
      await authStateChanged(user);
    } catch (e) {
      console.error(e);
    }
  };
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      await authStateChanged(user);
    } catch (e) {
      console.error(e);
    }
  };

  const createUserWithEmailAndPassword = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    unsetAuthHeader();
    authStateChanged(null);
    firebase.auth().signOut().then(clear);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signWithGoogle,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
