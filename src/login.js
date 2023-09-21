import React,{useState, useMemo}from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Register from './register';
import { useMediaQuery } from 'react-responsive';

const { Header, Content, Footer, Sider } = Layout;

const Login = ({ register, user, pass, loggedIn, earnPoints, loggedInUser }) => {
  const [data, setData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [showError, setShowError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  console.log("name and password is in login", user, pass)
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  if(user!="" && pass!=""){
    database.push({ username:user, password:pass });
    console.log("database is", database)
  }
  const onFinish = values => {
    
   setErrorMessages({});
   setShowError(false);
    console.log('Received values of form: ', values);
    setData(values);
    
console.log("errormessages ", errorMessages)
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === values.username);

    // Compare user info
    if (userData) {
      if (userData.password !== values.password) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        setShowError(true);
              } 
              else {
                console.log("logged in user is", userData.username)
                loggedInUser(userData.username)
                earnPoints(20);
                setShowError(false);
        setIsSubmitted(true);
        loggedIn(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      setShowError(true);
    }
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  const handleSubmit = (event) => {
    //Prevent page reload
    
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
      
    );

  return (
    <div style={{textAlign:"center"}}>
   <Card
      title="Sign In"
       style={{
        width: isSmallScreen?350:500,
        color:"#1677ff", 
        fontSize:"25px",
        marginTop:isSmallScreen?"150px":""
            }}
    >
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onSubmit={handleSubmit}

    >
     {showError &&  <Form.Item name="Signin" stye={{fontSize:"25px", color:"#1677ff", width:isSmallScreen?"50%":""}}>{renderErrorMessage("uname")} </Form.Item>}
     {(user!=""&& pass!="") &&  <Form.Item name="Signin"  stye={{fontSize:"25px"}} id="msg">User Registered successfully. Please Sign In 
     <div>You earned 20 points</div></Form.Item>}
{/* <Form.Item name="Signin" className="title1" style={{ color:"#1677ff"}}><b>Sign In</b> </Form.Item> */}
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        stye={{fontSize:"25px", color:"#1677ff", width:isSmallScreen?"50%":""}}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          Log in
        </Button>
        <div className="title"> Not Registered Yet? Click here. <b><a href="" onClick={(e)=>{
          e.preventDefault();
          register(true)}}><div>Register now</div></a></b></div>
      </Form.Item>
    </Form>
    </Card>
    </div>
  );
};

export default Login;
// ReactDOM.render(<NormalLoginForm />, document.getElementById('container'));