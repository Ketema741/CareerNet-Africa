import React, { useReducer } from 'react';
import axios from 'axios';
import internshipContext from './internshipContext';
import internshipReducer from './InternshipReducer';

import {
  GET_INTERNSHIP,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_INTERNSHIPS,
  CLEAR_INTERNSHIPS,
  CLEAR_FILTER,
  INTERNSHIP_ERROR,
  UPDATE_INTERNSHIP,
  GET_INTERNSHIPS
} from '../Types';

const InternshipState = (props) => {
  const initialState = {
    internships: null,
    relatedInternship: null,
    internship: null,
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(internshipReducer, initialState);

  // Get internships
  const getInternships = async () => {
    try {
      const res = await axios.get('/api/internships');
      dispatch({
        type: GET_INTERNSHIPS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: INTERNSHIP_ERROR,
        payload: err.response.msg,

      });
      console.log({'erro':err})
    }
  };
  // Get internship
  const getInternship = async () => {
    try {
      const res = await axios.get('/api/internship');
      dispatch({
        type: GET_INTERNSHIP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: INTERNSHIP_ERROR,
        payload: err.response.msg,

      });
      console.log({'erro':err})
    }
  };

  // update internship
  const updateInternship = async () => {
    try {
      const res = await axios.put('api/internship');
      dispatch({
        type: UPDATE_INTERNSHIP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: INTERNSHIP_ERROR,
        payload: err.response.msg,

      });
      console.log({'erro':err})
    }
  };




  // clear internshipS
  const clearInternships = () => {
    dispatch({ type: CLEAR_INTERNSHIPS });
  };

  

  // set current
  const setCurrent = (internship) => {
    dispatch({ type: SET_CURRENT, payload: internship });
  };

  // set current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // filter internships
  const filterInternships = (text) => {
    dispatch({ type: FILTER_INTERNSHIPS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <internshipContext.Provider
      value={{
        internships: state.internships,
        internships: state.internships,
        internship: state.internship,
        current: state.current,
        filtered: state.filtered,
        getInternships,
        getInternship,
        updateInternship,
        clearInternships,
        setCurrent,
        clearCurrent,
        filterInternships,
        clearFilter,
      }}
    >
      {props.children}
    </internshipContext.Provider>
  );
};

export default InternshipState;
