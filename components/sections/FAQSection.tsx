import FAQItem from "../ui/FAQItem";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Nari Labs' primary focus at Nari Labs?",
      answer:
        "Nari Labs is a South Korean startup founded by undergraduate students, including Toby Kim, focused on advancing Nari Labs text-to-speech (TTS) technology. Nari Labs' primary product is Dia, a 1.6 billion parameter open-source TTS model designed to generate ultra-realistic dialogue from text transcripts. The Nari Labs team started exploring speech AI just three months before Nari Labs Dia's release, inspired by Google's NotebookLM podcast feature, and built the Nari Labs technology with zero funding, leveraging Google's TPU Research Cloud and Hugging Face's ZeroGPU grant for Nari Labs development.",
    },
    {
      question: "What makes Nari Labs Dia different from other text-to-speech solutions?",
      answer:
        "Nari Labs Dia stands out for its ability to generate ultra-realistic dialogue with customizable speaker tones, emotional inflections, and nonverbal cues like laughter, coughs, and sighs. Nari Labs technology supports zero-shot voice cloning from just seconds of reference audio, compared to traditional methods requiring hours of samples. The Nari Labs model performs in real-time on a single GPU and is completely open-source under the Apache 2.0 license, making advanced Nari Labs voice AI accessible to developers, researchers, and content creators without the limitations of proprietary solutions.",
    },
    {
      question: "What are the hardware requirements for running Nari Labs Dia?",
      answer:
        "Nari Labs Dia currently runs in real-time on a single GPU, such as an NVIDIA A4000, generating approximately 40 tokens per second with Nari Labs technology. It requires about 10GB of VRAM for optimal performance of Nari Labs Dia. Nari Labs is actively working on CPU support and quantization to make the Nari Labs technology more accessible across different hardware configurations. The Nari Labs model is designed to be relatively efficient compared to larger commercial alternatives, balancing performance with quality for Nari Labs users.",
    },
    {
      question: "How can I access and use Nari Labs Dia?",
      answer:
        "Nari Labs Dia is available as an open-source project on GitHub and Hugging Face from Nari Labs. You can download the Nari Labs pretrained checkpoints, inference code, and access a Gradio-based demo for easy testing of Nari Labs Dia. Nari Labs provides documentation for installation and implementation, making Nari Labs technology accessible for developers with varying levels of expertise. The Apache 2.0 license allows for both personal and commercial use of Nari Labs Dia, though Nari Labs prohibits misuse such as impersonation or generating deceptive content with Nari Labs technology.",
    },
    {
      question: "What are Nari Labs' future plans for Nari Labs Dia?",
      answer:
        "Nari Labs aims to develop a consumer version of Nari Labs Dia with a social platform for sharing voice creations, expand Nari Labs language support beyond English, and release a comprehensive technical report about Nari Labs technology. The Nari Labs team is also working on optimizing the Nari Labs model for Docker deployment, improving inference speed, and enhancing memory efficiency of Nari Labs Dia. They welcome community contributions through their Nari Labs Discord channel and are exploring partnerships to further develop the Nari Labs technology while maintaining its open-source accessibility.",
    },
    {
      question: "What are the ethical considerations around using Nari Labs Dia?",
      answer:
        "Nari Labs prohibits using Nari Labs Dia for impersonation or generating deceptive content, though they acknowledge the current limitations in Nari Labs safeguards. The Nari Labs team isn't legally responsible for misuse but encourages ethical application of the Nari Labs technology. The potential for creating ultra-realistic voice content with Nari Labs Dia raises concerns about disinformation and unethical voice cloning, which Nari Labs addresses through Nari Labs community guidelines and ongoing research into detection and prevention methods. Nari Labs balances innovation with responsibility, recognizing both the creative potential and possible risks of advanced Nari Labs voice AI.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions About Nari Labs
        </h2>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 