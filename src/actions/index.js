import axios from 'axios'

export const FETCH_POST = "FETCH_POST";
const ROOTURL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FORFAME123'
export function fetchPost(){
  const request = axios.get(`${ROOTURL}/posts${API_KEY}`);
  return {
    type:FETCH_POST,
    payload:request
  };
}
