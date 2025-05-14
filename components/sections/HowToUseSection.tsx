import StepCard from "../ui/StepCard";

const HowToUseSection = () => {
  const steps = [
    {
      icon: "/icons/download.svg",
      title: "Setup DreamO Environment",
      description: "Get started by cloning the DreamO repository from GitHub and setting up your environment. The installation process requires Python 3.10 and compatible dependencies. For optimal performance, a GPU with at least 16GB VRAM is recommended, but DreamO now supports consumer-grade GPUs through 8-bit quantization (--int8) and CPU offloading options (--offload) for systems with limited resources.",
    },
    {
      icon: "/icons/install.svg",
      title: "Prepare Your Input Images",
      description: "Select the images you want to use as input conditions for DreamO. For IP tasks, choose clear images of characters, objects, or animals. For ID tasks, use front-facing portraits with good lighting. For Try-On tasks, prepare images of clothing items like tops, bottoms, glasses, or hats with minimal background distraction. For Style tasks, select representative style images that clearly demonstrate your desired artistic approach.",
    },
    {
      icon: "/icons/integrate.svg",
      title: "Configure Task Parameters",
      description: "Choose your desired task (IP, ID, Try-On, Style) or combine multiple tasks for more creative control. Set the appropriate parameters including guidance scale (lower for less saturation, higher for better text generation and limb details), step count (12 steps with Turbo mode is recommended), and your text prompt describing the image you want to generate. Experiment with different prompt combinations to achieve optimal results.",
    },
    {
      icon: "/icons/performance.svg",
      title: "Generate & Refine Images",
      description: "Run the generation process and evaluate the results. DreamO provides high-fidelity outputs that maintain the key characteristics of your input conditions. If the generated images appear overly glossy or saturated, try lowering the guidance scale. For issues with text generation or limb distortion, consider increasing the guidance scale. You can further refine results by adjusting prompts or trying different combinations of input conditions.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="how-to-use">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          How to Use DreamO
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