'use client';

import axios, {endpoints} from 'src/utils/axios';

import {setSession} from './utils';

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({email, password}) => {
  try {
    const params = {email, password};

    const res = await axios.post(endpoints.auth.signIn, params);
    const {token} = res.data;

    if (!token) {
      throw new Error('Access token not found in response');
    }

    setSession(token);
  } catch (error) {
    console.error('Error during sign in:', error);
    setSession(null);
    throw error;
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({email, password, name, surname}) => {
  const params = {
    email,
    password,
    name,
    surname,
  };

  try {
    await axios.post(endpoints.auth.signUp, params);
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async () => {
  try {
    await setSession(null);
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
};
