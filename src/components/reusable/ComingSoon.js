import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="col-md-12 mt-5 mb-5">
      <div className="text-center">
        <h1 className="text-white mb-3 text-4xl">
          Official Dates Coming Soon!!!
        </h1>
        <p>
          The ESYO Winter Tour 2025 is planned to take place from December 26,
          2025 to January 6, 2026. <br /> Follow us on{" "}
          {/* featuring XXX concerts across Italy, Slovenia, Croatia, and Austria. <br /> Follow us on{" "} */}
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
