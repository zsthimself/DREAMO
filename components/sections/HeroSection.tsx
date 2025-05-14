import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:gap-8 lg:justify-center">
          <div className="mb-12 max-w-md pl-0 lg:pl-8 text-left lg:mb-0 lg:w-2/5">
            <h1 id="hero-heading" className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              A Unified Framework for{" "}
              <span className="text-blue-600">Image Customization</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              DreamO is ByteDance's advanced text-to-image AI model that offers unprecedented 
              image customization capabilities with multiple tasks in a unified framework. 
              Generate personalized images with high fidelity and exceptional detail, using 
              IP adaptation, ID preservation, virtual try-on, and style transfer.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://huggingface.co/spaces/ByteDance/DreamO" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Try DreamO on Hugging Face"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Try it Now
                </Button>
              </a>
              <a 
                href="https://github.com/bytedance/DreamO" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View DreamO on GitHub"
              >
                <Button variant="outline" size="lg" className="border-gray-300 transition-all duration-300 transform hover:scale-105">
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:w-3/5 flex justify-center items-center">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-2xl p-8 w-full max-w-xl" role="presentation" aria-label="DreamO model demonstration">
              <div className="flex items-center gap-2 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
                <span className="text-white text-base font-medium">DreamO by ByteDance</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="relative rounded-lg overflow-hidden h-32 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                    IP Adaptation
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden h-32 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                    ID Preservation
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden h-32 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                    Virtual Try-On
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden h-32 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                    Style Transfer
                  </div>
                </div>
              </div>
              
              <div className="text-white text-base mb-2">
                <span className="text-blue-300">Prompt:</span> A girl with a red dress in a magical forest
              </div>
              <div className="text-white text-base mb-4">
                <span className="text-blue-300">Task:</span> Multi Condition (IP + Try-On + Style)
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white">
                <span className="text-3xl" role="img" aria-label="GitHub logo">⭐</span>
                <span className="text-lg">github.com/bytedance/DreamO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;