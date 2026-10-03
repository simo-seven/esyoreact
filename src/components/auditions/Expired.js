import { Link } from "react-router-dom";

const Expired = ({ deadline, formatDate }) => {
  return (
    <div className="py-5 text-center max-w-2xl mx-auto">
      <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2 justify-content-center">
        <span></span>Auditions Notice<span></span>
      </p>
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
        Auditions Are Closed
      </h1>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
        {`The audition period ended on `}
        <span className="beCareful">{formatDate(deadline)}</span>
        {`. The next auditions will be announced soon! Follow us on our social media channels to stay in the loop and be the first to know when registrations open for the next season. `}
        <span className="beCareful">Stay tuned!</span>
      </p>
      <div className="pt-2">
        <Link
          to="/contact"
          className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-block hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Expired;
