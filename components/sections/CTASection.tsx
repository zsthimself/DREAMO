import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-indigo-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Experience the Future of Voice AI with Nari Labs?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-indigo-100">
          Join the Nari Labs community today and explore the most advanced open-source text-to-speech technology for free. No credit card required, start integrating high-quality voice into your applications right away.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://huggingface.co/spaces/nari-labs/Dia-1.6B" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
              Try Nari Labs
            </Button>
          </a>
          <a href="https://github.com/nari-labs/dia" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
              View Documentation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;