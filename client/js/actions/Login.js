import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS';

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url:`/user/login/${user}`,
      },
    }
  }
};

export function signUpUser(user) {
  return {
    type: SIGN_UP_USER,
    payload: {
      request: {
        method: 'POST',
        url:`/user/signup`,
        data: {
          user: user,
        }
      },
    }
  }
};