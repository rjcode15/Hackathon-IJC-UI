// src/components/ElectionInfo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';

const ElectionInfo = () => {

  const [electionData, setElectionData] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [form] = Form.useForm();
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const dispatch = useDispatch(); 
  
  useEffect(()=>{
  dispatch(incrementPoints(20));
  },[])

  const handleInputChange = (event) => {
    console.log(event);
    setZipCode(event.target.value)
  };

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
  
  const handleSubmit = async () => {
    fetch('http://localhost:8080/v1/elections/upcoming')
    .then((response) => response.json())
    .then((data) => {
      setElectionData(data.elections);
    });
  };

  console.log("electionData", electionData)
  // Render election information
  return (
    <div style={{ marginLeft: "10px", marginRight: "20px", height:"50vh" ,marginTop:isSmallScreen?"150px":""}}>
      <div style={{ width:isSmallScreen?"100%": "40%" }}>
        <Form form={form} onFinish={handleSubmit}>         
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>Please Enter a Zip Code: </span>
              
              <span style={{ flex: 1 }}><Input name="zipCode" value={zipCode}  onChange={handleInputChange} placeholder="Enter Zip Code" /> </span>

              <span style={{ flex: 1 }}><Button type="primary" htmlType="submit">
                Submit</Button></span>
            </div>         

        </Form>
      </div>
      {electionData && <><h2>Election Data</h2>
        <Table columns={columns} dataSource={electionData} 
        pagination={{
          pageSize: 4, 
        }}
        scroll={{ x: true }}
        /></>}

    </div>
  );
};

export default ElectionInfo;
