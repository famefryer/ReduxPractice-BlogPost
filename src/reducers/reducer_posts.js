import {CREATE_POST,FETCH_POST} from '../actions';
import _ from 'lodash';
export default function(state = {},action){
  switch (action.type) {
    case FETCH_POST:
      return _.mapKeys(action.payload.data,'id');
    case CREATE_POST:
      
    default:
      return state;
  }
}