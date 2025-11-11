import React from "react";
import { Button } from "../global/Button";
import Image from "next/image";

export const AboutUsComponent = () => {
  return (
    <section className="flex justify-around items-center">
      <div className="flex gap-6 items-center">
        <Image
          src="/img/aboutimg1.jpg"
          width={190}
          height={203}
          alt="about"
          className="rounded-lg h-[219px] shadow-lg shadow-gray-600 "
        />
        <div className="">
          <Image
            src="/img/aboutimg2.jpg"
            width={210}
            height={100}
            alt="about"
            className="rounded-lg h-[180px] mb-6 shadow-lg shadow-gray-600"
          />
          <Image
            src="/img/aboutimg3.jpg"
            width={240}
            height={100}
            alt="about"
            className="rounded-lg h-[220px] shadow-lg shadow-gray-600"
          />
        </div>
      </div>

      <div className="space-y-4 w-1/2">
        <h1 className="text-[#1B4965] font-bold text-3xl ">About Us</h1>
        <p className="text-lg leading-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum
          dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis
          sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet
          consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit
          nullam neque ultrices. Lorem ipsum dolor sit amet consectetur
          adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
          neque ultrices.
        </p>

        <Button />
      </div>
    </section>
  );
};
