import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Patna, Bihar",
    rating: 5,
    text: "Excellent investment opportunity! The location near Rajgir's tourist spots makes it perfect for future growth. Registry was done within a week.",
  },
  {
    name: "Priya Sharma",
    location: "Ranchi, Jharkhand",
    rating: 5,
    text: "Very transparent process. The team arranged a free site visit and helped me choose the best plot. Highly recommended for genuine buyers.",
  },
  {
    name: "Amit Singh",
    location: "Delhi NCR",
    rating: 5,
    text: "I was looking for land investment in Bihar. Kailasha Hill Valley offered the best price with immediate possession. Great experience!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Buyers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied plot owners who trusted Kailasha Hill Valley
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <span className="font-semibold">100+ Happy Customers</span>
            <span className="text-muted-foreground">|</span>
            <span>Trusted Since 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}
