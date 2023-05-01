import React from "react";

function Footer() {
  return (
    <div className="pb-10">
      <div className="bg-[#B3A0CD] rounded-2xl mx-10">
        <div className=" flex space-x-40 py-20 px-14">
          <div className="flex space-x-24 ">
            <h1 className="uppercase leading-[1em] text-[2vw] text-[#1e1e1e] font-Bowlby w-[13vw]">
              Burger Heaven
            </h1>
            <div className="">
              <h1 className="uppercase text-[1.6vw] mb-2 text-[#1e1e1e] font-Bowlby">
                more
              </h1>
              <div className="text-[#1e1e1e] font-semibold text-[1.2vw] font-sofia">
                About
              </div>
              <div className="text-[#1e1e1e] font-semibold text-[1.2vw] font-sofia">
                Menu
              </div>
              <div className="text-[#1e1e1e] font-semibold text-[1.2vw] font-sofia">
                Locations
              </div>
              <div className="text-[#1e1e1e] font-semibold text-[1.2vw] font-sofia">
                Privacy
              </div>
            </div>
            <div>
              <h1 className="uppercase text-[#1e1e1e] mb-2 text-[1.6vw] font-Bowlby">
                hours
              </h1>
              <div className="text-[#1e1e1e] font-semibold text-[1.2vw] font-sofia">
                Open From
              </div>
              <div className="text-[#1e1e1e] font-semibold text-[1.2vw] font-sofia">
                11AM to
              </div>
              <div className="text-[#1e1e1e] font-semibold text-[1.2vw] font-sofia">
                11PM daily
              </div>
            </div>
          </div>
          <div className="relative">
            <h1 className="uppercase font-Bowlby font-normal text-[#1e1e1e] text-[1.4vw] mb-4">
              Join Our Newsletter
            </h1>
            <input
              className="bg-[transparent] px-2 pr-32 text-[#1e1e1e] font-Bowlby border-[#1e1e1e] border-[1px] py-3 w-[100%] rounded-xl"
              type="text"
            />
            <div
              className="uppercase absolute top-[8vh] right-[2vw] border-[none] bg-[transparent] text-[#1e1e1e] text-[1.2vw] font-normal font-Bowlby"
              onClick={() => {
                console.log("hwllo");
              }}
            >
              submit
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-14 pb-8">
          <p className="font-sofia  font-semibold text-[#1e1e1e]">
            Copyright Burger Heaven
          </p>
          <p className="font-sofia  font-semibold text-[#1e1e1e]">
            Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
