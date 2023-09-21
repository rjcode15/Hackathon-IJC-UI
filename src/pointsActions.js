// pointsActions.js
export const incrementPoints = (amount) => {
    return {
      type: 'INCREMENT_POINTS',
      payload: amount,
    };
  };
  
  export const decrementPoints = (amount) => {
    return {
      type: 'DECREMENT_POINTS',
      payload: amount,
    };
  };
  