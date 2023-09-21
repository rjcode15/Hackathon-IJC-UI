// dummyApi.js
let userPoints = 100; // Initial user points

// Simulate an API call to fetch user points
export const fetchUserPoints = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userPoints);
    }, 1000); // Simulate a delay for API response
  });
};

// Simulate an API call to update user points
export const updateUserPoints = (newPoints) => {
  return new Promise((resolve) => {
   
      userPoints = newPoints;
      resolve(newPoints);
    ; // Simulate a delay for API response
  });
};