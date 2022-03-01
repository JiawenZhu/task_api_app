import _ from 'lodash';
import {
  FETCH_Task,
  FETCH_tasks,
  CREATE_Task,
  EDIT_Task,
  DELETE_Task
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_tasks:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_Task:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_Task:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_Task:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_Task:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
