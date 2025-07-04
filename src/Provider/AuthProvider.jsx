import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase.config';

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const githubSignInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }

  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    users,
    loading,
    userLogin,
    userRegister,
    googleSignInUser,
    githubSignInUser
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUsers(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  }, [])
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;