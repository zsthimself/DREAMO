"use client";

const DemoSection = () => {
  return (
    <section className="py-20" id="demo">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
          See DreamO Demo in Action
        </h2>
        
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Watch how DreamO's unified image customization framework creates high-fidelity personalized 
          images from simple text prompts and reference images. This demonstration showcases DreamO's 
          ability to handle multiple customization tasks simultaneously, including IP adaptation, 
          ID preservation, virtual try-on, and style transfer.
        </p>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border-4 border-blue-100 shadow-xl">
          <div className="relative w-full pb-[56.25%]">
            <iframe 
              src="https://www.youtube.com/embed/EXDRRs7TvEY?si=Hd7wn6todPX6tghd" 
              title="DreamO Demo"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
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