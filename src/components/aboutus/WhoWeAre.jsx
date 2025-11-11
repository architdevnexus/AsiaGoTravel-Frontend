import Image from "next/image";
import React from "react";

export const WhoWeAre = () => {
  return (
    <section>
      <h2 className="flex justify-center items-center text-center">
        Who We Are
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-10  absolute">
          <div className="bg-[#1B4965] rounded-xl text-white flex-col justify-center items-center text-center p-4 w-60 h-75 shadow-[0_0_15px_4px_rgb(172,183,191)]">
            <div className="">
              {/* <div className="absolute rounded-full bg-black -top-6 z-1 right-10 p-5 text-white">
                Hello<div className="bg-[#3FA9F5] absolute z-10"></div>
              </div> */}
              <span className="text-2xl ">
                Professional <br /> & <br /> Trustworthy
              </span>
              <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10  ">
                Our team of travel experts works tirelessly to curate handpicked
                destinations, exclusive deals, and personalized itineraries.
              </p>
            </div>
          </div>

          <div className=" bg-[#0D1B2A] flex-col justify-center items-center text-center p-7 rounded-xl w-70 h-80 shadow-[0_0_15px_4px_rgb(172,183,191)]">
              <span className="text-2xl text-white  ">
                Professional <br /> & <br /> Trustworthy
              </span>
              <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10  ">
                Our team of travel experts works tirelessly to curate handpicked
                destinations, exclusive deals, and personalized itineraries.
              </p>
          </div>
          <div className=" bg-[#1B4965] rounded-xl flex-col justify-center items-center text-center p-4 w-60 h-75 shadow-[0_0_15px_4px_rgb(172,183,191)]">
                <span className="text-2xl text-white  ">
                Professional <br /> & <br /> Trustworthy
              </span>
              <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10  ">
                Our team of travel experts works tirelessly to curate handpicked
                destinations, exclusive deals, and personalized itineraries.
              </p>
          </div>
       
        </div>

        <Image
          src="/img/background.jpg"
          width={200}
          height={100}
          alt="background"
          className=" object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
