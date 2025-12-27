import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/data';

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-36 bg-black">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">FAQ</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mt-2 mb-2" />
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-body">
            Have questions? We have answers. Here are some of the most common queries we receive from our valued customers.
          </p>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-headline font-bold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-300 font-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
