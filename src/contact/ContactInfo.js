import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactStyles.css";
import { Input, Typography, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
const ContactInfo = () => {
  const form = useRef()
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wfsyrn9', 'template_32s95yl', form.current, 'iVUiF17DfPU9xNk1D')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div style={{marginTop:isSmallScreen?"150px":""}}>
      <h4><b>Address:</b>  Mississauga, ON, Canada</h4>
      <h4><b>Phone Number:</b> (519) 888-1111 </h4>
      <h4><b>Hours:</b> 9AM - 5PM Monday - Friday </h4>
      <h4><b>Email:</b> john.doe@gmail.com</h4>
      <br></br>
      <hr></hr>
    <section> 
      <div className='container' style= {{width:"50%", marginLeft:"25%"}}>
        <h2 className='--text-center'>Contact Us</h2>
        <br></br>
        <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column'>

          <div>  <Input id="username" placeholder="Enter your username" required /></div>
          <br/>
          
          <div> <Input id="email" placeholder="Enter your email" required /></div>
          <br/>
          <div>  <Input id="subject" placeholder="Enter the subject" required /></div>
          <br/>
          <div><Input.TextArea id="message" placeholder="Enter your message" rows={30} cols={60}/></div>
          <br/>
          <div><Button type="primary">Send Message
      </Button></div>
        </form>
      </div>
    </section>
    </div>
  )
}

export default ContactInfo
