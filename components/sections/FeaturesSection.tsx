import FeatureCard from "../ui/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: "/icons/microphone.svg",
      title: "Nari Labs Ultra-Realistic Dialogue Synthesis",
      description: "Nari Labs Dia produces natural-sounding conversations with customizable speaker tones, emotional inflections, and nonverbal cues like laughter, coughs, sighs, and even screams. This level of expressiveness creates an immersive audio experience that rivals proprietary solutions. Whether you need subtle emotional nuances or dramatic vocal performances, Nari Labs Dia delivers exceptional quality that enhances storytelling, gaming experiences, and virtual assistants with Nari Labs technology.",
    },
    {
      icon: "/icons/clone.svg",
      title: "Nari Labs Zero-Shot Voice Cloning",
      description: "Nari Labs Dia supports efficient voice cloning, replicating a speaker's voice from just seconds of reference audio. Traditional methods require hours of samples, but Nari Labs' technology needs only a brief clip to capture voice characteristics. This Nari Labs breakthrough makes personalized voice experiences more accessible for developers and content creators, enabling custom voice assistants, localized content, and personalized audio experiences with minimal setup time using Nari Labs solutions.",
    },
    {
      icon: "/icons/chip.svg",
      title: "Nari Labs Real-Time Performance",
      description: "The Nari Labs model streams in real-time on a single GPU (e.g., NVIDIA A4000, ~40 tokens/second) and requires ~10GB VRAM. Nari Labs is actively working on CPU support and quantization to make Nari Labs Dia accessible on more devices. This Nari Labs performance optimization ensures Nari Labs Dia can be integrated into interactive applications, games, and streaming platforms where responsive audio generation is critical for user experience with Nari Labs technology.",
    },
    {
      icon: "/icons/github.svg",
      title: "Nari Labs Open-Source Accessibility",
      description: "Available on GitHub and Hugging Face under the Apache 2.0 license, Nari Labs Dia includes pretrained checkpoints, inference code, and a Gradio-based demo for easy testing. Nari Labs believes in democratizing voice AI technology, making advanced speech synthesis available to everyone from independent developers to research institutions. The Nari Labs open-source approach encourages community contributions, accelerating innovation in Nari Labs voice technology.",
    },
  ];

  return (
    <section className="bg-white py-20" id="features">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Why Choose Nari Labs
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