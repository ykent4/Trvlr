import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const GET_DESTINATIONS = 'GET DESTINATIONS';


export const GET_DESTINATIONS_SUCCESS = 'GET DESTINATIONS_SUCCESS';

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

// export function getDestinations() {
//   // return (dispatch) => {
//     return axios.get("http://localhost:4002/travelboard/api/destination")
//       .then((response) => {
//         console.log('response ::', response.data);
//         dispatch(getDestinationsAction(response.data));
//       }
//     );
//   // }
// };

// export type Action =
//     {
//         type: GET_DESTINATIONS,
//         payload: {
//             request: AxiosRequestConfig
//         }
//     } | {
//         type: 'APP_GET_VALUES_SUCCESS',
//         payload: AxiosResponse
//     } | {
//         type: 'APP_INCREMENT',
//         payload: {
//             request: AxiosRequestConfig
//         }
//     }