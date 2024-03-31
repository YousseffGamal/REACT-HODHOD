import React from "react";
import './style.css';
import { useState } from 'react'; // Import useState if needed
import Navbar from "../navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./Frame 2.png"
import { Img, Text } from "components";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        emailAddress: email,
        password: password
      });
      if (response.data.token) {
        try {
          localStorage.setItem("accessToken", response.data.token);
        } catch (e) {
          alert("Error occured ! Please try again.")
        }
      }
      
  }catch(e){
      alert("Error occured ! Please try again.")
    }
  };
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    
    setChecked(!isChecked);
    
  };
  
  return (
    <>
      <div style={{ backgroundImage: 'url("images/img_group15.png")', backgroundSize: 'cover', backgroundPosition: 'center',mixBlendMode:'multiply' }} className="bg-indigo-50 font-montserrat h-[910px] mx-auto relative w-full">
        <div className="absolute bottom-[0] md:h-[695px] h-[798px] pb-[103px] md:px-5 right-[0] w-[81%] md:w-full">
        <div className="login-box" >
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" name="username"  onChange={(e)=>setEmail(e.target.value)} required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)} required />
          <label>Password</label>
        </div>
        <div>
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{backgroundColor: "#132c44",width:'12.65px' , height:'12.65px'}}
      />
      <label  style={{color:'white',fontSize:'15px'}} htmlFor="vehicle1"> Remeber me</label>
      <br />
    </div>
        <button id="log" style={{fontSize:'16px'}} className="submit" type="submit">
          
        Login
        </button>
     
   
      </form>
      <p className="log">
      Not a member? 
      <span>
      <Link to="/signupone">Signup Now</Link>
      </span>
     
        
     
    </p>
    </div>
       
        </div>

        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto md:w-full">
          <div className="flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[131px] py-2.5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[864px] w-full">
            <Link to="/">
      <Img
        className="h-[51px] w-[92px]"
        src={logo}
        alt="thumbsup"
      />
    </Link>
              {/* <div className="flex sm:flex-1 sm:flex-col flex-row gap-[50px] items-center justify-center w-auto sm:w-full">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
