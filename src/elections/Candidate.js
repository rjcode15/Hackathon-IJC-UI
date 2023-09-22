
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
  const [showLoc, setShowLoc] = useState(false);
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

  // {
  //   title: 'URLs',
  //   dataIndex: 'urls',
  //   key: 'urls',
 
  // },
  {
    title: 'Member',
    dataIndex: 'member',
    key: 'channels',
      
  },
];
const candidates =[
  {
    name:"Michael Stender",
    urls:"https://ballotpedia.org/Michael_Stender",
   member:"Pennsylvania House of Representatives, District 108."
  },
  {
    name:"Heather Boyd",
    urls:"https://ballotpedia.org/Heather_Boyd",
   member:"Pennsylvania House of Representatives, District 163."
  }
]
const handleSubmit = () => {
  console.log();
setShowLoc(true);
  
  // fetch('http://localhost:8080/v1/elections/representatives?address='+address)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const extractedCandidates = [];
  //     for (const office of data.offices) {
  //       for (const officialIndex of office.officialIndices) {
  //         const official = data.officials[officialIndex];
  //         const candidate = {
  //           name: official.name,
  //           party: official.party,
  //           phone: official.phones && official.phones[0] ? official.phones[0] : '',
  //           urls: official.urls ? official.urls : [],
  //           channels: official.channels ? official.channels : [],
  //         };
  //         extractedCandidates.push(candidate);
  //         setCandinfo(extractedCandidates);
  //       }
  //     };
  //   });
   
};

console.log(candInfo);
  return (

    <div style={{  height:isSmallScreen?"150vh":"200vh", backgroundImage:`url('/image7.webp')`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }}>
      <div style={{ width: "100%"}}>

        <Form form={form} onFinish={handleSubmit}>         
            <div style={{ display: "flex",marginTop:"50px"  }}>
              <span style={{ flex: 1, color:"#33333"}}><b>Please Enter a Zip Code:</b> </span>
              <span style={{ flex: 1 }}><Input placeholder="Enter Zip Code" /> </span>
              <span style={{ flex: 1 }}><Button type="primary" htmlType="submit">
                Submit</Button></span>
            </div>         
            {showLoc && <><h2>Candidate  Data</h2>
              <Table columns={columnsCand} dataSource={candidates} pagination={{ pageSize: isSmallScreen?1:5}} scroll={{ x: true }} width={100} />
        </>}
        </Form>
      </div>
      
      

    </div>
  );
};

export default Candidate;
