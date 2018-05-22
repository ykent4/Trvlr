import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const ADD_MEMORIES = 'ADD_MEMORIES';
export const ADD_MEMORIES_SUCCESS = 'ADD_MEMORIES_SUCCESS';
export const REMOVE_MEMORIES = 'REMOVE_MEMORIES';
export const REMOVE_MEMORIES_SUCCESS = 'REMOVE_MEMORIES_SUCCESS';
export const ADD_BUCKET_LIST = 'ADD_BUCKET_LIST';
export const ADD_BUCKET_LIST_SUCCESS = 'ADD_BUCKET_LIST_SUCCESS';
export const REMOVE_BUCKET_LIST = 'REMOVE_BUCKET_LIST';
export const REMOVE_BUCKET_LIST_SUCCESS = 'REMOVE_BUCKET_LIST_SUCCESS';

export function addMemories(user, destination, usage) {
  return {
    type: ADD_MEMORIES,
    payload: {
      request: {
        method: 'PUT',
        url: '/lists/put_memories',
        data: {
          user: user,
          destination: destination,
          usage: usage
        }
      }
    }
  }
}

export function removeMemories(user, destination, usage) {
  return {
    type: REMOVE_MEMORIES,
    payload: {
      request: {
        method: 'DELETE',
        url: '/lists/remove_memories',
        data: {
          user: user,
          destination: destination,
          usage: usage
        }
      }
    }
  }
}

export function addBucketList(user, destination, usage) {
  return {
    type: ADD_BUCKET_LIST,
    payload: {
      request: {
        method: 'PUT',
        url: '/lists/put_bucket_list',
        data: {
          user: user,
          destination: destination,
          usage: usage
        }
      }
    }
  }
}

export function removeBucketList(user, destination, usage) {
  return {
    type: REMOVE_BUCKET_LIST,
    payload: {
      request: {
        method: 'DELETE',
        url: '/lists/remove_bucket_list',
        data: {
          user: user,
          destination: destination,
          usage: usage
        }
      }
    }
  }
}