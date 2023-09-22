// src/components/ElectionInfo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';

const ElectionInfo = () => {

  const [electionData, setElectionData] = useState([]);
  const [zipCode, setZipCode] = useState(false);
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
    // setZipCode(event.target.value)
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
   
  ];
  const elections =[
    {
      id:"001",
      name:"MUNICIPAL PRIMARY"
    },
    {
      id:"002",
      name:"MUNICIPAL Election"
    },
  ]

  const handleSubmit = async () => {
    setZipCode(true);
    // fetch('http://localhost:8080/v1/elections/upcoming')
    // .then((response) => response.json())
    // .then((data) => {
    //   setElectionData(data.elections);
    // });
  };

  console.log("electionData", electionData)
  // Render election information
  return (
    <div style={{ height:isSmallScreen?"150vh":"200vh" , backgroundImage:`url('/image7.webp')`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>

      <div style={{ width:isSmallScreen?"100%": "40%" }}>
        <Form form={form} onFinish={handleSubmit}>         
        <div style={{ display: "flex",marginTop:"50px"  }}>
              <span style={{ flex: 1, color:"#33333"}}><b>Please Enter a Zip Code:</b> </span>
              <span style={{ flex: 1 }}><Input placeholder="Enter Zip Code" /> </span>
              <span style={{ flex: 1 }}><Button type="primary" htmlType="submit">
                Submit</Button></span>
            </div>            

        </Form>
      </div>
      {zipCode && elections && <><h2 style={{marginTop:"50px"}}>Election Data</h2>
        <Table columns={columns} dataSource={elections} 
        pagination={{
          pageSize: 4, 
        }}
        scroll={{ x: true }}
        /></>}

    </div>
  );
};

export default ElectionInfo;
