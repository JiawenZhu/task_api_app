import tasks from '../apis/api';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_Task,
  FETCH_tasks,
  FETCH_Task,
  DELETE_Task,
  EDIT_Task
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createTask = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await tasks.post('/tasks', { ...formValues, userId });

  dispatch({ type: CREATE_Task, payload: response.data });
  history.push('/');
};

export const fetchtasks = () => async dispatch => {
  const response = await tasks.get('/tasks');

  dispatch({ type: FETCH_tasks, payload: response.data });
};

export const fetchTask = id => async dispatch => {
  const response = await tasks.get(`/tasks/${id}`);

  dispatch({ type: FETCH_Task, payload: response.data });
};

export const editTask = (id, formValues) => async dispatch => {
  const response = await tasks.patch(`/tasks/${id}`, formValues);

  dispatch({ type: EDIT_Task, payload: response.data });
  history.push('/');
};

export const deleteTask = id => async dispatch => {
  await tasks.delete(`/tasks/${id}`);

  dispatch({ type: DELETE_Task, payload: id });
  history.push('/');
};
