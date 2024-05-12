import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AuditionSuccess = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5 formsuccess vh-100">
        <div className="wow fadeInUp text-center" data-wow-delay="0.1s">
          <h1>
            <FontAwesomeIcon
              icon={faClipboardCheck}
              className="beCareful fa-2x"
            />
          </h1>
          <h1 className="mb-5 text-white" id="fillout">
            All good!
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <p>
                Thanks for applying and for your interest in the <br /> European
                Spirit of Youth Orchestra.
              </p>
              <Link to="/" className="backhome">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditionSuccess;
