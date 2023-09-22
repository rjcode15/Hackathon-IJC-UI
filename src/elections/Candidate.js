
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';

const Candidate = () => {

  const [candInfo, setCandinfo] = useState([]);
  const [address, setAddress] = useState('');
  const [form] = Form.useForm();
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch(incrementPoints(20));
    },[])
  

    const handleInputChange = (event) => {
      setAddress(event.target.value)
    };

     
const columnsCand = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Party',
    dataIndex: 'party',
    key: 'party',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'URLs',
    dataIndex: 'urls',
    key: 'urls',
    render: (urls) => (
      <ul>
        {urls.map((url, i) => (
          <ul key={i}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                Info link {i+1}
            </a>
          </ul>
        ))}
      </ul>
    ),
  },
  {
    title: 'Channels',
    dataIndex: 'channels',
    key: 'channels',
    render: (channels) => {  
      console.log(channels);    
      return <ul>
            {channels.map((channel, i) => (
              <ul key={i}>
                <a href={channel.url} target="_blank" rel="noopener noreferrer">
                  {channel.type}
                </a>
              </ul>
        ))}
      </ul> 
      }    
  },
];

const handleSubmit = () => {
  console.log();
  
  fetch('http://localhost:8080/v1/elections/representatives?address='+address)
    .then((response) => response.json())
    .then((data) => {
      const extractedCandidates = [];
      for (const office of data.offices) {
        for (const officialIndex of office.officialIndices) {
          const official = data.officials[officialIndex];
          const candidate = {
            name: official.name,
            party: official.party,
            phone: official.phones && official.phones[0] ? official.phones[0] : '',
            urls: official.urls ? official.urls : [],
            channels: official.channels ? official.channels : [],
          };
          extractedCandidates.push(candidate);
          setCandinfo(extractedCandidates);
        }
      };
    });
   
};

console.log(candInfo);
  return (
    <div style={{ marginLeft: "10px", marginRight: "20px", height:isSmallScreen?"150vh":"200vh",marginTop:isSmallScreen?"150px":"" }}>
      <div style={{ width: isSmallScreen?"100%":"60%" }}>
        <Form form={form} onFinish={handleSubmit}>         
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>Please Enter Address: </span>
              <span style={{ flex: 1 }}><Input name="address" value={address}  onChange={handleInputChange} placeholder="Enter Address" /> </span>
              <span style={{ flex: 1 }}><Button type="primary" htmlType="submit">
                Submit</Button></span>
            </div>         
            {address != "" && <><h2>Candidate  Data</h2>
              <Table columns={columnsCand} dataSource={candInfo} pagination={{ pageSize: isSmallScreen?1:5}} scroll={{ x: true }} />
        </>}
        </Form>
      </div>
      
      

    </div>
  );
};

export default Candidate;
