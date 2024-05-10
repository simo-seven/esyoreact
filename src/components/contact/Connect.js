import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
  return (
    <div className="container-xxl py-5 mt-0 pt-0 hidden md:block">
      <div className="container py-5 px-lg-5 mt-0">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5 text-white text-4xl" id="fillout">
            Connect with us
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="social-icons">
                <Link
                  to="https://www.instagram.com/esyo_eu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                </Link>
                <Link
                  to="https://www.youtube.com/@esyo"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
