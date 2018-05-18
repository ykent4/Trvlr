import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const GET_USER = 'GET_USER';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export function getUser(user, cb) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url:`/user/login/${user}`,
      }
    }
  }
};