import React, { useState } from "react";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import logo from "../src/assets/logo.png";
import CountdownTimer from "../src/Timer";

const Banner = () => {
  const [selectedOption, setSelectedOption] = useState("141.087123");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="mt-36 px-8 gap-32 bg-no-repeat  bg-right-bottom bg-contain font-Manrope py-6 bg-image flex justify-center items-center rounded-2xl w-[85%] mx-auto bg-[#F1F5F9]">
        <div className="flex items-start w-[48%] gap-8 justify-center flex-col">
          <CountdownTimer className="w-[50%]" hours={15} />
          <h1 className="text-[64px] font-semibold leading-[64px] text-[#020617] tracking-tighter">
            $GRDWLT Token on <span className="text-[#3340FA]">Pre Sale</span>{" "}
            Now!
          </h1>
          <p className="text-[#64748B] text-[14px] leading-[20px] font-medium  ">
            Download the Guard Wallet App, equipped with new generation
            technology, ultra-strong against thieves, and free of charge.
          </p>
          <div className="flex justify-between gap-8 items-center">
            <div className="flex flex-col items-start gap-2 justify-start">
              <VerifiedUserOutlinedIcon className="text-[#3340FA] text-[18px]" />
              <div>
                <h1 className="text-[#020617] text-[16px] leading-[20px] font-semibold ">
                  Ultra Secure
                </h1>
                <p className="text-[#64748B] text-[14px] leading-[20px] font-medium  ">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 justify-start">
              <ElectricBoltIcon className="text-[#3340FA] text-[18px]" />
              <div>
                <h1 className="text-[#020617] text-[16px] leading-[20px] font-semibold ">
                  Lightning Fast
                </h1>
                <p className="text-[#64748B] text-[14px] leading-[20px] font-medium  ">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 justify-start">
              <LockOutlinedIcon className="text-[#3340FA] text-[18px]" />
              <div>
                <h1 className="text-[#020617] text-[16px] leading-[20px] font-semibold ">
                  Privacy
                </h1>
                <p className="text-[#64748B] text-[14px] leading-[20px] font-medium  ">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>
          </div>

          <button className="rounded font-Manrope font-semibold bg-[#1E293B] text-white text-[15px] lg:text-[16px] relative overflow-hidden  duration-500 hover:scale-105 inline-flex group items-center justify-center px-3.5 py-1.5  cursor-pointer active:shadow-none shadow-lg btn-bg ">
            <span className="relative">Buy $GRDWLT</span>
          </button>
        </div>

        <div className="bg-white rounded-lg  w-[35%] flex flex-col justify-center h-[28rem] items-center py-4 px-4">
          <h1 className="text-[24px] font-semibold text-black leading-8  ">
            Buy $GRDWLT
          </h1>
          <p className="text-[#64748B] mt-4  text-[14px] leading-[20px] font-medium  text-center ">
            Select asset or enter a custom token address as you wish.
          </p>

          <div  className="w-full ">
          <div className="bg-[#F8FAFC] mt-4  items-center flex p-2 border rounded-md border-[#E2E8F0] justify-center gap-28">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-[#64748B]  text-[14px] leading-[20px] font-semibold  ">
                You Pay
              </h1>
              <h1 className="text-[24px] leading-[24px] text-[#020617] italic font-bold ">
                {selectedOption}
              </h1>
            </div>

            <div>
              <select
                className="bg-[#F8FAFC] rounded-md focus:border-[#336486] border-2 text-[14px] leading-[20px] font-semibold  border-[#E2E8F0] py-2"
                id="mySelect"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="141.087123"> USDT </option>
                <option value="52.0577564">ETH</option>
                <option value="236.765389">BTC</option>
              </select>
            </div>
          </div>

          <div className="bg-[#F8FAFC] mt-2   items-center flex p-2 border rounded-md border-[#E2E8F0] justify-center gap-28">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-[#64748B]  text-[14px] leading-[20px] font-semibold  ">
                You Recieve
              </h1>
              <h1 className="text-[24px] leading-[24px] text-[#020617] italic font-bold ">
                87676.2
              </h1>
            </div>
            <div className="flex gap-2 bg-[#F8FAFC] rounded-md focus:border-[#3340FA] border-2 p-2 justify-center items-center">
              <img src={logo} className="h-[20px]" alt="pic" />
              <h1 className="text-[12px]  border-[#E2E8F0] leading-[20px] font-semibold text-[#020617]">
                GRDWLT
              </h1>
            </div>
          </div>
          </div>

          <button className="bg-[#3340FA] mt-4 rounded-md p-2 text-white w-[90%] ">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
