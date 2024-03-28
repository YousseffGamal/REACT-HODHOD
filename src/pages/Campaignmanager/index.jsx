import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const CampaignmanagerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-indigo-50 bg-no-repeat flex flex-col font-montserrat h-[1577px] items-center justify-start mx-auto pb-[107px] w-full"
        style={{ backgroundImage: "url('images/img_campaignmanager.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[79px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[95px] items-start justify-start w-auto md:w-full"
              style={{ backgroundImage: "url('images/img_toppanel.png')" }}
            >
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[131px] py-2.5 w-full">
                <Img
                  className="h-[51px] w-[92px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[200px] text-base text-center"
                  shape="round"
                  color="light_blue_900"
                  size="xs"
                  variant="outline"
                >
                  Create Campaign
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-start justify-center max-w-[1440px] mt-14 md:px-10 sm:px-5 px-[125px] w-full">
              <div className="bg-deep_orange-300 h-[247px] md:px-5 relative rounded-[20px] w-[67%] md:w-full">
                <Img
                  className="h-[247px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_adobestock559145847.png"
                  alt="adobestock55914"
                />
                <div className="absolute flex flex-col items-center justify-start left-[0] md:px-10 sm:px-5 px-[60px] py-[30px] top-[0] w-auto">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-indigo-50"
                    size="txtMontserratRomanSemiBold30"
                  >
                    <span className="md:text-5xl text-indigo-50 font-montserrat text-left text-[100px] font-semibold">
                      <>
                        AI
                        <br />
                      </>
                    </span>
                    <span className="text-indigo-50 font-montserrat text-left text-[17px] font-semibold">
                      Generation
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border-4 border-light_blue-900 border-solid md:h-[239px] h-[247px] pb-[3px] pr-[3px] relative rounded-[20px] w-[26%] md:w-full">
                <div className="absolute flex flex-col items-center justify-start left-[0] md:px-10 px-11 sm:px-5 py-[34px] top-[0] w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900 w-auto"
                    size="txtMontserratRomanSemiBold32"
                  >
                    Files
                  </Text>
                </div>
                <Img
                  className="absolute h-[239px] inset-[0] justify-center m-auto object-cover rounded-[15px] w-[98%]"
                  src="images/img_658751.png"
                  alt="658751"
                />
              </div>
            </div>
            <Button
              className="!text-black-900_99 cursor-pointer font-medium h-[57px] leading-[normal] max-w-[639px] mt-20 rounded-[28px] text-[22px] text-center sm:text-lg md:text-xl w-full"
              color="light_blue_900"
              size="sm"
              variant="outline"
            >
              Search
            </Button>
            <div
              className="common-pointer flex flex-col items-center justify-start max-w-[1440px] mt-20 md:px-10 sm:px-5 px-[125px] w-full"
              onClick={() => navigate("/campaign")}
            >
              <div className="md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1428px] min-h-[auto] mx-auto w-full">
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[11px] items-center justify-start sm:px-5 px-[37px] w-full">
                  <div className="bg-light_blue-900 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[146px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                        src="images/img_65054851.png"
                        alt="65054851"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-[17px] text-black-900"
                    size="txtMontserratRomanMedium17"
                  >
                    Campaign
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1440px] py-5 w-full">
            <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-center md:px-10 sm:px-5 px-[125px] w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtMontserratRomanSemiBold25"
              >
                Recent Creations
              </Text>
              <Line className="bg-deep_orange-300 h-0.5 w-[79%]" />
            </div>
            <List
              className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 sm:px-5 px-[125px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-2.5 items-center justify-start sm:ml-[0] sm:px-5 px-[37px] w-full">
                <div className="bg-light_blue-900 flex flex-col items-center justify-start rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[179px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                      src="images/img_65054851_179x241.png"
                      alt="65054851"
                    />
                  </div>
                </div>
                <Text
                  className="text-[17px] text-black-900 text-center"
                  size="txtMontserratRomanMedium17"
                >
                  Creation
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 items-center justify-start sm:ml-[0] sm:px-5 px-[37px] w-full">
                <div className="bg-light_blue-900 flex flex-col items-center justify-start rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[179px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                      src="images/img_65054851_179x240.png"
                      alt="65054851"
                    />
                  </div>
                </div>
                <Text
                  className="text-[17px] text-black-900 text-center"
                  size="txtMontserratRomanMedium17"
                >
                  Creation
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 items-center justify-start sm:ml-[0] sm:px-5 px-[37px] w-full">
                <div className="bg-light_blue-900 flex flex-col items-center justify-start rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[179px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                      src="images/img_65054851_1.png"
                      alt="65054851"
                    />
                  </div>
                </div>
                <Text
                  className="text-[17px] text-black-900 text-center"
                  size="txtMontserratRomanMedium17"
                >
                  Creation
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 items-center justify-start sm:ml-[0] sm:px-5 px-[37px] w-full">
                <div className="bg-light_blue-900 flex flex-col items-center justify-start rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[179px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                      src="images/img_65054851_2.png"
                      alt="65054851"
                    />
                  </div>
                </div>
                <Text
                  className="text-[17px] text-black-900 text-center"
                  size="txtMontserratRomanMedium17"
                >
                  Creation
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignmanagerPage;
