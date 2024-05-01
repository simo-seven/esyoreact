import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-xxl py-5 vh-100 centerMiddle">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp text-center" data-wow-delay="0.1s">
          <h1>
            <i className="fa-solid fa-triangle-exclamation beCareful fa-2x"></i>
          </h1>
          <h1 className="mb-5 text-white" id="fillout">
            404
          </h1>
          <h2 className="text-white">Page Not Found</h2>
          <p>
            We're sorry, the page you have looked for does not exist in our
            website. <br />
            Maybe go to our home page or check you network status :)
          </p>
          <Link to="/" className="backhome">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
