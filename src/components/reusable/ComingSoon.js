import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="col-md-12 mt-5 mb-5">
      <div className="text-center">
        <h1 className="text-white mb-3 text-4xl">
          Official Dates Coming Soon!
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          The next ESYO tour is scheduled for{" "}
          <span className="beCareful">Summer 2027</span>, followed by the Winter
          Tour taking place{" "}
          <span className="beCareful">between 2027 and 2028</span>. <br /> Follow us on{" "}
          <Link
            to="https://www.instagram.com/esyo_eu/"
            target="_blank"
            rel="noreferrer noopener"
            className="beCareful"
          >
            Instagram
          </Link>{" "}
          to stay up to date.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
