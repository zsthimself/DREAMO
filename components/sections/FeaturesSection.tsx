import FeatureCard from "../ui/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: "/icons/customize.svg",
      title: "Unified Image Customization Framework",
      description: "DreamO introduces a groundbreaking unified framework that handles multiple image customization tasks simultaneously. Unlike previous approaches requiring separate specialized models, DreamO integrates IP adaptation, ID preservation, virtual try-on, and style transfer in one coherent system. This unified approach simplifies implementation while ensuring consistent high-quality results across different customization needs.",
    },
    {
      icon: "/icons/user-clone.svg",
      title: "High-Fidelity Character Preservation",
      description: "DreamO excels at preserving character identity with remarkable fidelity. Through VAE-based feature encoding, it achieves higher fidelity than previous adapter methods, with a distinct advantage in preserving character identity across various poses, expressions, and scenarios. This makes DreamO ideal for creating consistent character representations in different creative contexts.",
    },
    {
      icon: "/icons/integration.svg",
      title: "Multi-Condition Generation",
      description: "DreamO's feature routing constraint effectively prevents entanglement when handling multiple inputs. This breakthrough allows users to combine multiple conditions (like ID, IP, and try-on) to generate more creative images without conflicts between different elements. The model successfully mitigates issues that typically arise when mixing different customization requirements in the same image.",
    },
    {
      icon: "/icons/open-source.svg",
      title: "Open-Source Accessibility",
      description: "Available on GitHub under the Apache 2.0 license, DreamO includes model weights, inference code, and a Gradio-based demo for easy testing. ByteDance has also added support for 8-bit quantization and CPU offload to enable execution on consumer-grade GPUs (16GB or 24GB), making advanced AI image customization more accessible to users with standard hardware.",
    },
  ];

  return (
    <section className="bg-white py-20" id="features">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Why Choose DreamO
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
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

export default FeaturesSection; 