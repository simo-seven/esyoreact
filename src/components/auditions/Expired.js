import { Link } from "react-router-dom";

const Expired = ({ deadline, formatDate }) => {
  return (
    <>
      <h1 className="text-white text-3xl">
        Oops, You're a Little Bit Out of Time!
      </h1>
      <p className="mt-10">
        {`The audition period has ended on ${formatDate(
          deadline
        )}, but the excitement doesn't stop here!
            Follow us on our social media channels to stay in the loop and be
            the first to know when auditions open for next year. `}
        <span className="beCareful">Stay tuned!</span>
        <p className="mt-3">
          If you need to get in touch, feel free to visit our{" "}
          <Link className="beCareful" to="/contact">
            Contact page
          </Link>{" "}
          anytime.
        </p>
      </p>
    </>
  );
};

export default Expired;
