import { Link } from "react-router-dom";

const UpcomingAuditions = ({ startDate, deadline, formatDate }) => {
  return (
    <div className="py-5 text-center max-w-2xl mx-auto">
      <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2 justify-content-center">
        <span></span>Auditions Coming Soon<span></span>
      </p>
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
        Get Ready to Shine: Auditions Are Coming Back Soon!
      </h1>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
        Mark your calendars! The next audition period for the next season will run from{" "}
        <span className="beCareful">{formatDate(startDate)}</span> to{" "}
        <span className="beCareful">{formatDate(deadline)}</span>. This is your chance to showcase your talent and be part of something amazing. Don’t miss out!
      </p>
      <p className="text-gray-400 text-base mb-6">
        Stay connected with us on social media for updates, tips, and more. We can't wait to see what you bring to the stage this season!
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

export default UpcomingAuditions;
