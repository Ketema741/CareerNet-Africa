import React, { useReducer } from 'react';
import axios from 'axios';
import jobContext from './jobContext';
import jobReducer from './jobReducer';

import {
  GET_JOBS,
  GET_JOB,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_JOBS,
  CLEAR_JOBS,
  CLEAR_FILTER,
  JOB_ERROR,
  UPDATE_JOB,
} from '../Types';

const JobState = (props) => {
  const initialState = {
    jobs: null,
    relatedJob: null,
    job: null,
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(jobReducer, initialState);

  // Get jobs
  const getJobs = async () => {
    try {
      const res = await axios.get('/api/jobs');
      dispatch({
        type: GET_JOBS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg,

      });
      console.log({'erro':err})
    }
  };

  // update jobs
  const updateJob = async () => {
    try {
      const res = await axios.put('api/jobs');
      dispatch({
        type: UPDATE_JOB,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg,

      });
      console.log({'erro':err})
    }
  };



  // Get job
  const getJob = async (_id, category) => {
    filterJobs(category)
    try {
      const res = await axios.get(`api/jobs/${_id}`);
      dispatch({
        type: GET_JOB,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.msg,
      });
    }
  };



  // clear posts
  const clearJobs = () => {
    dispatch({ type: CLEAR_JOBS });
  };

  

  // set current
  const setCurrent = (job) => {
    dispatch({ type: SET_CURRENT, payload: job });
  };

  // set current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // filter jobs
  const filterJobs = (text) => {
    dispatch({ type: FILTER_JOBS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <jobContext.Provider
      value={{
        jobs: state.jobs,
        job: state.job,
        current: state.current,
        filtered: state.filtered,
        getJobs,
        getJob,
        getJobs,
        updateJob,
        clearJobs,
        setCurrent,
        clearCurrent,
        filterJobs,
        clearFilter,
      }}
    >
      {props.children}
    </jobContext.Provider>
  );
};

export default JobState;
