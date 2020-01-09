import React, { useState, useContext, createContext, useEffect } from 'react';

interface ProvideAuthProps {
  children: React.ReactChild;
}

export interface AuthError {
  error: string;
  details: string;
}

export interface User {
  name: string;
  email: string;
}

export interface UseAuthProps {
  user: User;
  token: string;
  signIn: (e: React.MouseEvent) => Promise<string>;
  signOut: (e: React.MouseEvent) => void;
}

const authContext = createContext<UseAuthProps>({
  user: { name: '', email: '' },
  token: '',
  signOut: () => console.log(),
  signIn: () => Promise.resolve(''),
});

const clientId = 'client_id';

// Provider component that wraps your app and makes auth object available
// to any child component that calls useAuth().
export function ProvideAuth({
  children,
}: ProvideAuthProps): React.ReactElement {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = (): UseAuthProps => useContext(authContext);

// Provider hook that creates auth object and handles state
function useProvideAuth(): UseAuthProps {
  const [token, setToken] = useState();
  const [user, setUser] = useState({ name: '', email: '' });

  const signIn = async (): Promise<string> => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    const googleUser = await auth2.signIn();
    const profile = googleUser.getBasicProfile();
    const profileData = {
      name: profile.getGivenName(),
      email: profile.getEmail(),
    };
    const idToken = googleUser.getAuthResponse().id_token;
    localStorage.setItem('token', idToken);
    localStorage.setItem('user', JSON.stringify(profileData));
    setToken(idToken);
    setUser(profileData);
    return token;
  };

  const signOut = (): void => {
    localStorage.clear();
    setToken(false);
    setUser({ name: '', email: '' });
  };

  const localAuthRefresh = (): void => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken(false);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  // Set token and user on mount
  useEffect(() => {
    const _onInit = (): void => {
      localAuthRefresh();
    };
    const _onError = (err: AuthError): void => {
      console.log('error', err);
    };
    window.gapi.load('auth2', function() {
      window.gapi.auth2
        .init({ [clientId]: process.env.REACT_APP_GOOGLE_CLIENT_ID })
        .then(_onInit, _onError);
    });
    // we include the empty array which means this only runs once on component mount
    // since we are simply getting an item from AsyncStorage that is sufficient for now
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return the token, user object, and auth methods
  return {
    token,
    user,
    signIn,
    signOut,
  };
}
