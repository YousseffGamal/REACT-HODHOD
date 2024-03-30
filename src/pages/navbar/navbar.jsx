import React from "react";

import { Img, Text } from "components";

const navbar = () => {

  
  return (
    <>
   
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

    </>
  );
};

export default navbar;
