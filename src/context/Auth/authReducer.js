import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SUPPLIER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    SET_CURRENT,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
  } from '../Types';
  
  const authReducer = (state, action) => {
    switch (action.type) {
      case SUPPLIER_LOADED:
        return {
          ...state,
  
          isSupplierAuthenticated: true,
          supplierLoading: false,
          supplier: action.payload,
        };
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
  
          isSupplierAuthenticated: true,
          supplierLoading: false,
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
  
          isSupplierAuthenticated: true,
          supplierLoading: false,
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
  
          isSupplierAuthenticated: false,
          supplierLoading: false,
          supplier: null,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      case SET_CURRENT:
        return {
          ...state,
          currentSupplier: action.payload,
        };
      default:
        throw new Error(`Unsupported type of: ${action.type}`);
    }
  };
  
  export default authReducer;
  