import React, { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    //Empty
  }, []);

  const signIn = async (userId, password) => {
    //SIGN IN
  };

  const signOut = async () => {
    //SIGN OUT
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authenticated,
        error,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
