import TestimonialCard from "../ui/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "DreamO has revolutionized our character design workflow. We can generate consistent character appearances across different poses and scenarios with incredible fidelity. The unified framework allows us to experiment with clothing and style variations without losing character identity. DreamO has cut our design iteration time by 60% while significantly improving quality.",
      author: "Sarah Johnson",
      role: "Digital Content Creator",
      rating: 5,
      initials: "SJ"
    },
    {
      content:
        "The multi-condition capabilities of DreamO are remarkable. We can combine ID preservation with virtual try-on features to create personalized marketing visuals that perfectly match our brand aesthetic. The optimization for consumer GPUs means our entire design team can use DreamO without requiring specialized hardware. This technology is truly game-changing for our creative process.",
      author: "Michael Thompson",
      role: "Creative Director",
      rating: 5,
      initials: "MT"
    },
    {
      content:
        "As a game developer, I use DreamO to rapidly prototype character variations and outfit designs. The high-fidelity IP adaptation makes characters instantly recognizable while allowing for creative flexibility. Being able to run the model with 8-bit quantization on our existing hardware has made advanced AI image generation accessible to our entire indie team.",
      author: "David Lee",
      role: "Game Developer",
      rating: 5,
      initials: "DL"
    },
    {
      content:
        "The open-source nature of DreamO has allowed our research team to build specialized applications for assisted design tools. We're creating interfaces that help designers with limited artistic skills to generate professional-quality visuals. ByteDance's documentation and support have been excellent throughout our implementation process.",
      author: "Emma Rodriguez",
      role: "UX Research Lead",
      rating: 5,
      initials: "ER"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          What Users Say About DreamO
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