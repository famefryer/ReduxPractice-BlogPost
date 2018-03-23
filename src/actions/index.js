import axios from 'axios'

export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST"
const ROOTURL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FORFAME123'
export function fetchPost(){
  const request = axios.get(`${ROOTURL}/posts${API_KEY}`);
  return {
    type:FETCH_POST,
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
