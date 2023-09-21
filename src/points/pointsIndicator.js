import React, { useEffect, useState } from 'react';
import { fetchUserPoints } from './api'; // Import the dummy API
import './pointsIndicator.css';
const PointsIndicator = (userPoints) => {
  

  return (
    <div className="points-indicator">
      {userPoints !== null ? (
        <span>Your Points: {userPoints}</span>
      ) : (
        <span>Loading points...</span>
      )}
    </div>
  );
};

export default PointsIndicator;
