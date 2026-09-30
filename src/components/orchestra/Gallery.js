const Gallery = () => {
  return (
    <div className="w-full my-8">
      <div className="container px-3 sm:px-lg-5">
        <div className="flex justify-center items-center text-center py-6 sm:py-12">
          {/* Desktop creative clip-path gallery */}
          <div className="gallery hidden md:grid">
            <img
              src="/img/rossetti/_DSF0138.jpg"
              alt="European Spirit of Youth Orchestra in concert"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/img/rossetti/_DSF1063.jpg"
              alt="Orchestra performance at Teatro Rossetti"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/img/rossetti/_DSF1105.jpg"
              alt="Young musicians performing under Maestro Igor Coretti Kuret"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/img/rossetti/_DSF1121.jpg"
              alt="ESYO string section in performance"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Mobile responsive 2x2 grid with rounded corners */}
          <div className="grid grid-cols-2 gap-3 md:hidden w-full">
            <div className="aspect-square overflow-hidden rounded-xl bg-black/40">
              <img
                src="/img/rossetti/_DSF0138.jpg"
                alt="European Spirit of Youth Orchestra in concert"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl bg-black/40">
              <img
                src="/img/rossetti/_DSF1063.jpg"
                alt="Orchestra performance at Teatro Rossetti"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl bg-black/40">
              <img
                src="/img/rossetti/_DSF1105.jpg"
                alt="Young musicians performing"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl bg-black/40">
              <img
                src="/img/rossetti/_DSF1121.jpg"
                alt="ESYO string section in performance"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;