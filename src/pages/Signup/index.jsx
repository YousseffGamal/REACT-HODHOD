import React from "react";
import { useState } from "react"; // Import useState if needed
import "./style.css";
import { Link } from 'react-router-dom';

import { Img, Text } from "components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name: name,
        password: password,
        phoneNumber: phone,
        emailAddress: Email
      })
      if (response.data.user.success === 'User Registered successfully') {
        alert("User registered successfully!")
        navigate('/login')
      } else
        alert("Error occured ! Please try again.")
    } catch (e) {
      alert("Error occured ! Please try again.")
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("images/img_group15.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
        className="bg-indigo-50 font-montserrat h-[910px] mx-auto relative w-full eee"
      >
        <div className="absolute bottom-[0] md:h-[695px] h-[798px] pb-[103px] md:px-5 right-[0] w-[81%] md:w-full">
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label>Name</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <label>Phone</label>
              </div>
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Business Email </label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>
              <button
                id="log"
                style={{ fontSize: "16px" }}
                className="submit"
                type="submit"
              >
                Signup
              </button>
              <p
                style={{
                  color: "#E6E6E6",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Want a free trial?
              </p>
            </form>
          </div>
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto md:w-full">
          <div className="flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[131px] py-2.5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[864px] w-full">
            <Link to="/">
      <Img
        className="h-[51px] w-[92px]"
        src="images/img_thumbsup.svg"
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

export default SignupPage;
