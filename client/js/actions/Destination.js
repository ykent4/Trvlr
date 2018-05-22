import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const GET_DESTINATIONS = 'GET_DESTINATIONS';
export const GET_DESTINATIONS_SUCCESS = 'GET_DESTINATIONS_SUCCESS';


export function getDestinations() {
  return {
    type: GET_DESTINATIONS,
    payload: {
      request: {
        url:'/destination'
      }
    }
  }
};


