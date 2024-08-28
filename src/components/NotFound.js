import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
        <link rel="canonical" href="*" />
      </Helmet>
      <div className="container-xxl py-5 vh-100 centerMiddle">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp text-center" data-wow-delay="0.1s">
            <h1>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="beCareful fa-4x"
              />
            </h1>
            <h1 className="mb-5 text-white text-6xl mt-2" id="fillout">
              404
            </h1>
            <h2 className="text-white text-4xl">Page Not Found</h2>
            <p className="mt-4 mb-4">
              We're sorry, the page you have looked for does not exist on our
              website. <br /> Maybe go to our home page or check your network
              status :)
            </p>
            <Link to="/" className="backhome beCareful">
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
