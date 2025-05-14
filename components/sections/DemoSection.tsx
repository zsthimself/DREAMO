"use client";

const DemoSection = () => {
  return (
    <section className="py-20" id="demo">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
          See Nari Labs Demo in Action
        </h2>
        
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Watch how Nari Labs text-to-speech technology creates ultra-realistic dialogue from 
          simple text input. This demonstration showcases Nari Labs Dia's ability to generate 
          expressive, natural-sounding speech with emotional nuances and non-verbal elements 
          from Nari Labs.
        </p>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border-4 border-indigo-100 shadow-xl">
          <div className="relative w-full pb-[56.25%]">
            <iframe 
              src="https://www.youtube.com/embed/asQINiJqvBg?si=p-HAh6P7ARTORoUq" 
              title="Nari Labs Demo"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 