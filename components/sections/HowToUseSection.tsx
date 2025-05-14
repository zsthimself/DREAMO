import StepCard from "../ui/StepCard";

const HowToUseSection = () => {
  const steps = [
    {
      icon: "/icons/download.svg",
      title: "Get Started with Nari Labs Dia",
      description: "Access Nari Labs Dia through GitHub or Hugging Face to download the Nari Labs model and code. Nari Labs provides comprehensive documentation to help you set up the environment and install dependencies for Nari Labs Dia. The installation process for Nari Labs technology is straightforward, requiring a compatible GPU with at least 10GB VRAM for optimal performance. Follow the step-by-step guide to configure your system for Nari Labs Dia, including Python environment setup and required libraries for Nari Labs products.",
    },
    {
      icon: "/icons/sliders.svg",
      title: "Customize Your Nari Labs Voice Settings",
      description: "Adjust voice parameters to create the perfect audio output for your needs with Nari Labs Dia. Nari Labs Dia offers extensive customization options for speaker characteristics, emotional tone, and speech patterns. You can select from preset voice profiles or create custom voices by providing reference audio samples to Nari Labs Dia. The intuitive interface from Nari Labs makes it easy to fine-tune voice attributes like pitch, speed, and emotional expressiveness in Nari Labs technology.",
    },
    {
      icon: "/icons/headphones.svg",
      title: "Generate & Download with Nari Labs",
      description: "Input your text and let Nari Labs Dia create high-quality speech in real-time. The Nari Labs model processes approximately 40 tokens per second on compatible hardware, allowing for immediate feedback and iterations with Nari Labs technology. Once Nari Labs Dia completes processing, you can download the audio in various formats for your project. The output from Nari Labs is compatible with standard audio editing software for further refinement if needed.",
    },
    {
      icon: "/icons/code.svg",
      title: "Integrate & Expand with Nari Labs",
      description: "Incorporate Nari Labs Dia into your applications using the provided API and code examples from Nari Labs. Nari Labs offers integration guides for common platforms and frameworks, making it easy to add Nari Labs voice capabilities to your projects. As you become more familiar with Nari Labs Dia, explore advanced features like Nari Labs voice cloning, emotional expression, and non-verbal audio cues to create truly immersive experiences with Nari Labs technology.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="how-to-use">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          How to Use Nari Labs
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;