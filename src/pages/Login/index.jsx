import React from "react";
import './style.css';
import { useState } from 'react'; // Import useState if needed
import Navbar from "../navbar/navbar";
import axios from "axios";

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
    </div>
       
        </div>

<Navbar />
      </div>
    </>
  );
};

export default LoginPage;
