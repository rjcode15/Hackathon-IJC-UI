// src/components/ElectionInfo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';

const ElectionInfo = () => {

  const [electionData, setElectionData] = useState({});
  const [zipCode, setZipCode] = useState('');
  const [form] = Form.useForm();
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const dispatch = useDispatch(); 
  useEffect(()=>{
  dispatch(incrementPoints(20));
  },[])
  const mockResponse =
  {
    kind: "civicinfo#voterInfoResponse",
    election: {
      id: "2000",
      name: "2020 General Election",
      electionDay: "2020-11-03",
      ocdDivisionId: "ocd-division/country:us"
    },
    normalizedInput: {
      line1: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    pollingLocations: [
      {
        address: {
          locationName: "Anytown Community Center",
          line1: "456 Elm St",
          city: "Anytown",
          state: "CA",
          zip: "12345"
        },
        pollingHours: "7:00 AM to 8:00 PM"
      }
    ],
    contests: [
      {
        type: "General",
        office: "President of the United States",
        level: [
          "country"
        ],
        candidates: [
          {
            name: "John Doe",
            party: "Democratic",
            candidateUrl: "https://johndoe.com",
            channels: [
              {
                type: "Facebook",
                id: "johndoe2020"
              },
              {
                type: "Twitter",
                id: "johndoe2020"
              }
            ]
          },
          {
            name: "Jane Smith",
            party: "Republican",
            candidateUrl: "https://janesmith.com",
            channels: [
              {
                type: "Facebook",
                id: "janesmith2020"
              },
              {
                type: "Twitter",
                id: "janesmith2020"
              }
            ]
          }
        ]
      }
    ]
  }
  const mockResponse1 =
  {
    "elections": [
      {
        "id": "2000",
        "name": "VIP Test Election",
        "electionDay": "2025-06-06",
        "ocdDivisionId": "ocd-division/country:us"
      },
      {
        "id": "8073",
        "name": "City of Ocala Municipal Election",
        "electionDay": "2023-09-19",
        "ocdDivisionId": "ocd-division/country:us/state:fl/place:ocala"
      },
      {
        "id": "8078",
        "name": "Memphis Municipal Election",
        "electionDay": "2023-10-05",
        "ocdDivisionId": "ocd-division/country:us/state:tn/place:memphis"
      }
    ],
    "kind": "civicinfo#electionsQueryResponse"
  }


  useEffect(() => {
    console.log("electionData")
  }, [electionData])



  console.log("i am in election info")
  // const columns = [
  //     {
  //       title: 'Contest Type',
  //       dataIndex: 'type',
  //       key: 'type',
  //     },
  //     {
  //       title: 'Office',
  //       dataIndex: 'office',
  //       key: 'office',
  //     },
  //     {
  //       title: 'Candidates',
  //       dataIndex: 'candidates',
  //       key: 'candidates',
  //       render: (candidates) => (
  //         <div>
  //           {candidates.map((candidate) => (
  //             <Tag key={candidate.name}>{candidate.name}</Tag>
  //           ))}
  //         </div>
  //       ),
  //     },
  //   ];

  // Format the data into an array of objects for the table
  // const data = mockResponse.contests.map((contest, index) => ({
  //   key: index,
  //   type: contest.type,
  //   office: contest.office,
  //   candidates: contest.candidates,
  // }));
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Election Day',
      dataIndex: 'electionDay',
      key: 'electionDay',
    },
    {
      title: 'Division Id',
      dataIndex: 'ocdDivisionId',
      key: 'ocdDivisionId',

    },
  ];
  const data = mockResponse1.elections.map((contest, index) => ({
    id: contest.id,
    name: contest.name,
    electionDay: contest.electionDay,
    ocdDivisionId: contest.ocdDivisionId,
  }));
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setZipCode(values.zipCode);
      const response = await axios.get(
        "http://localhost:8080/rest/getElectionInfo?key=AIzaSyCkwpDwLftA8zMcUtHtVODNFPilUcP2TZ0"
        // `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${zipCode}`
      );

      // Process the response data and set it in the state
      setElectionData(mockResponse1);
    } catch (error) {
      console.error('Error fetching election data:', error);
      setElectionData(mockResponse1);
    }
  };



  // if (!zipCode) {
  //   return <div>Enter a zip code to find election info</div>;
  // }

  // if (!electionData) {
  //   return <div>Loading election info...</div>;
  // }
  console.log("electionData", electionData)
  // Render election information
  return (
    <div style={{ marginLeft: "10px", marginRight: "20px", height:"50vh" ,marginTop:isSmallScreen?"150px":""}}>
      <div style={{ width:isSmallScreen?"100%": "40%" }}>
        <Form form={form} onFinish={handleSubmit}>         
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>Please Enter a Zip Code: </span>
              <span style={{ flex: 1 }}><Input placeholder="Enter Zip Code" /> </span>
              <span style={{ flex: 1 }}><Button type="primary" htmlType="submit">
                Submit</Button></span>
            </div>         

        </Form>
      </div>
      {zipCode != "" && <><h2>Election Data</h2>
        <Table columns={columns} dataSource={data} 
        pagination={{
          pageSize: isSmallScreen?1:5, // Increase the number of rows per page
        }}
        scroll={{ x: true }}
        /></>}

    </div>
  );
};

export default ElectionInfo;
