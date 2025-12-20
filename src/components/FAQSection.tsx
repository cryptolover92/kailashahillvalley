import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is immediate registry available?",
    answer: "Yes, we provide immediate registry and possession. Once you complete the booking and payment, the registry process can be completed within 7-10 working days.",
  },
  {
    question: "What documents are required for booking?",
    answer: "You need Aadhaar Card, PAN Card, 2 passport-size photos, and address proof. Our team will guide you through the complete documentation process.",
  },
  {
    question: "Is bank loan available for plot purchase?",
    answer: "Yes, we have tie-ups with major banks for plot loans. We can help you with the loan documentation and approval process.",
  },
  {
    question: "What is the minimum booking amount?",
    answer: "The minimum booking amount starts from ₹50,000. The remaining amount can be paid as per the mutually agreed payment plan.",
  },
  {
    question: "Is the project RERA approved?",
    answer: "The project is located in Nagar Parishad approved zone with all necessary clearances. Our team can provide you with all relevant documentation during your site visit.",
  },
  {
    question: "Can I visit the site before booking?",
    answer: "Absolutely! We encourage all buyers to visit the site before making a decision. We offer FREE site visits with pickup facility from Rajgir railway station.",
  },
  {
    question: "What are the future development plans nearby?",
    answer: "Rajgir is developing as a major tourist and smart city. Upcoming projects include international convention center, zoo safari, and enhanced ropeway connectivity.",
  },
  {
    question: "Is there any hidden cost?",
    answer: "No hidden costs. The price mentioned includes all basic charges. Registry charges, stamp duty, and development charges (if any) will be clearly communicated upfront.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Kailasha Hill Valley
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-accent/20 border border-border rounded-xl px-6 data-[state=open]:bg-accent/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://wa.me/916203434328?text=I+have+a+question+about+Kailasha+Hill+Valley"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
