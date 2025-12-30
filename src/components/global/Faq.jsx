"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * @param {string} title - Main heading
 * @param {string} subtitle - Optional subtitle (mobile)
 * @param {string} bgColor - Background color (Tailwind class)
 * @param {Array} faqs - FAQ data [{ id, question, answer[] }]
 * @param {string} defaultOpen - Accordion item to open by default
 */
export const FaqSection = ({
  title = "Frequently Asked Questions",
  subtitle = "",
  bgColor = "bg-[#1B4965]",
  faqs = [],
  defaultOpen = "",
}) => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16">
      <div
        className={`
          ${bgColor}
          w-full 
          max-w-[90%] 
          mx-auto 
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
        `}
      >
        {/* TITLE SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
          <h1 className="text-white text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/80 text-sm sm:text-base mt-4 max-w-md lg:hidden">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ ACCORDION */}
        <div className="w-full lg:w-1/2 text-white rounded-xl p-4 sm:p-5 md:p-6 flex flex-col justify-center">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={defaultOpen}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id || index}
                value={`item-${index + 1}`}
                className="border-white/20"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-medium py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-3 sm:gap-4 pt-2 pb-4 text-sm sm:text-base">
                  {Array.isArray(faq.answer)
                    ? faq.answer.map((text, i) => (
                        <p key={i} className="text-white/90">
                          {text}
                        </p>
                      ))
                    : (
                      <p className="text-white/90">{faq.answer}</p>
                    )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
