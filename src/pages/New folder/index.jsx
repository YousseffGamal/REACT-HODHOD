import React from "react";

import { Button, Img, List, Text } from "components";

const CampaignPage = () => {
  return (
    <>
      <div className="bg-indigo-50 font-montserrat h-[2409px] mx-auto pb-12 relative w-full">
        <div className="flex flex-col gap-[50px] h-full items-center justify-start max-w-[1190px] mt-[121px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-center py-2.5 w-auto">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-light_blue-900 w-auto"
              size="txtMontserratRomanBold35"
            >
              Campaign 1
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start w-auto md:w-full">
            <div className="bg-gray-300 flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtMontserratRomanMedium15"
              >
                Total views
              </Text>
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-auto"
                size="txtMontserratRomanSemiBold35"
              >
                69,245,214
              </Text>
              <Img
                className="h-[95px] sm:h-auto object-cover w-[303px] md:w-full"
                src="images/img_asset15x1.png"
                alt="asset15xOne"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtMontserratRomanMedium15"
              >
                Total followers
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                size="txtMontserratRomanSemiBold30"
              >
                52,467
              </Text>
              <Img
                className="h-[99px] md:h-auto object-cover w-[237px] sm:w-full"
                src="images/img_asset55x1.png"
                alt="asset55xOne"
              />
            </div>
            <div className="bg-deep_orange-300 flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-[15px] text-black-900"
                  size="txtMontserratRomanMedium15"
                >
                  Total revenue
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtMontserratRomanSemiBold30"
                >
                  49,549$
                </Text>
              </div>
              <Img
                className="h-[110px] sm:h-auto object-cover w-[349px] md:w-full"
                src="images/img_asset35x1.png"
                alt="asset35xOne"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[441px] w-full"
          style={{ backgroundImage: "url('images/img_group1.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[447px] items-center justify-start w-full">
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
                <Button className="cursor-pointer font-medium leading-[normal] min-w-[202px] text-base text-center">
                  Edit Campaign
                </Button>
              </div>
            </div>
            <List
              className="flex flex-col gap-[50px] items-center max-w-[1190px] mx-auto md:px-5 w-full"
              orientation="vertical"
            >
              <div className="bg-gray-300 flex flex-1 flex-col items-start justify-start max-w-[1190px] pb-7 pt-[77px] rounded-[20px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 gap-[417px] items-center justify-start w-[51%] md:w-full">
                    <div className="flex flex-col items-start justify-start sm:px-5 px-[34px] w-auto">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Facebook
                      </Text>
                    </div>
                    <Img
                      className="h-[5px] w-[18px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-center md:px-10 sm:px-5 px-[66px] w-auto md:w-full">
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[39px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Views
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[139px]"
                        size="txtMontserratRomanSemiBold30"
                      >
                        9,245,214
                      </Text>
                      <Img
                        className="h-[84px] md:h-auto object-cover w-[267px] sm:w-full"
                        src="images/img_asset15x1.png"
                        alt="asset15xTwo"
                      />
                    </div>
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[63px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Followers
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[69px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        5,467
                      </Text>
                      <Img
                        className="h-[88px] md:h-auto object-cover w-[209px] sm:w-full"
                        src="images/img_asset55x1.png"
                        alt="asset55xTwo"
                      />
                    </div>
                    <div className="border-2 border-deep_orange-300 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto sm:w-full">
                      <Text
                        className="text-[13px] text-black-900 w-[59px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Revenue
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[85px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        9,549$
                      </Text>
                      <Img
                        className="h-[98px] sm:h-auto object-cover w-[308px] md:w-full"
                        src="images/img_asset35x2.png"
                        alt="asset35xTwo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 flex flex-1 flex-col items-start justify-start max-w-[1190px] pb-7 pt-[77px] rounded-[20px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 gap-[412px] items-start justify-start w-[51%] md:w-full">
                    <div className="flex flex-col items-start justify-start sm:px-5 px-[34px] w-auto">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Instagram
                      </Text>
                    </div>
                    <Img
                      className="h-[5px] mt-[5px] w-[18px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-center md:px-10 sm:px-5 px-[66px] w-auto md:w-full">
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[39px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Views
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[139px]"
                        size="txtMontserratRomanSemiBold30"
                      >
                        9,245,214
                      </Text>
                      <Img
                        className="h-[84px] md:h-auto object-cover w-[267px] sm:w-full"
                        src="images/img_asset15x1.png"
                        alt="asset15xTwo"
                      />
                    </div>
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[63px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Followers
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[69px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        5,467
                      </Text>
                      <Img
                        className="h-[88px] md:h-auto object-cover w-[209px] sm:w-full"
                        src="images/img_asset55x1.png"
                        alt="asset55xTwo"
                      />
                    </div>
                    <div className="border-2 border-deep_orange-300 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto sm:w-full">
                      <Text
                        className="text-[13px] text-black-900 w-[59px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Revenue
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[85px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        9,549$
                      </Text>
                      <Img
                        className="h-[98px] sm:h-auto object-cover w-[308px] md:w-full"
                        src="images/img_asset35x2.png"
                        alt="asset35xTwo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 flex flex-1 flex-col items-start justify-start max-w-[1190px] pb-7 pt-[77px] rounded-[20px] w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 gap-[428px] items-center justify-start w-[51%] md:w-full">
                    <div className="flex flex-col items-start justify-start sm:px-5 px-[34px] w-auto">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Linkedin
                      </Text>
                    </div>
                    <Img
                      className="h-[5px] w-[18px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-center md:px-10 sm:px-5 px-[66px] w-auto md:w-full">
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[39px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Views
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[139px]"
                        size="txtMontserratRomanSemiBold30"
                      >
                        9,245,214
                      </Text>
                      <Img
                        className="h-[84px] md:h-auto object-cover w-[267px] sm:w-full"
                        src="images/img_asset15x1.png"
                        alt="asset15xTwo"
                      />
                    </div>
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[63px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Followers
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[69px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        5,467
                      </Text>
                      <Img
                        className="h-[88px] md:h-auto object-cover w-[209px] sm:w-full"
                        src="images/img_asset55x1.png"
                        alt="asset55xTwo"
                      />
                    </div>
                    <div className="border-2 border-deep_orange-300 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto sm:w-full">
                      <Text
                        className="text-[13px] text-black-900 w-[59px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Revenue
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[85px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        9,549$
                      </Text>
                      <Img
                        className="h-[98px] sm:h-auto object-cover w-[308px] md:w-full"
                        src="images/img_asset35x2.png"
                        alt="asset35xTwo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 flex flex-1 flex-col items-start justify-start max-w-[1190px] pb-7 pt-[77px] rounded-[20px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 gap-[504px] items-center justify-start w-[51%] md:w-full">
                    <div className="flex flex-col items-start justify-start sm:px-5 px-[34px] w-auto">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtMontserratRomanSemiBold20"
                      >
                        X
                      </Text>
                    </div>
                    <Img
                      className="h-[5px] w-[18px]"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-center md:px-10 sm:px-5 px-[66px] w-auto md:w-full">
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[39px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Views
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[139px]"
                        size="txtMontserratRomanSemiBold30"
                      >
                        9,245,214
                      </Text>
                      <Img
                        className="h-[84px] md:h-auto object-cover w-[267px] sm:w-full"
                        src="images/img_asset15x1.png"
                        alt="asset15xTwo"
                      />
                    </div>
                    <div className="border-2 border-gray-500 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto">
                      <Text
                        className="text-[13px] text-black-900 w-[63px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Followers
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[69px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        5,467
                      </Text>
                      <Img
                        className="h-[88px] md:h-auto object-cover w-[209px] sm:w-full"
                        src="images/img_asset55x1.png"
                        alt="asset55xTwo"
                      />
                    </div>
                    <div className="border-2 border-deep_orange-300 border-solid flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto sm:w-full">
                      <Text
                        className="text-[13px] text-black-900 w-[59px]"
                        size="txtMontserratRomanMedium13"
                      >
                        Revenue
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[85px]"
                        size="txtMontserratRomanSemiBold25"
                      >
                        9,549$
                      </Text>
                      <Img
                        className="h-[98px] sm:h-auto object-cover w-[308px] md:w-full"
                        src="images/img_asset35x2.png"
                        alt="asset35xTwo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignPage;
