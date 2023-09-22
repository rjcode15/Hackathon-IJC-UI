import React,{useState, useMemo}from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { useMediaQuery } from 'react-responsive';
import {GoogleLogin} from '@react-oauth/google';

const Login = ({ loginSuccess }) => {  

  return (
    <GoogleLogin onSuccess={ tokenResponse => {
      console.log('Login success');
      console.log(tokenResponse);
      console.log('Need to add backend code, toggle flip ');
      loginSuccess(true);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
  );
};
export default Login;