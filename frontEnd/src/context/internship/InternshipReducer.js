import {
    GET_INTERNSHIPS,
    GET_INTERNSHIP,
    CLEAR_CURRENT,
    FILTER_INTERNSHIPS,
    CLEAR_INTERNSHIPS,
    CLEAR_FILTER,
    INTERNSHIP_ERROR,
    SET_CURRENT,
  } from '../Types';

  
  const InternshipReducer = (state, action) => {
    switch (action.type) {
      case GET_INTERNSHIPS:
        return {
          ...state,
          internships: state.internships.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }),
        };
      
      case GET_INTERNSHIP:
        return {
          ...state,
          internship: action.payload,
        };
      
      case CLEAR_INTERNSHIPS:
        return {
          ...state,
          internships: null,
          filtered: null,
          error: null,
          current: null,
        };
      case SET_CURRENT:
        return {
          ...state,
          internship: action.payload,
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null,
        };
      case FILTER_INTERNSHIPS:
        return {
          ...state,
          filtered: state.internships.filter(({ title, category }) => {
            const testString = `${title}${category}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          }),
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null,
        };
      case INTERNSHIP_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        throw new Error(`Unsupported type of: ${action.type}`);
    }
  };
  
  export default InternshipReducer;