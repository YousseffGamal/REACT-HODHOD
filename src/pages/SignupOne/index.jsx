import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const SignupOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-indigo-50 font-montserrat h-[695px] mx-auto md:pl-10 sm:pl-5 pl-[286px] relative w-full">
        <Img
        
          className="h-[695px] ml-auto my-auto object-cover"
          src="images/img_group15.png"
          alt="groupFifteen"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[81px] inset-x-[0] items-center justify-start mx-auto top-[23%] w-2/5">
          <Text id="text"
            className="sm:text-[20px] md:text-[33px] text-[40px] text-black-900   text-size[40px]  text-center"
            size="txtMontserratRomanSemiBold35"
          >
            Who are you?
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
            <div id="gray"
              className="common-pointer bg-light_blue-900_7f flex sm:flex-1 flex-col gap-[21px] items-center justify-end p-[23px] sm:px-5 rounded-[25px] w-[42%] sm:w-full"
              onClick={() => navigate("/signup")}
            >
              <Img
                className="h-[107px] mt-1.5 blind"
                src="images/img_group.svg"
                alt="group"
              />
              <Text
                className="text-[15px] text-center text-white-A700"
                size="txtMontserratRomanRegular15"
              >
                Individual Company
              </Text>
            </div>
            <div  className="bg-light_blue-900_7f flex flex-col gap-[21px] h-[201px] justify-center p-[23px] sm:px-5 rounded-[25px] w-[201px]">
              <Img
              
                className="h-[107px] md:ml-[0] ml-[23px] mr-[11px] mt-1.5 blind"
                src="images/img_group_gray_200.svg"
                alt="group_One"
              />
              <Text
                className="text-[15px] text-center text-white-A700"
                size="txtMontserratRomanRegular15"
              >
                Marketing Company
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupOnePage;
