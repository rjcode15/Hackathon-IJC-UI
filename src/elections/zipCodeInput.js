// src/components/ZipCodeInput.js

import React, { useState } from 'react';

const ZipCodeInput = ({ onZipCodeSubmit }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Zip Code:
          <Input placeholder="Enter a Zip code" onChange={(e)=>{setZipCode(e.target.value)}}/>
          {/* <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          /> */}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ZipCodeInput;
