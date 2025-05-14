import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Create Personalized Images with DreamO?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
          Start using ByteDance's unified image customization framework today. Generate high-fidelity images with multiple customization options for IP adaptation, ID preservation, virtual try-on, and style transfer.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://huggingface.co/spaces/ByteDance/DreamO" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Try DreamO Demo
            </Button>
          </a>
          <a href="https://github.com/bytedance/DreamO" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              View on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;