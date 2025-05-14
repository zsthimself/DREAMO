import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:gap-8 lg:justify-center">
          <div className="mb-12 max-w-md pl-0 lg:pl-8 text-left lg:mb-0 lg:w-2/5">
            <h1 id="hero-heading" className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Open-Source TTS AI by{" "}
              <span className="text-indigo-600">Nari Labs</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Nari Labs focused on advancing text-to-speech (TTS) technology. Their
              primary product is Dia, a 1.6 billion parameter open-source TTS
              model released under the Apache 2.0 license. Dia is designed to
              generate ultra-realistic dialogue from text transcripts.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://huggingface.co/spaces/nari-labs/Dia-1.6B" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Try Dia 1.6B on Hugging Face"
              >
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Try it Now
                </Button>
              </a>
              <a 
                href="https://github.com/nari-labs/dia" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Dia documentation on GitHub"
              >
                <Button variant="outline" size="lg" className="border-gray-300 transition-all duration-300 transform hover:scale-105">
                  View Documentation
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:w-3/5 flex justify-center items-center">
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl p-8 w-full max-w-xl" role="presentation" aria-label="Dia model demonstration">
              <div className="flex items-center gap-2 mb-5">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M10 2.5L16.25 17.5H3.75L10 2.5Z" fill="white"/>
                </svg>
                <span className="text-white text-base font-medium">Nari Dia 1.6B</span>
              </div>
              
              <div className="text-amber-500 text-base mb-2" role="text" aria-label="Speaker 1: Dia is a text to dialogue model.">[S1] Dia is a text to dialogue model.</div>
              <div className="text-white text-base mb-2" role="text" aria-label="Speaker 2: You get full control over scripts and voices.">[S2] You get full control over scripts and voices.</div>
              <div className="text-amber-500 text-base mb-5" role="text" aria-label="Speaker 1: Wow. Amazing. (laughs)">[S1] Wow. Amazing. (laughs)</div>
              
              <div className="flex justify-center mb-8">
                <svg width="400" height="70" viewBox="0 0 400 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" aria-label="Audio waveform visualization">
                  <path d="M10,35 Q20,5 30,35 Q40,65 50,35 Q60,5 70,35 Q80,65 90,35 Q100,5 110,35 Q120,65 130,35 Q140,5 150,35 Q160,65 170,35 Q180,5 190,35 Q200,65 210,35 Q220,5 230,35 Q240,65 250,35 Q260,5 270,35 Q280,65 290,35 Q300,5 310,35 Q320,65 330,35 Q340,5 350,35 Q360,65 370,35 Q380,5 390,35" stroke="orange" strokeWidth="3" fill="none" />
                </svg>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white">
                <span className="text-3xl" role="img" aria-label="Hugging Face logo">🤗</span>
                <span className="text-lg">huggingface.co/nari-labs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;