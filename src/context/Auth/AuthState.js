import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SUPPLIER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SET_CURRENT,
  LOGIN_FAIL,
  LOGOUT,
} from '../Types';

const AuthState = (props) => {
  const initialState = {
    supplier: null,

    currentSupplier: null,
    token: localStorage.token,

    isSupplierAuthenticated: null,
    supplierLoading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register supplier
  const supplierRegister = async (formData, images) => {
    formData.supplierImage = images;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('api/suppliers', formData, config);
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
      const res = await axios.post(`api/suppliers/image`, id_obj, config);
      console.log(res);
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
      console.log('error ', err.response);
    }
  };

  // login supplier
  const supplierLogin = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/authsupplier', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });


      loadSupplier();
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

  // load supplier
  const
    loadSupplier = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      const res = await axios.get('api/authsupplier');

      try {
        dispatch({
          type: SUPPLIER_LOADED,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    };

  // set current
  const setCurrent = (supplier) => {
    dispatch({ type: SET_CURRENT, payload: supplier });
  };

  // set token on initial app loading
  setAuthToken(state.token);

  // load supplier on first run or refresh
  if (state.supplierLoading) {

    loadSupplier();
  }

  // 'watch' state.token and set headers and local storage on any change
  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

  // AuthState Provider Component
  return (
    <AuthContext.Provider
      value={{
        supplier: state.supplier,
        currentSupplier: state.currentSupplier,
        error: state.error,
        isSupplierAuthenticated: state.isSupplierAuthenticated,
        supplierRegister,
        setCurrent,
        supplierLogin,
        logout,
        loadSupplier,
        removeImage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
