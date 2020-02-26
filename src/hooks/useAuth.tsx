import React, { useState, useContext, createContext, useEffect } from 'react';
import { History } from 'history';
import { useNetwork } from './useNetwork';
import routes from '../utils/routes';

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
  signIn: (e: History) => Promise<void>;
  signOut: (e: History) => void;
}

const authContext = createContext<UseAuthProps>({
  user: { name: '', email: '' },
  token: '',
  signOut: () => '',
  signIn: () => Promise.resolve(),
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
  const [, forceRerender] = useState();
  const [token, setToken] = useState('');
  const [user, setUser] = useState({ name: '', email: '' });
  const { isOnline } = useNetwork();

  const signIn = async (history: History): Promise<void> => {
    try {
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
      history.push(routes.catalog);
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = (history: History): void => {
    localStorage.clear();
    setToken('');
    setUser({ name: '', email: '' });
    history.push(routes.home);
  };

  const localAuthRefresh = (): void => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken('');
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
    const { gapi } = window;
    if (gapi) {
      gapi.load('auth2', function() {
        gapi.auth2
          .init({ [clientId]: process.env.REACT_APP_GOOGLE_CLIENT_ID })
          .then(_onInit, _onError);
      });
    } else {
      // eslint-disable-next-line
      // @ts-ignore
      window.myFunc = forceRerender;
    }

    // we include the empty array which means this only runs once on component mount
    // since we are simply getting an item from AsyncStorage that is sufficient for now
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline, window.gapi]);

  // Return the token, user object, and auth methods
  return {
    token,
    user,
    signIn,
    signOut,
  };
}
