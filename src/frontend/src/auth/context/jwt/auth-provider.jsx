'use client';

import {useCallback, useEffect, useMemo} from 'react';

import {useSetState} from 'src/hooks/use-set-state';

import axios, {endpoints} from 'src/utils/axios';

import {STORAGE_KEY} from './constant';
import {AuthContext} from '../auth-context';
import {isValidToken, jwtDecode, setSession} from './utils';
import {signOut} from "./action";

// ----------------------------------------------------------------------

export function AuthProvider({children}) {
  const {state, setState} = useSetState({
    user: null,
    loading: true,
  });

  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(STORAGE_KEY);
      if (accessToken && isValidToken(accessToken)) {
        await setSession(accessToken);
        const email = jwtDecode(accessToken).sub
        const res = await axios.get(endpoints.users.getUser(email));
        const user = res.data;

        setState({user: {...user, accessToken}, loading: false});
      } else {
        setState({user: null, loading: false});
        await signOut();
      }
    } catch (error) {
      console.error(error);
      setState({user: null, loading: false});
    }
  }, [setState]);

  useEffect(() => {
    checkUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user
        ? {
          id: state.user?.id,
          email: state.user?.email,
          name: state.user?.name,
          content: state.user?.content,
          surname: state.user?.surname,
        }
        : null,
      checkUserSession,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',

    }),

    [checkUserSession, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
