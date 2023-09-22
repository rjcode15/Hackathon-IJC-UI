// src/components/PollingBooths.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';
const PollingBooths = () => {
//   const [pollingLocations, setPollingLocations] = useState([]);
const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const pollingLocations= [
      {
        locationName: "Anytown Community Center",
        line1: "456 Elm St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        pollingHours: "7:00 AM to 8:00 PM"
      },
      {
        locationName: "Downtown Library",
        line1: "789 Oak St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
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
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${zipCode}&fields=pollingLocations`
//         );

//         // Process the response data and set polling locations in the state
//         setPollingLocations(mockResponse);
//       } catch (error) {
//         console.error('Error fetching polling locations:', error);
//         setPollingLocations(mockResponse);
//       }
//     };

//     if (zipCode) {
//       fetchData();
//     }
//   }, [zipCode]);

//   if (!zipCode) {
//     return <div>Enter a zip code to find polling locations</div>;
//   }

//   if (pollingLocations.length === 0) {
//     return <div>No polling locations found for this zip code</div>;
//   }

  // Render polling locations
  return (
    <div style={{  height:isSmallScreen?"150vh":"200vh" , backgroundImage:`url('/image7.webp')`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}}>
      <h2>Polling Locations</h2>
      <Table columns={columns} dataSource={data}  pagination={{
          pageSize: isSmallScreen?3:5, // Increase the number of rows per page
        }}
        scroll={{ x: true }} />
    </div>
  );
};

export default PollingBooths;
