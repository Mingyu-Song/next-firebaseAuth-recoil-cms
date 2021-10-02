import { createContext, useContext, Context } from 'react';
import useFirebaseAuth from 'lib/firebase/useFirebaseAuth';

const authUserContext = createContext({
  authUser: null,
  loading: true,
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  const { loading } = auth;
  console.log({ loading });

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
