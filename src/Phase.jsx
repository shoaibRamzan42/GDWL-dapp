import React, { useState } from "react";

const Phase = () => {
  const [show, setShow] = useState(1);

  return (
    <div className=" font-Manrope px-8 mx-auto w-[85%]  mt-40">
      <h1 className="text-[16px] leading-[16px] font-medium tracking-widest text-[#7190FF] ">
        PHASES
      </h1>
      <h1 className="text-[#020617] text-[48px] font-semibold  ">
        $GRDWLT Milestones
      </h1>
      <h1 className="text-[#64748B] text-[14px] leading-[20px] font-medium mt-1 ">
        We are constantly improving our applications super-fast with our team.
      </h1>

      <div className="flex justify-center mt-12 gap-4 items-center">
        <button
          onClick={() => setShow(1)}
          className="p-3 focus:bg-[#3340FA] bg-[#E2E8F0] focus:text-white text-[#94A3B8]  font-semibold text-[16px] leading-[20px] rounded-md "
        >
          Phase1
        </button>
        <button
          onClick={() => setShow(2)}
          className="p-3 bg-[#E2E8F0] focus:bg-[#3340FA] focus:text-white text-[#94A3B8] font-semibold text-[16px] leading-[20px] rounded-md "
        >
          Phase2
        </button>
        <button
          onClick={() => setShow(3)}
          className="p-3 bg-[#E2E8F0] focus:bg-[#3340FA] focus:text-white text-[#94A3B8] font-semibold text-[16px] leading-[20px] rounded-md "
        >
          Phase3
        </button>
        <button
          onClick={() => setShow(4)}
          className="p-3 bg-[#E2E8F0] focus:bg-[#3340FA] focus:text-white text-[#94A3B8] font-semibold text-[16px] leading-[20px] rounded-md "
        >
          Phase4
        </button>
      </div>

      {show === 1 && (
        <div className=" w-[90%] items-center mx-auto  flex-col flex justify-center mt-5">
          <h1 className=" text-center rounded-full font-semibold leading-[24px] text-[16px] text-[#020617] p-1 half-blue-half-black-div1 w-full">
            $498,142 (35%)
          </h1>
          <div className="flex items-center justify-between w-full">
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">$0</h1>
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">Next Phase: $1,250,000</h1>
          </div>
        </div>
      )}
      {show === 2 && <div className=" w-[90%] items-center mx-auto  flex-col flex justify-center mt-5">
          <h1 className=" text-center rounded-full font-semibold leading-[24px] text-[16px] text-white p-1 half-blue-half-black-div2 w-full">
            $850,265 (70%)
          </h1>
          <div className="flex items-center justify-between w-full">
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">$0</h1>
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">Next Phase: $1,250,000</h1>
          </div>
        </div>}
      {show === 3 && <div className=" w-[90%] items-center mx-auto  flex-col flex justify-center mt-5">
          <h1 className=" text-center rounded-full font-semibold leading-[24px] text-[16px] text-white p-1 half-blue-half-black-div3 w-full">
            $578,987 (55%)
          </h1>
          <div className="flex items-center justify-between w-full">
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">$0</h1>
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">Next Phase: $1,250,000</h1>
          </div>
        </div>}
      {show === 4 && <div className=" w-[90%] items-center mx-auto  flex-col flex justify-center mt-5">
          <h1 className=" text-center text-white rounded-full font-semibold leading-[24px] text-[16px]  p-1 half-blue-half-black-div4 w-full">
            $1,200,142 (95%)
          </h1>
          <div className="flex items-center justify-between w-full">
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">$0</h1>
            <h1 className="leading-[24px] font-semibold pt-2 text-[16px] text-[#020617]">Next Phase: $1,250,000</h1>
          </div>
        </div>}
    </div>
  );
};

export default Phase;
