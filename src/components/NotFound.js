import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import SEO from "./common/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 Page Not Found"
        description="The page you requested could not be found on the European Spirit of Youth Orchestra website."
        noindex={true}
      />
      <div className="container-xxl py-5 min-h-[70vh] flex items-center justify-center">
        <div className="container py-5 px-4 text-center max-w-lg mx-auto">
          <div className="animate__animated animate__fadeInUp">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="text-[#f68642] text-6xl mb-4"
            />
            <h1 className="text-white text-6xl font-extrabold mb-2" id="fillout">
              404
            </h1>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              We're sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/"
              className="btn btn-secondary py-3 px-8 rounded-full font-bold inline-block hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
