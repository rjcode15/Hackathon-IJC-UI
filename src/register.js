import React, { useState } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';

const Register = ({register, onRegisterationSuccess, earnPoints}) => {
    const[message, setShowMessage] = useState("")
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });
    register(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: {
          street: '',
          pincode: '',
        },
        contactInfo: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          address: {
            ...formData.address,
            [name]: value,
          },
        });
      };
    
      const handleSubmit = (e) => {
    
        // Implement form submission logic here (e.g., send data to a server)
        console.log('Form data:', formData);
        setShowMessage("User Submitted Successfully!")
        onRegisterationSuccess(formData.username, formData.password)
      };
    
      const validatePassword = (rule, value, callback) => {
        if (value && value !== formData.password) {
          callback('Passwords do not match');
        } else {
          callback();
        }
      };
    
      return (
     
        <Card title="Sign Up " style={{ width: isSmallScreen?350:500,fontFamily:"Raleway, sans-serif", color:"#1677ff", marginTop:isSmallScreen?"90px":""}}>
          <Form onFinish={handleSubmit}>
          {message!="" &&  <Form.Item name="Signin" stye={{fontSize:"25px", color:"#1677ff"}}>{message} </Form.Item>}
            
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please enter your username' }]}
            >
              <Input name="username" value={formData.username} onChange={handleInputChange} />
            </Form.Item>
{/*     
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Invalid email format' },
              ]}
            >
              <Input name="email" value={formData.email} onChange={handleInputChange} />
            </Form.Item> */}
    
            <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password name="password" value={formData.password} onChange={handleInputChange} />
        </Form.Item>
{/* 
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            { required: true, message: 'Please confirm your password' },
            { validator: validatePassword },
          ]}
        >
          <Input.Password
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </Form.Item> */}
            <Form.Item
              label="Address"
              name="street"
            >
              <Input name="street" value={formData.address.street} onChange={handleAddressChange} />
            </Form.Item>
    
            <Form.Item
              label="Pin Code"
              name="pincode"
            >
              <Input name="pincode" value={formData.address.pincode} onChange={handleAddressChange} />
            </Form.Item>
{/*     
            <Form.Item
              label="Contact Info"
              name="contactInfo"
            >
              <Input name="contactInfo" value={formData.contactInfo} onChange={handleInputChange} />
            </Form.Item> */}
    
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              
            </Form.Item>
          </Form>
        </Card>
      );
    };

export default Register;