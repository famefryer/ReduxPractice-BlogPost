import axios from 'axios'

export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST"
export const DELETE_POST = "DELETE_POST"
const ROOTURL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FORFAME123'
export function fetchPosts(){
  const request = axios.get(`${ROOTURL}/posts${API_KEY}`);
  return {
    type:FETCH_POSTS,
    payload:request
  };
}

export function createPost(values,callback){
  const request = axios.post(`${ROOTURL}/posts${API_KEY}` , values).then(() => callback())

  return {
    type:CREATE_POST,
    payload:request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOTURL}/posts/${id}${API_KEY}`)

  return {
    type:FETCH_POST,
    payload:request
  }
}

export function deletePost(id,callback){
  const request = axios.delete(`${ROOTURL}/posts/${id}${API_KEY}`).then(() => callback())

  return {
    type:DELETE_POST,
    payload:id
  }
}
