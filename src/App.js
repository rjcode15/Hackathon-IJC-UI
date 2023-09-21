
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
  // Function to simulate earning points
  const renderContentBasedOnPath = () => {
    const currentPath = window.location.pathname;

    if (loggedIn) {
      // Render content for not logged in users
      if (currentPath === '/election-info') {
        return <ElectionInfo />;
      } else if (currentPath === '/polling-booths') {
        return <PollingBooths />;
      } else if (currentPath === '/contact-info') {
      } else {
        // Render content for other pages when not logged in
        return (
          <>
            <UserTable />
          </>
        );
      }
    }
  };
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
            {!loggedIn ?
              <div style={{ width: "100%", backgroundColor: ' #7dbcea', fontSize: "25px", fontFamily: 'Raleway, sans-serif', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', 
              // textAlign: "center" 
              }}><b>Hackathon Tech Fest</b>
              </div>
              : <Navbar loggedInUser={loggedInUser} />}

            {!loggedIn && 
              <Alert
                banner
                message={
                  <Marquee pauseOnHover gradient={false}>
                    <div style={{ width: "100%", color: "#1624FF" }}><b>SIGN UP NOW TO EARN 20 POINTS!!!</b></div>
                  </Marquee>
                }
                type="info"
              />}
            {!loggedIn && <> <div style={{ textAlign: 'center',
  color: '#108ee9',
  // backgroundColor: '#108ee9',
  fontWeight: '50',
  fontSize: "25px",
   marginTop: isSmallScreen?"" :"30px"}}><b> Welcome to PA Youth Vote</b></div></>
            }
          </Header>
          {!loggedIn ? <>
            <Content style={{
              textAlign: 'center',
              minHeight: isSmallScreen?700:500,
              lineHeight: '120px',
              color: '#108ee9',
              // backgroundColor: '#108ee9',
              fontWeight: '50',
              fontSize: "25px",
              width: isSmallScreen?400 :900,
              display: isSmallScreen?"block":"flex",
              justifyContent: 'space-between',
              marginTop: "20px"
            }}>
              <div style={{ flex: isSmallScreen ? 0 : "10" }}>
                <div>{!isSmallScreen && <img style={{
                  width: isSmallScreen ? "" : "800px",
                  height: "500px", marginLeft: isSmallScreen ? "0px" : "20px"
                }} src={"/image2.webp"} alt="My Image" />}</div>
              </div>
              {!register || (userName != "" && password != "") ?
                <div style={{
                  flex: isSmallScreen ? 0 : "7", height: "550px",
                  marginLeft: isSmallScreen ? "20px" : "80px",
                  justifyContent: isSmallScreen ? "flex-start" : "flex-end"
                }}><Login register={setRegister} user={userName} pass={password} key={Math.random} loggedIn={setLoggedIn} earnPoints={earnPoints} loggedInUser={setLoggedInUser} /></div>
                :
                <div style={{flex: isSmallScreen ? "0" : "7", height: isSmallScreen ?"200px":"550px", marginLeft:isSmallScreen ? "20px" : "80px", justifyContent: isSmallScreen ? "flex-start" : "flex-end", marginBottom:"100px" }}><Register key="register" register={setRegister} onRegisterationSuccess={onRegisterationSuccess} earnPoints={earnPoints} /></div>
              }
            </Content></>
            :

            <div style={{
              justifyContent: "center",
              marginLeft: isSmallScreen ? '0px' : '30px',
              marginTop: isSmallScreen ? '20px' : '50px',
            }}>
              <Routes>
                <Route path="/user-table" element={<UserTable />} />
                <Route path="/election-info" element={<ElectionInfo />} />
                <Route exact path="/polling-booths" element={<PollingBooths />} />
                <Route exact path="/voter-information" element={<Vote />} />
                <Route exact path="/candidate-information" element={<Candidate />} />
                <Route path="/contact-info" element={<ContactInfo />} />
                {/* <Route exact path="/"></Route> */}
              </Routes>
            </div>}



        </Layout>
      </div>
    </Router>
  );
}

export default App;
