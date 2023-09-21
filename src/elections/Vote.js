// src/App.js

import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { Table, Tag, Input, Form, Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';

function Vote() {
  const [zipCode, setZipCode] = useState('');
  const [form] = Form.useForm();
  const dispatch = useDispatch(); 
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  useEffect(()=>{
    dispatch(incrementPoints(30));
    },[])
  const handleZipCodeSubmit = (newZipCode) => {
    setZipCode(newZipCode);
  };
  const electionData=[
{
  "election": {
    "id": "2000",
    "name": "VIP Test Election",
    "electionDay": "2025-06-06",
    "ocdDivisionId": "ocd-division/country:us"
  },
  "normalizedInput": {
    "line1": "1263 Pacific Avenue",
    "city": "Kansas City",
    "state": "KS",
    "zip": "66102"
  },
  "state": [
    {
      "name": "Kansas",
      "electionAdministrationBody": {
        "name": "Secretary of State",
        "electionInfoUrl": "https://sos.ks.gov/elections/elections.html",
        "electionRegistrationUrl": "https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx",
        "electionRegistrationConfirmationUrl": "https://myvoteinfo.voteks.org/VoterView",
        "absenteeVotingInfoUrl": "https://www.sos.ks.gov/forms//elections/AV1.pdf",
        "votingLocationFinderUrl": "https://myvoteinfo.voteks.org/VoterView",
        "ballotInfoUrl": "https://myvoteinfo.voteks.org/voterview",
        "correspondenceAddress": {
          "line1": "Memorial Hall, 1st Floor, 120 Sw 10th Avenue",
          "city": "Topeka",
          "state": "Kansas",
          "zip": "66612"
        }
      },
      "local_jurisdiction": {
        "name": "Wyandotte County",
        "electionAdministrationBody": {
          "electionInfoUrl": "http://www.wycokck.org/election/",
          "physicalAddress": {
            "line1": "850 STATE AVE",
            "city": "KANSAS CITY",
            "state": "KS",
            "zip": "66101-2502"
          },
          "electionOfficials": [
            {
              "officePhoneNumber": "(913) 573-8500",
              "emailAddress": "election@wycokck.org"
            }
          ]
        },
        "sources": [
          {
            "name": "DemocracyWorks",
            "official": false
          }
        ]
      },
      "sources": [
        {
          "name": "",
          "official": false
        }
      ]
    }
  ],
  "kind": "civicinfo#voterInfoResponse"
}
  ]
const data = electionData.map((contest, index) => ({
  name: contest.election.name,
  electionDay: contest.election.electionDay,
  normalizedInput: contest.normalizedInput,
  electionAdministrationBodyName: contest.state[0].electionAdministrationBody.name,
  electionInfoUrl:contest.state[0].electionAdministrationBody.electionInfoUrl
}));
  const columns = [
    {
      title: 'Election Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Election Day',
      dataIndex: 'electionDay',
      key: 'electionDay',
    },
    {
      title: 'Normalized Address',
      dataIndex: 'normalizedInput',
      key: 'normalizedInput',
      render: (normalizedInput) => (
        `${normalizedInput.line1}, ${normalizedInput.city}, ${normalizedInput.state} ${normalizedInput.zip}`
      ),
    },
    {
      title: 'State Election Administration Body',
      dataIndex: 'electionAdministrationBodyName',
      key: 'electionAdministrationBodyName',
    },
    {
      title: 'State Election Info URL',
      dataIndex: 'electionInfoUrl',
      key: 'electionInfoUrl',
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ),
    },
    // {
    //   title: 'Local Jurisdiction Name',
    //   dataIndex: state[0].local_jurisdiction.name,
    //   key: 'localJurisdictionName',
    // },
    // {
    //   title: 'Local Jurisdiction Election Info URL',
    //   dataIndex: state[0].local_jurisdiction.electionAdministrationBody.electionInfoUrl,
    //   key: 'localJurisdictionInfoUrl',
    //   render: (url) => (
    //     <a href={url} target="_blank" rel="noopener noreferrer">
    //       {url}
    //     </a>
    //   ),
    // },
    // Add more columns as needed
  ];
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setZipCode(values.zipCode);
      const response = await axios.get(
        "http://localhost:8080/rest/getVoterInfo?address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&key=AIzaSyCkwpDwLftA8zMcUtHtVODNFPilUcP2TZ0&electionId=2000"
        // `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${zipCode}`
      );

      // Process the response data and set it in the state
      // setElectionData(mockResponse1);
    } catch (error) {
      console.error('Error fetching election data:', error);
      // setElectionData(mockResponse1);
    }
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setZipCode("124")
  };
  
  return (
    <div className="App" style={{ marginLeft: "10px", marginRight: "20px", height:"50vh",marginTop:isSmallScreen?"150px":""}}>
      <div style={{ width: isSmallScreen?"100%":"40%" }}>
        <Form form={form} onFinish={handleSubmit}>         
            <div style={{ display: "flex" }}>
              Please Select Election:&nbsp;&nbsp;&nbsp;
            <Select
      defaultValue="MLA Test Election"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'VIP Test Election', label: 'VIP Test Election' },
        { value: 'MLA Test Election', label: 'MLA Test Election' },
        { value: 'MP Test Election', label: 'MP Test Election' },
        { value: 'Mayor Test Election', label: 'Mayor Test Election' },
        
      ]}
    />
            </div>         

        </Form>
      </div>
      {zipCode!="" && <><h1>Voter Information</h1>
      <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: isSmallScreen?1:5, // Increase the number of rows per page
      }}
      scroll={{ x: true }}
    />
    </>}
    </div>
  );
}

export default Vote;
