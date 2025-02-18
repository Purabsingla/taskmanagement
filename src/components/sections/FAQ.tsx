import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-400 h-[500px] flex items-center justify-center px-10">
      <div className="w-full max-w-4xl flex items-start gap-10">
        {/* FAQ Text Section */}
        <div className="text-white w-1/3">
          <h2 className="text-4xl font-extrabold tracking-wide uppercase">
            Frequently <span className="text-yellow-300">Asked</span> Questions
          </h2>
          <p className="mt-3 text-lg italic text-gray-200">
            "Got questions? We've got answers!"
          </p>
        </div>

        {/* Accordion Section */}
        <Accordion type="single" collapsible className="w-2/3">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other components'
              aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I customize it?</AccordionTrigger>
            <AccordionContent>
              Absolutely! You can modify the styles, animations, and behavior as
              needed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Does it work on all devices?</AccordionTrigger>
            <AccordionContent>
              Yes, it's fully responsive and works on all screen sizes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is there dark mode support?</AccordionTrigger>
            <AccordionContent>
              Yes, it can adapt to dark mode with simple styling adjustments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
