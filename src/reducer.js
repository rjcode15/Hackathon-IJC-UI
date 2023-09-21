// reducer.js
const initialState = {
    points: 0,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_POINTS':
        return {
          ...state,
          points: state.points + action.payload,
        };
      case 'DECREMENT_POINTS':
        return {
          ...state,
          points: state.points - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  