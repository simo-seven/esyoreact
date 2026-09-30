import { Link } from "react-router-dom";

const Video = () => {
  const video = "/vid/videoback.mp4";
  const poster = "/img/testbkg2BW.jpg";

  return (
    <div className="container-xxl position-relative p-0 h-screen max-h-screen overflow-hidden">
      <div
        id="div-to-scroll-past"
        className="video-wrapper w-full h-full relative flex items-center overflow-hidden"
      >
        <video
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
          poster={poster}
          className="video-bg"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

        <div className="container px-4 sm:px-6 lg:px-12 z-10 pt-12 sm:pt-16">
          <div className="max-w-2xl text-left">
            <h1 className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-4 sm:mb-6 animate__animated animate__fadeInDown">
              United <br />
              <span className="text-[#f68642]">Together</span>
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mb-6 sm:mb-8 leading-relaxed font-light">
              Embodying the European youth's spirit through orchestral excellence and cultural dialogue.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/concertours"
                className="btn btn-secondary py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-orange-500/20"
              >
                What's On?
              </Link>
              <Link
                to="/auditions"
                className="py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold text-white border-2 border-[#f68642] hover:bg-[#f68642] hover:text-black transition-all duration-200 active:scale-95"
              >
                Auditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
