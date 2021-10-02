import { setAuthHeader, unsetAuthHeader } from 'api/axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { createUser, getUser } from './db';
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
  const router = useRouter();

  const authStateChanged = async (authState) => {
    if (!authState) {
      //ex) 로그아웃
      setLoading(false);
      return;
    }

    const { hasNotDisplayId } = await getUser(authState.uid);
    if (hasNotDisplayId) {
      signOut();
      alert('id가없어용!!!!id받는곳으로 라우팅');
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

  const signWithGoogle = async () => {
    try {
      const { user } = await auth.signInWithPopup(googleAuthProvider);

      // await authStateChanged(user);
    } catch (e) {
      console.error(e);
    }
  };
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      // await authStateChanged(user);
    } catch (e) {
      console.error(e);
    }
  };

  const createUserWithEmailAndPassword = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    unsetAuthHeader();
    // authStateChanged(null);
    auth.signOut().then(clear);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
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
