import Image from "next/image";

const PioneeringSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-4xl font-bold text-gray-900">
            Pioneering Image Generation at ByteDance
          </h2>
          <p className="text-xl text-blue-600">
            A Breakthrough in Unified Image Customization Technology
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
          <div className="md:w-2/5">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 p-8 shadow-2xl flex flex-col items-center">
              <div className="flex items-center gap-3 mb-8 self-start">
                <Image 
                  src="/logo.svg" 
                  alt="DreamO logo" 
                  width={36} 
                  height={36}
                  className="text-white"
                />
                <span className="text-2xl font-medium text-white">DreamO Framework</span>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center p-3">
                  <span className="text-white text-sm">IP Adaptation</span>
                </div>
                <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center p-3">
                  <span className="text-white text-sm">ID Preservation</span>
                </div>
                <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center p-3">
                  <span className="text-white text-sm">Virtual Try-On</span>
                </div>
                <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center p-3">
                  <span className="text-white text-sm">Style Transfer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5">
            <p className="mb-4 text-lg text-gray-700">
              DreamO is an innovative text-to-image generation model developed by ByteDance Research, 
              representing a significant advancement in the field of image customization. Released 
              under the Apache 2.0 license, DreamO introduces a unified framework that addresses 
              multiple image generation tasks simultaneously.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Unlike previous models that require separate specialized solutions for different 
              customization tasks, DreamO integrates IP adaptation, ID preservation, virtual try-on, 
              and style transfer capabilities into a single coherent framework. The model achieves 
              exceptional image fidelity while mitigating conflicts between multiple conditions.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              A key innovation in DreamO is its feature routing constraint, which effectively prevents 
              entanglement when handling multiple inputs. This allows users to combine multiple 
              conditions (like ID, IP, and try-on) to generate more creative images with precise control.
            </p>
            <p className="text-lg text-gray-700">
              DreamO supports a wide range of inputs including characters, objects, animals, 
              facial identity, clothing items (tops, bottoms, glasses, hats), and artistic styles. 
              The model runs on consumer-grade GPUs through techniques like 8-bit quantization 
              and CPU offloading, making advanced AI image generation more accessible to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PioneeringSection; 