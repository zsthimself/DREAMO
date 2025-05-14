import FAQItem from "../ui/FAQItem";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is DreamO and how does it differ from other image generation models?",
      answer:
        "DreamO is an advanced text-to-image generation model developed by ByteDance Research that introduces a unified framework for image customization. What sets DreamO apart is its ability to handle multiple customization tasks (IP adaptation, ID preservation, virtual try-on, and style transfer) within a single framework, whereas previous approaches typically required separate specialized models for each task. DreamO achieves higher fidelity character preservation through VAE-based feature encoding and effectively prevents conflicts between multiple conditions thanks to its innovative feature routing constraint.",
    },
    {
      question: "What types of customization tasks does DreamO support?",
      answer:
        "DreamO supports four main customization tasks: (1) IP Adaptation - preserving the appearance of characters, objects, and animals; (2) ID Preservation - maintaining facial identity while generating diverse images; (3) Virtual Try-On - adding clothing items like tops, bottoms, glasses, and hats to generated images; and (4) Style Transfer - applying artistic styles to generated images. One of DreamO's key strengths is its ability to combine multiple conditions (e.g., ID + Try-On) to create more creative and personalized images with precise control.",
    },
    {
      question: "What are the hardware requirements for running DreamO?",
      answer:
        "For optimal performance, DreamO traditionally requires a GPU with at least 16GB VRAM. However, ByteDance has recently added support for consumer-grade GPUs through two optimization methods: (1) For 24GB GPUs, users can run DreamO with 8-bit quantization using the '--int8' flag; (2) For 16GB GPUs, both 8-bit quantization and CPU offloading can be enabled with the '--int8 --offload' flags. Note that CPU offloading significantly reduces inference speed and should only be used when necessary. The model also supports the accelerated FLUX LoRA variant (FLUX-turbo) by default, reducing inference to 12 steps instead of 25+.",
    },
    {
      question: "How can I access and use DreamO?",
      answer:
        "DreamO is available as an open-source project on GitHub under the Apache 2.0 license. You can clone the repository at github.com/bytedance/DreamO, which includes model weights, inference code, and a Gradio-based demo for easy testing. Installation requires Python 3.10 and the dependencies listed in the requirements.txt file. For quick inference, you can also access DreamO through the Hugging Face Space at huggingface.co/spaces/ByteDance/DreamO, which provides a user-friendly interface for generating images without local installation.",
    },
    {
      question: "What parameters should I adjust to get better results with DreamO?",
      answer:
        "DreamO's output quality can be fine-tuned by adjusting several key parameters: (1) Guidance Scale - For overly glossy or over-saturated images, try lowering the guidance scale; for poor text generation or limb distortion, try increasing the guidance scale; (2) Steps - The default setting with Turbo enabled is 12 steps, which provides a good balance of quality and speed; (3) Prompts - Descriptive and specific text prompts help guide the generation process; (4) Task Selection - Choose the appropriate task (IP, ID, Try-On, Style) based on your specific needs, or combine multiple tasks for more creative control. Experimentation with these parameters will help achieve optimal results.",
    },
    {
      question: "Are there any limitations or known issues with the current version of DreamO?",
      answer:
        "While DreamO represents a significant advancement in image customization, there are some known limitations in the current version: (1) Style consistency is currently less stable compared to other tasks, and style cannot be combined with other conditions in the current release; (2) Some users may encounter over-saturation and 'plastic-face' issues, though the latest model update has significantly mitigated these problems; (3) When using multiple conditions, there can still be occasional conflicts between different elements; (4) For consumer-grade GPUs using quantization and CPU offloading, there may be some quality degradation and significantly slower inference times. The ByteDance team is actively working on addressing these limitations in future releases.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions About DreamO
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