import React from "react";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";


const Choice = () => {
  return (
    <div className=" font-Manrope px-8 mx-auto w-[85%]  pt-16">
      <h1 className="text-[16px] leading-[16px] font-medium tracking-widest text-[#7190FF] ">
        COUNTS
      </h1>
      <h1 className="text-[#020617] text-[48px] font-semibold  ">
        Users’ Protection Choice
      </h1>
      <h1 className="text-[#64748B] text-[14px] leading-[20px] font-medium mt-1 ">
        We are constantly improving our applications super-fast with our team.
      </h1>
      <hr className="mt-8" />

      <div className="flex mt-8 justify- gap-12 items-center">
        <div className="flex flex-col items-start gap-5 justify-start">
          <VerifiedUserOutlinedIcon className="text-[#3340FA] text-[18px]" />
          <div>
          <h1 className="text-[36px] leading-[48px] font-semibold text-[#020617] "> 6,782</h1>
            <h1 className="text-[#020617] text-[16px] leading-[20px] font-semibold mt-2 ">
            Successful Protection
            </h1>
           
            <p className="text-[#64748B] text-[14px] leading-[20px] font-medium mt-1 ">
              Lorem ipsum dolor sit amet .
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 justify-start">
          <AccountBalanceWalletOutlinedIcon className="text-[#3340FA] text-[18px]" />
          <div>
          <h1 className="text-[36px]  leading-[48px] font-semibold text-[#020617] ">1,412</h1>
            <h1 className="text-[#020617] text-[16px] leading-[20px] font-semibold mt-2 ">
            Total Protected Wallet
            </h1>
            <p className="text-[#64748B] text-[14px] leading-[20px] font-medium mt-1 ">
              Lorem ipsum dolor sit amet .
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 justify-start">
          <AutorenewOutlinedIcon className="text-[#3340FA] text-[18px]" />
          <div>
          <h1 className="text-[36px] leading-[48px] font-semibold text-[#020617] "> 815k</h1>
            <h1 className="text-[#020617] text-[16px] leading-[20px] font-semibold mt-2 ">
            Total Transaction
            </h1>
            <p className="text-[#64748B] text-[14px] leading-[20px] font-medium mt-1 ">
              Lorem ipsum dolor sit amet .
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 justify-start">
          <AssessmentOutlinedIcon className="text-[#3340FA] text-[18px]" />
          <div>
          <h1 className="text-[36px] leading-[48px] font-semibold text-[#020617] ">$472k</h1>
            <h1 className="text-[#020617] text-[16px] leading-[20px] font-semibold mt-2 ">
            Total Protected Assets
            </h1>
            <p className="text-[#64748B] text-[14px] leading-[20px] font-medium mt-1 ">
              Lorem ipsum dolor sit amet .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
