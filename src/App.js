
import React, { useState, useEffect } from 'react';
import Login from './login';
import Register from './register';
import Points from './userTable';
import { updateUserPoints } from './points/api';
import PointsIndicator from './points/pointsIndicator';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import UserTable from './userTable';
import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ElectionInfo from './elections/ElectionInfo';
import ContactInfo from './contact/ContactInfo';
import PollingBooths from './elections/PollingBooths';
import Vote from './elections/Vote';
import Candidate from './elections/Candidate';
import Home from './elections/home';
import { useMediaQuery } from 'react-responsive';
import {GoogleLogin} from '@react-oauth/google';
import Registration from './registration/Registration';
import Bottom from './Bottom';
import './App.css';
const { Header, Content, Sider } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: 'black',
  minHeight: 110,
  // width:1550,
  paddingInline: 50,
  lineHeight: '64px',
  fontWeight: '50',
  fontSize: "25px",
  // padding: '0 20px', // Add padding to the sides
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  backgroundColor: ' #7dbcea',
  fontFamily: 'Raleway, sans-serif'
};



const App = () => {  
  const [loggedIn, setLoggedIn] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  console.log("loggedIn", loggedIn);
  const loginSuccess = (loggedIn) => {
    setLoggedIn(true);
  }
  return (
   <>
    {!loggedIn ?
      <div><b>Hackathon Tech Fest  --  Welcome to PA Youth Vote</b>
        <Login loginSuccess = {loginSuccess} > </Login>
      </div>:
      <Router>
        <div className="App" style={{
          width: isSmallScreen ? "26em" : "96rem",
          display: isSmallScreen ? "block" : "flex"
        }}>
          
            <Layout>
              <Header style={{backgroundColor: '#ffffff'}} >
                <Navbar/>
              </Header>
              <div  style ={{marginTop:"10px"}}></div>
                  <Routes>
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/user-table" element={<UserTable />} />
                    <Route path="/election-info" element={<ElectionInfo />} />
                    <Route exact path="/polling-booths" element={<PollingBooths />} />
                    <Route exact path="/voter-information" element={<Vote />} />
                    <Route exact path="/candidate-information" element={<Candidate />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route path="/contact-info" element={<ContactInfo />} />
                  </Routes>
            </Layout>
        </div>
        <Bottom/>
      </Router>
    }
    </>
  );
}

export default App;