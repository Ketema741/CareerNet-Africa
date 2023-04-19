import React, { useReducer } from 'react';
import axios from 'axios';
import blogContext from './blogContext';
import blogReducer from './blogReducer';

import {
  GET_POSTS,
  GET_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_POSTS,
  CLEAR_POSTS,
  CLEAR_FILTER,
  POST_ERROR,
  UPDATE_POST,
  GET_JOBS
} from '../Types';

const Blogstate = (props) => {
  const initialState = {
    blogs: null,
    jobs: null,
    relatedPost: null,
    blog: null,
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Get blogs
  const getBlogs = async () => {
    try {
      const res = await axios.get('/api/blogs');
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,

      });
      console.log({'erro':err})
    }
  };

  // update blogs
  const updatePost = async () => {
    try {
      const res = await axios.put('api/blogs');
      dispatch({
        type: UPDATE_POST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,

      });
      console.log({'erro':err})
    }
  };



  // Get blog
  const getBlog = async (_id, category) => {
    filterBlogs(category)
    try {
      const res = await axios.get(`api/blogs/${_id}`);
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };


  // get jobs
  const getJobs = (text) => {
    dispatch({ type: GET_JOBS, payload: text });
  };

  // clear posts
  const clearPosts = () => {
    dispatch({ type: CLEAR_POSTS });
  };

  

  // set current
  const setCurrent = (blog) => {
    dispatch({ type: SET_CURRENT, payload: blog });
  };

  // set current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // filter blogs
  const filterBlogs = (text) => {
    dispatch({ type: FILTER_POSTS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <blogContext.Provider
      value={{
        blogs: state.blogs,
        jobs: state.jobs,
        blog: state.blog,
        current: state.current,
        filtered: state.filtered,
        getBlogs,
        getBlog,
        getJobs,
        updatePost,
        clearPosts,
        setCurrent,
        clearCurrent,
        filterBlogs,
        clearFilter,
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default Blogstate;
