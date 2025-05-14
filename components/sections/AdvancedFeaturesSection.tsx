import FeatureDetailCard from "../ui/FeatureDetailCard";

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: "/icons/user-voice.svg",
      title: "Nari Labs Realistic Dialogue Synthesis",
      description: "Nari Labs Dia produces natural-sounding conversations with customizable speaker tones, emotional inflections, and nonverbal cues like laughter, coughs, sighs, and even screams. This enhanced expressiveness creates truly immersive audio experiences that connect with listeners on an emotional level. The technology behind Nari Labs Dia analyzes linguistic patterns and contextual cues to deliver appropriate vocal responses, making automated dialogue feel authentic and engaging with Nari Labs innovation.",
    },
    {
      icon: "/icons/user-clone.svg",
      title: "Nari Labs Zero-Shot Voice Cloning",
      description: "Clone voices with just seconds of reference audio using Nari Labs technology, compared to traditional methods requiring hours of samples. Nari Labs Dia's advanced neural architecture captures the essence of a voice from minimal input, preserving unique characteristics while allowing for natural expression across different contexts. This Nari Labs capability enables personalized content creation, localization, and accessibility solutions without extensive recording sessions using Nari Labs Dia.",
    },
    {
      icon: "/icons/performance.svg",
      title: "Nari Labs Real-Time Performance",
      description: "Nari Labs Dia streams in real-time on a single GPU (approximately 40 tokens/second on an NVIDIA A4000) with plans for CPU support and quantization from Nari Labs. The efficient architecture of Nari Labs balances quality and performance, making it suitable for interactive applications where responsiveness is crucial. Nari Labs continues to optimize the model for broader hardware compatibility without compromising on Nari Labs audio quality.",
    },
    {
      icon: "/icons/open-source.svg",
      title: "Nari Labs Open-Source Accessibility",
      description: "Available on GitHub and Hugging Face under the Apache 2.0 license, Nari Labs Dia includes pretrained checkpoints, inference code, and a Gradio-based demo. The comprehensive documentation from Nari Labs helps developers of all skill levels implement and customize the Nari Labs technology for their specific needs. Nari Labs actively encourages community contributions to improve and extend Nari Labs Dia's capabilities.",
    },
    {
      icon: "/icons/users.svg",
      title: "Nari Labs Multi-Speaker Support",
      description: "Create conversations between multiple distinct voices within a single generation with Nari Labs Dia, perfect for podcasts, audiobooks, and games. Nari Labs Dia can maintain consistent voice characteristics across extended dialogues while appropriately varying tone and emotion based on context. This Nari Labs feature simplifies the production of multi-character content, reducing the need for multiple recording sessions or voice actors when using Nari Labs technology.",
    },
    {
      icon: "/icons/shield.svg",
      title: "Nari Labs Ethical Design Considerations",
      description: "Nari Labs prohibits misuse such as impersonation or generating deceptive content with Nari Labs Dia, though they acknowledge the current limitations in Nari Labs safeguards. The Nari Labs team is actively researching methods to detect and prevent potential misuse while maintaining the Nari Labs model's creative potential. Nari Labs encourages responsible use through Nari Labs community guidelines and transparent communication about the Nari Labs technology's capabilities and limitations.",
    },
  ];

  return (
    <section className="bg-white py-20" id="features">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Advanced Features of Nari Labs
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