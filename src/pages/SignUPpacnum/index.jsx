import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img, Heading } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";


export default function SignUPpacnumPage() {
  return (
    <>
      <Helmet>
        <title>Medprima</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[34px] p-[54px] md:p-5 bg-white-A700">
        <div className="flex justify-center w-[14%] md:w-full">
          <div className="h-[161px] w-full md:h-auto relative">
            <div className="flex flex-col items-center w-[79%] h-max gap-2 left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img src="images/LOGO.svg" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start w-[20%] md:w-full gap-5">
          <div className="flex flex-col items-center w-[25%] gap-[9px]">
            <Img src="images/pac_icon.svg" alt="play_one" className="h-[90px] mb-1" />
          <Heading size="xs" as="h1" className="!text-teal-400">
            Пациент
          </Heading>
          </div>
          <div className="flex flex-col items-center w-[33%] gap-4">
            <Img src="images/img_floating_icon.svg" alt="floatingicon" className="h-[90px] w-full md:h-auto" />
            <Text size="xl" as="p" className="!text-blue_gray-400">
              Врач
            </Text>
          </div>
        </div>
        <Tabs
          className="flex flex-col w-[407px] md:w-full mb-[5px] gap-[22px]"
          selectedTabClassName="!text-white-A700 bg-teal-400 rounded-[10px] w-[25%]"
          selectedTabPanelClassName="relative tab-panel--selected"
        >
          <TabList className="flex justify-center gap-[135px] p-[5px] md:gap-5 bg-gray-100 flex-wrap rounded-[10px]">
            <Tab className="flex justify-center mr-[10px] md:mr-0 text-teal-400 text-xl font-semibold">Телефон</Tab>
            <Tab className="flex justify-center mr-[10px] md:mr-0 text-teal-400 text-xl font-semibold">Email</Tab>
          </TabList>
          {[...Array(2)].map((_, index) => (
            <TabPanel key={`tab-panel${index}`} className="items-center absolute">
              <div className="w-full">
                <div className="flex flex-col gap-[22px]">
                  <div className="flex sm:flex-col justify-center gap-[21px]">
                    <div className="flex gap-[135px] p-[10px] md:gap-5 bg-gray-100 flex-wrap rounded-[10px] blue_gray_100_4c">
                      +7
                    </div>
                    <Input
                      size="sm"
                      shape="round"
                      name="номер_телефона"
                      placeholder={`Номер телефона`}
                      className="sm:pr-5 !text-gray-400 border-gray-200_01 border border-solid flex-grow"
                    />
                  </div>
                  <Button color="teal_400" size="lg" shape="round" className="w-full sm:px-5 font-semibold">
                    Далее
                  </Button>
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
}
