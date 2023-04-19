import {
    GET_POSTS,
    GET_POST,
    CLEAR_CURRENT,
    FILTER_POSTS,
    CLEAR_POSTS,
    CLEAR_FILTER,
    POST_ERROR,
    SET_CURRENT,
    GET_JOBS
  } from '../Types';

  
  const blogReducer = (state, action) => {
    switch (action.type) {
      case GET_POSTS:
        return {
          ...state,
          blogs: action.payload,
          
        };
      case GET_JOBS:
        return {
          ...state,
          jobs: state.blogs.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }),
        };
      
      case GET_POST:
        return {
          ...state,
          blog: action.payload,
        };
      
      case CLEAR_POSTS:
        return {
          ...state,
          posts: null,
          filtered: null,
          error: null,
          current: null,
        };
      case SET_CURRENT:
        return {
          ...state,
          blog: action.payload,
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null,
        };
      case FILTER_POSTS:
        return {
          ...state,
          filtered: state.blogs.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }),
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null,
        };
      case POST_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        throw new Error(`Unsupported type of: ${action.type}`);
    }
  };
  
  export default blogReducer;