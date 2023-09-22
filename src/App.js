
import React, { useState, useEffect } from 'react';
import './App.css';
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
import { useMediaQuery } from 'react-responsive';
import {GoogleLogin} from '@react-oauth/google';

const { Header, Content, Footer, Sider } = Layout;

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
  const [register, setRegister] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userPoints, setUserPoints] = useState(0);
  const [loggedIn, setLoggedIn] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
 
  console.log("logedIn", loggedIn)
  const earnPoints = (pointsEarned) => {
    const newPoints = userPoints + pointsEarned;

    // Update user points through the API
    updateUserPoints(newPoints).then((updatedPoints) => {
      setUserPoints(updatedPoints);
    });
  };
  useEffect(() => {
    console.log(userName, password)
  }, [userName, password, loggedIn])
  const onRegisterationSuccess = (username, password) => {
    setUserName(username);
    setPassword(password);

    console.log("name and password is in app", username, password)
  }
  return (
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
              <Route path="/" element={<GoogleLogin 
                                                  onSuccess={ tokenResponse => {
                                                    console.log('Login success');
                                                    console.log(tokenResponse);
                                                    console.log('Need to add backend code, toggle flip ')
                                                  }}
                                                  onError={() => {
                                                    console.log('Login Failed');
                                                  }}
                                                />} />
                <Route path="/user-table" element={<UserTable />} />
                <Route path="/election-info" element={<ElectionInfo />} />
                <Route exact path="/polling-booths" element={<PollingBooths />} />
                <Route exact path="/voter-information" element={<Vote />} />
                <Route exact path="/candidate-information" element={<Candidate />} />
                <Route path="/contact-info" element={<ContactInfo />} />
              </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
