import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16">
      <div className="
        bg-[#1B4965] 
        w-full 
        max-w-[90%] 
        mx-auto 
        h-auto 
        min-h-[300px] 
        sm:min-h-[350px] 
        md:min-h-[400px] 
        lg:h-[500px] 
        rounded-2xl 
        p-4 
        sm:p-6 
        md:p-8 
        lg:p-10 
        flex 
        flex-col 
        lg:flex-row 
        gap-6 
        md:gap-8 
        lg:gap-10
      ">
        {/* TITLE SECTION */}
        <div className="
          w-full 
          lg:w-[50%] 
          flex 
          flex-col 
          items-center 
          justify-center 
          text-center 
          lg:text-left 
          lg:items-start 
          lg:mr-6 
          lg:mr-10
        ">
          <h1 className="
            text-white 
            text-2xl 
            sm:text-2xl 
            md:text-3xl 
            lg:text-3xl 
            xl:text-4xl 
            font-semibold 
            leading-tight 
            sm:leading-snug 
            md:leading-snug
          ">
            Frequently Asked Questions <br className="hidden sm:block" /> (FAQ's)
          </h1>
          {/* Optional subtitle/description for mobile */}
          <p className="
            text-white/80 
            text-sm 
            sm:text-base 
            mt-4 
            max-w-md 
            lg:hidden
          ">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* ACCORDION SECTION */}
        <div className="
          w-full 
          lg:w-[50%] 
          text-white 
          rounded-xl 
          p-4 
          sm:p-5 
          md:p-6 
          lg:p-6 
          flex 
          flex-col 
          justify-center
        ">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full" 
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="border-white/20">
              <AccordionTrigger className="
                text-left 
                text-sm 
                sm:text-base 
                md:text-lg 
                lg:text-xl 
                font-medium 
                hover:text-white/90 
                py-3 
                sm:py-4
              ">
                Our flagship product combines cutting-edge technology with sleek design.
              </AccordionTrigger>
              <AccordionContent className="
                flex 
                flex-col 
                gap-3 
                sm:gap-4 
                text-balance 
                pt-2 
                pb-4 
                text-sm 
                sm:text-base 
                md:text-base
              ">
                <p className="text-white/90">
                  Our flagship product combines cutting-edge technology with sleek design.
                  Built with premium materials, it offers unparalleled performance and reliability.
                </p>
                <p className="text-white/90">
                  Key features include advanced processing capabilities and an intuitive user
                  interface designed for both beginners and experts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white/20">
              <AccordionTrigger className="
                text-left 
                text-sm 
                sm:text-base 
                md:text-lg 
                lg:text-xl 
                font-medium 
                hover:text-white/90 
                py-3 
                sm:py-4
              ">
                Shipping Details
              </AccordionTrigger>
              <AccordionContent className="
                flex 
                flex-col 
                gap-3 
                sm:gap-4 
                text-balance 
                pt-2 
                pb-4 
                text-sm 
                sm:text-base 
                md:text-base
              ">
                <p className="text-white/90">
                  We offer worldwide shipping through trusted courier partners. Standard delivery
                  takes 3–5 business days, while express shipping ensures delivery within 1–2 days.
                </p>
                <p className="text-white/90">
                  All orders are packaged securely and fully insured. Track your shipment in
                  real-time through our tracking portal.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-white/20">
              <AccordionTrigger className="
                text-left 
                text-sm 
                sm:text-base 
                md:text-lg 
                lg:text-xl 
                font-medium 
                hover:text-white/90 
                py-3 
                sm:py-4
              ">
                Return Policy
              </AccordionTrigger>
              <AccordionContent className="
                flex 
                flex-col 
                gap-3 
                sm:gap-4 
                text-balance 
                pt-2 
                pb-4 
                text-sm 
                sm:text-base 
                md:text-base
              ">
                <p className="text-white/90">
                  We stand behind our products with a comprehensive 30-day return policy.
                  If you're not fully satisfied, return the item in its original condition.
                </p>
                <p className="text-white/90">
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