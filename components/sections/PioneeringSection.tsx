import Image from "next/image";

const PioneeringSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-4xl font-bold text-gray-900">
            Pioneering Voice AI at Nari Labs
          </h2>
          <p className="text-xl text-indigo-600">
            The Future of Text-to-Speech Technology with Nari Labs
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
          <div className="md:w-2/5">
            <div className="overflow-hidden rounded-2xl bg-black p-8 shadow-2xl flex flex-col items-center">
              <div className="flex items-center gap-3 mb-8 self-start">
                <Image 
                  src="/logo.svg" 
                  alt="Nari Labs logo" 
                  width={36} 
                  height={36}
                  className="text-white"
                />
                <span className="text-2xl font-medium text-white">Nari Dia-1.6B</span>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/waveform.svg" 
                  alt="Audio waveform" 
                  width={300} 
                  height={120} 
                  className="opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="md:w-3/5">
            <p className="mb-4 text-lg text-gray-700">
              Nari Labs is a small South Korean startup founded by two undergraduate 
              students, including Toby Kim, focused on advancing Nari Labs text-to-speech 
              (TTS) technology. Nari Labs' primary product is Dia, a 1.6 billion parameter 
              open-source TTS model released under the Apache 2.0 license. 
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Nari Labs Dia is designed to generate ultra-realistic dialogue from text transcripts, 
              rivaling proprietary models like ElevenLabs, Google's NotebookLM, and Sesame. Built 
              with zero funding, Nari Labs leveraged Google's TPU Research Cloud and 
              Hugging Face's ZeroGPU grant to create this Nari Labs groundbreaking technology.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Nari Labs Dia features realistic dialogue synthesis with customizable speaker 
              tones, emotional inflections, and nonverbal cues like laughter and sighs. Nari 
              Labs technology supports zero-shot voice cloning from just seconds of 
              reference audio and performs in real-time on a single GPU.
            </p>
            <p className="text-lg text-gray-700">
              As an open-source project available on GitHub and Hugging Face, Nari Labs Dia includes 
              pretrained checkpoints, inference code, and a demo for easy testing. Nari Labs 
              designed it for researchers, developers, and content creators, with applications 
              in virtual assistants, gaming, audiobooks, and accessibility tools from Nari Labs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PioneeringSection; 