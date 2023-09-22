// src/components/PollingBooths.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Form, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

import { Card } from 'antd';

const PollingBooths = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [address, setAddress] = useState('');
  const [showLoc, setShowLoc] = useState(false);
  const handleInputChange = (event) => {
    setAddress(event.target.value)
  };

  const pollingLocations= [
      {
        locationName: "Markward Recreation Center",
        line1: "400 S. Taney St.",
        city: "Anytown",
        state: "Philadelphia",
        zip: "19146",
        pollingHours: "7:00 AM to 8:00 PM"
      },
      {
        locationName: "Philadelphia City Hall",
        line1: "1400 John F Kennedy Blvd",
        city: "Anytown",
        state: "Philadelphia",
        zip: "19107",
        pollingHours: "6:30 AM to 7:30 PM"
      }
      // ... other polling locations
    ]
  
  const columns = [
    {
      title: 'Location Name',
      dataIndex: 'locationName',
      key: 'locationName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (address) => (
        <div>
          <p>{address.line1}</p>
          <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
        </div>
      ),
    },
    {
      title: 'Polling Hours',
      dataIndex: 'pollingHours',
      key: 'pollingHours',
    },
  ];

  const handleSubmit = () => {
    console.log();
    setShowLoc(true);
    // fetch('http://localhost:8080/v1/elections/polling-location-info?electionId=8077&address='+address)
    //   .then((response) => response.json())
    //   .then((data) => {
    //         console.log(data);
    //   })
  };
  
  // Format the data into an array of objects for the table
  const data = pollingLocations.map((location, index) => ({
    key: index,
    locationName: location.locationName,
    address: {
      line1: location.line1,
      city: location.city,
      state: location.state,
      zip: location.zip,
    },
    pollingHours: location.pollingHours,
  }));


  return (

    <div style={{ height:isSmallScreen?"150vh":"200vh" , backgroundImage:`url('/image7.webp')`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>
      <Form  onFinish={handleSubmit}  style={{ width:isSmallScreen?"100%": "40%" }}>
        <div style={{ display: "flex", marginTop:"50px" }}>
                <span style={{ flex: 1, color:"#33333" }}><b>Please Enter Address: </b></span>
                <span style={{ flex: 1 }}><Input name="address" value={address}  onChange={handleInputChange} placeholder="Enter Address" /> </span>
                <span style={{ flex: 1 }}><Button type="primary" htmlType="submit">
                  Submit</Button></span>
        </div>  
       </Form>
     {showLoc && <> <h2 style={{marginTop:"50px"}}>Polling Locations</h2>
   <div style={{display:"flex", columnGap:"20px",  justifyContent:"center",}}>
      { pollingLocations.map((location) => (
        <>
           <Card
              bordered={false}
              style={{             
                width:250,      
                height:300, 
                fontSize:"16px",
                
              }}
            >
              <p>Location Name: {location.locationName}</p>
              <p>{location.line1}</p>
              <p>{location.city}</p>
              <p>{location.state}</p>
              <p>{location.zip}</p>
            </Card>
            <br/>
          </>
      ) )}
      </div>
      </>}
</div>
  )


};

export default PollingBooths;
