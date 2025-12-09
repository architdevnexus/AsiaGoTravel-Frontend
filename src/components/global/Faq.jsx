import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  return (
    <section className="">
        <div className="bg-[#1B4965] w-[90%] h-[500px] rounded-2xl p-10 flex mx-auto">

      {/* TITLE */}
      <div className="w-[50%] items-center flex flex-col justify-center mr-10">
        <h1 className="text-white text-3xl font-semibold leading-snug">
          Frequently Asked Questions <br /> (FAQ’s)
        </h1>
      </div>

      {/* ACCORDION */}
      <div className="text-white rounded-xl p-6 items-center text-xl flex flex-col justify-center ">
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Our flagship product combines cutting-edge technology with sleek design.</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our flagship product combines cutting-edge technology with sleek design.
                Built with premium materials, it offers unparalleled performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities and an intuitive user
                interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We offer worldwide shipping through trusted courier partners. Standard delivery
                takes 3–5 business days, while express shipping ensures delivery within 1–2 days.
              </p>
              <p>
                All orders are packaged securely and fully insured. Track your shipment in
                real-time through our tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return policy.
                If you're not fully satisfied, return the item in its original condition.
              </p>
              <p>
                Enjoy a hassle-free return process with free return shipping and refunds
                processed within 48 hours.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      </div>
    </section>
  );
};
