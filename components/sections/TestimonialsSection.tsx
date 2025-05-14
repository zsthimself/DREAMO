import TestimonialCard from "../ui/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "Nari Labs Dia has completely transformed our audiobook production process. We can generate character voices that sound incredibly natural with Nari Labs technology, with emotional depth that was previously impossible without professional voice actors. The technology from Nari Labs has cut our production time in half while improving quality with Nari Labs Dia.",
      author: "Sarah Johnson",
      role: "Digital Content Producer using Nari Labs",
      rating: 5,
      initials: "SJ"
    },
    {
      content:
        "The voice cloning capabilities of Nari Labs Dia are remarkable. With just a 10-second sample, we created a virtual assistant that perfectly matches our brand voice using Nari Labs. The real-time performance of Nari Labs means we can integrate it into our customer service platform without any latency issues. Nari Labs technology is truly revolutionary.",
      author: "Michael Thompson",
      role: "Technology Director partnering with Nari Labs",
      rating: 5,
      initials: "MT"
    },
    {
      content:
        "As a game developer, I use Nari Labs Dia to generate dynamic NPC dialogue that responds to player actions. The emotional range and natural speech patterns from Nari Labs make characters feel alive in ways that weren't possible before. Nari Labs has created something truly revolutionary for interactive storytelling with their Nari Labs Dia technology.",
      author: "David Lee",
      role: "Game Developer implementing Nari Labs",
      rating: 5,
      initials: "DL"
    },
    {
      content:
        "The open-source nature of Nari Labs Dia has allowed our research team to adapt the Nari Labs model for accessibility applications. We're creating tools for people with speech impairments that preserve their vocal identity with Nari Labs technology. The support from Nari Labs has been exceptional throughout our implementation of Nari Labs Dia.",
      author: "Emma Rodriguez",
      role: "Accessibility Researcher collaborating with Nari Labs",
      rating: 5,
      initials: "ER"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          What Users Say About Nari Labs
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 