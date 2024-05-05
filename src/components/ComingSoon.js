import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="col-md-12">
      <div className="text-center">
        <h1 className="text-white mb-3 text-4xl">Coming Soon!!!</h1>
        <p>
          Follow us on{" "}
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
