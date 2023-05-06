import {
    GET_JOBS,
    GET_JOB,
    CLEAR_CURRENT,
    FILTER_JOBS,
    CLEAR_JOBS,
    CLEAR_FILTER,
    JOB_ERROR,
    SET_CURRENT,
  } from '../Types';

  
  const jobReducer = (state, action) => {
    switch (action.type) {
      case GET_JOBS:
        return {
          ...state,
          jobs: action.payload,
          
        };
      case GET_JOBS:
        return {
          ...state,
          jobs: state.jobs.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }),
        };
      
      case GET_JOB:
        return {
          ...state,
          job: action.payload,
        };
      
      case CLEAR_JOBS:
        return {
          ...state,
          jobs: null,
          filtered: null,
          error: null,
          current: null,
        };
      case SET_CURRENT:
        return {
          ...state,
          job: action.payload,
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null,
        };
      case FILTER_JOBS:
        return {
          ...state,
          filtered: state.jobs.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }),
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null,
        };
      case JOB_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        throw new Error(`Unsupported type of: ${action.type}`);
    }
  };
  
  export default jobReducer;