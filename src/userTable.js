import React, {useState, useEffect}from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; 
import { useMediaQuery } from 'react-responsive';
const columns = [
 
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points',
  },
  
];

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const points = useSelector((state) => state.points);
  // Simulated user data (replace with your actual data)
  useEffect(() => {
    const dummyData = [
      { key: '1', name: 'Candidate Info', points: 20 },
      { key: '2', name: 'Election Info', points: 20 },
      { key: '3', name: 'Vote', points: 30 },
      // Add more users as needed
    ];

    // Calculate ranks based on points
    const sortedData = [...dummyData].sort((a, b) => b.points - a.points);
    // sortedData.forEach((user, index) => {
    //   user.rank = index + 1;
    // });

    setUserData(sortedData);
  }, []);
  return (<div style={{ textAlign:"center",fontSize:"16px",marginTop:isSmallScreen?"150px":"20px", fontFamily: 'Raleway, sans-serif'}}><span className="blinking-text" style={{flex:18}}>Total Points : {points} &nbsp;&nbsp;&nbsp;&nbsp; Rank is 230</span>
  <Table columns={columns} dataSource={userData} style={{marginTop:"20px"}}
  pagination={{
    pageSize: isSmallScreen?3:5, // Increase the number of rows per page
  }}
  scroll={{ x: true }}
  /></div>);
};

export default UserTable;
