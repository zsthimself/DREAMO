import FeatureDetailCard from "../ui/FeatureDetailCard";

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: "/icons/customize.svg",
      title: "Unified Feature Encoding Architecture",
      description: "DreamO employs a VAE-based architecture that encodes features into a semantic latent space, enabling high-fidelity preservation of character attributes. This approach significantly outperforms previous adapter methods in maintaining character identity across different scenarios. The innovative design allows DreamO to handle various customization tasks within a single coherent framework, eliminating the need for separate specialized models for different customization requirements.",
    },
    {
      icon: "/icons/user-clone.svg",
      title: "Multi-Condition Compatibility",
      description: "Generate images with multiple conditions simultaneously, such as combining ID preservation with virtual try-on or IP adaptation with style transfers. DreamO's feature routing constraint effectively prevents entanglement when handling multiple inputs, allowing for creative combinations without conflicts between different elements. This capability enables users to create highly personalized and unique images that precisely match their creative vision.",
    },
    {
      icon: "/icons/performance.svg",
      title: "Optimized Performance",
      description: "DreamO runs efficiently on consumer hardware through optimization techniques like 8-bit quantization and CPU offloading. For 24GB GPUs, users can enable 8-bit quantization with the '--int8' flag, while 16GB GPU users can combine quantization with CPU offloading using '--int8 --offload' flags. The model also includes support for the accelerated FLUX LoRA variant (FLUX-turbo) by default, reducing inference to just 12 steps instead of 25+ for faster image generation.",
    },
    {
      icon: "/icons/open-source.svg",
      title: "Open-Source Accessibility",
      description: "Available on GitHub under the Apache 2.0 license, DreamO includes model weights, inference code, and a Gradio-based demo for easy testing. ByteDance provides comprehensive documentation to help developers of all skill levels implement and customize the technology for their specific needs. The open-source nature of DreamO encourages community contributions and innovations that can further extend its capabilities.",
    },
    {
      icon: "/icons/integration.svg",
      title: "Comprehensive Task Support",
      description: "DreamO excels at four major customization tasks: IP adaptation for preserving the appearance of characters, objects, and animals; ID preservation for maintaining facial identity in diverse images; virtual try-on for adding clothing items to generated images; and style transfer for applying artistic styles. This comprehensive support enables creators to achieve their desired results without switching between different specialized models for each task.",
    },
    {
      icon: "/icons/shield.svg",
      title: "Quality Control Mechanisms",
      description: "DreamO incorporates several parameters that users can adjust to optimize output quality. The guidance scale can be lowered to reduce over-saturation or increased to improve text generation and limb details. Step count can be adjusted based on speed vs. quality requirements, with the default Turbo mode using 12 steps for efficient generation. These controls allow users to fine-tune the generation process to achieve their desired aesthetic with minimal artifacts.",
    },
  ];

  return (
    <section className="bg-white py-20" id="features">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Advanced Features of DreamO
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureDetailCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection; 