import { Link } from "react-router-dom";

const Video = () => {
  const video = "/vid/videoback.mp4";

  return (
    <div className="container-xxl position-relative p-0">
      <div
        id="div-to-scroll-past"
        className="container-xxl bg-primary hero-header video-wrapper height100vh"
      >
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="cake.x"
          className="grayscale"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container px-lg-5 zindex1">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6 text-lg-start">
              <h1 className="text-white mb-4 animated slideInDown unitedTogether">
                United <br /> Together
              </h1>
              <Link
                to="/auditions"
                className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight wow joinNow"
              >
                Join the orchestra now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
