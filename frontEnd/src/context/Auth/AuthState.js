import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SET_CURRENT,
  LOGIN_FAIL,
  LOGOUT,
} from '../Types';

const AuthState = (props) => {
  const initialState = {
    user: null,
    token: localStorage.token,
    currentUser: null,

    isUserAuthenticated: null,
    userLoading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const userRegister = async (formData, images) => {
    formData.userImage = images || []; // default to an empty array if images is null or undefined
;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('http://localhost:433/api/users', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data,
      });
    }
  };

  const removeImage = async (public_id) => {
    const id_obj = {
      public_id: public_id,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`api/users/image`, id_obj, config);
      console.log(res);
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
      console.log('error ', err.response);
    }
  };

  // login user
  const userLogin = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
   

    try {
      const res = await axios.post('http://localhost:6000/api/auth-user', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });


      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });

      console.log('error ', err.response);
    }
  };

  // logout
  const logout = () => dispatch({ type: LOGOUT });

  // load user
  const
    loadUser = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      const res = await axios.get('api/authuser');

      try {
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    };

  // set current
  const setCurrent = (user) => {
    dispatch({ type: SET_CURRENT, payload: user });
  };

  // set token on initial app loading
  setAuthToken(state.token);

  // load user on first run or refresh
  if (state.userLoading) {

    loadUser();
  }

  // 'watch' state.token and set headers and local storage on any change
  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

  // AuthState Provider Component
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        isUserAuthenticated: state.isUserAuthenticated,
        userRegister,
        setCurrent,
        userLogin,
        logout,
        loadUser,
        removeImage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
