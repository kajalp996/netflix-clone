import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    // Clean up subscription when the component
    // is dismounted. This usually happens
    // when a user signs out.
    return () => unsubscribe();
  });

  return (
    <AuthContextProvider value={{ signUp, SignIn, signOut, user }}>
      {children}
    </AuthContextProvider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
