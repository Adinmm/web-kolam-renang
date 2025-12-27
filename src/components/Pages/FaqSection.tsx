"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetFaqCategories } from "@/hooks/useGet";
import { HelpCircle } from "lucide-react";


const FAQSection = () => {
  const {getFaqCategories} = useGetFaqCategories()
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 bg--re">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang
            program, pendaftaran, dan fasilitas kami
          </p>
        </div>

        {/* FAQ Categories */}
        <div className=" mx-auto gap-8 grid grid-cols-1 md:grid-cols-2">
          {getFaqCategories?.data?.data?.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-2xl shadow-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq:any, faqIndex:number) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-wave-light/30 "
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
