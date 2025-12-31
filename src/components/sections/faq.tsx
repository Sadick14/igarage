import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/data';

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-36 bg-background">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mt-2 mb-2" />
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-muted-foreground font-body px-4">
            Have questions? We have answers. Here are some of the most common queries we receive from our valued customers.
          </p>
        </div>
        <div className="mx-auto max-w-3xl py-6 md:py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-base md:text-lg font-headline font-bold text-foreground hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground font-body">
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
