
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { incrementPoints, decrementPoints } from '../pointsActions';
import { useMediaQuery } from 'react-responsive';

const Home = () => {

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
  


console.log(candInfo);
  return (
    <div style={{  height:isSmallScreen?"150vh":"200vh", backgroundImage:`url('/image7.webp')`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }}>
      <div style={{ width: "100%", fontSize:"50px", marginTop:"150px" }}>

        Welcome to PA YOUTH VOTE
      </div>
      
      

    </div>
  );
};

export default Home;
