import React from "react";
import { useState } from 'react'; // Import useState if needed
import "./style.css"
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SignupPage = () => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [x, setX] = useState('');
  const [Linkedin, setLinkedin] = useState('');

 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFacebookChange = (event) => {
    setFacebook(event.target.value);
  };
  const handleInstagramChange = (event) => {
    setInstagram(event.target.value);
  };
  const handleXChange = (event) => {
    setX(event.target.value);
  };
  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here using 'username' and 'password' states
    console.log('Submitted:', { username, password });
  };
  
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    
    setChecked(!isChecked);
    
  };
  
  return (
    <>
    <div style={{ backgroundImage: 'url("images/img_group15.png")', backgroundSize: 'cover', backgroundPosition: 'center',mixBlendMode:'multiply' }} className="bg-indigo-50 font-montserrat h-[910px] mx-auto relative w-full eee">
        <div className="absolute bottom-[0] md:h-[695px] h-[798px] pb-[103px] md:px-5 right-[0] w-[81%] md:w-full">
        <div className="login-box" >
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)} required />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input type="number" name="phone" value={phone} onChange={handlePhoneChange} required />
          <label>Phone</label>
        </div>
        <div className="user-box">
          <input type="email" name="email" value={Email} onChange={handleEmailChange} required />
          <label>Business Email </label>
        </div>
        <div className="user-box">
          <input type="text" name="text" value={username} onChange={handleUsernameChange} required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" value={password} onChange={handlePasswordChange} required />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="text" name="text" value={facebook} onChange={handleFacebookChange} required />
          <label>Facebook</label>  
        </div>
        <div className="user-box">
          <input type="text" name="text" value={instagram} onChange={handleInstagramChange} required />
          <label>Instagram</label>  
        </div>
        <div className="user-box">
          <input type="text" name="text" value={x} onChange={handleXChange} required />
          <label>X</label>  
        </div>
        <div className="user-box">
          <input type="text" name="text" value={Linkedin} onChange={handleLinkedinChange} required />
          <label>Linkedin</label>  
        </div>
        {/* <div>
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{backgroundColor: "#132c44",width:'12.65px' , height:'12.65px'}}
      />
      <label  style={{color:'white',fontSize:'15px', fontSize:'13px'}} htmlFor="vehicle1"> Remeber me</label>
      <br />
    </div> */}
        <button id="log" style={{fontSize:'16px'}} className="submit" type="submit">
          
        Signup
        </button>
        <p style={{color:"#E6E6E6",fontSize:"14px",textAlign:"center",marginTop:"10px"}}>
        Want a free trial?

        </p>
      </form>
    </div>
       
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto md:w-full">
          <div className="flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[131px] py-2.5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[864px] w-full">
              <Img
                className="h-[51px] w-[92px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[50px] items-center justify-center w-auto sm:w-full">
                <Text
                  className="text-[13px] text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold13"
                >
                  HOME
                </Text>
                <Text
                  className="text-[13px] text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold13"
                >
                  SERVICES
                </Text>
                <Text
                  className="text-[13px] text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold13"
                >
                  OUR PRODUCTS
                </Text>
                <Text
                  className="text-[13px] text-black-900 w-auto"
                  size="txtMontserratRomanSemiBold13"
                >
                  ABOUT US
                </Text>
                <Text
                  className="text-[13px] text-black-900 uppercase w-auto"
                  size="txtMontserratRomanSemiBold13"
                >
                  Pricing
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
