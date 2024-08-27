import { Link } from "react-router-dom";

const UpcomingAuditions = ({ startDate, deadline, formatDate }) => {
  return (
    <>
      <h1 className="text-white text-3xl">
        Get Ready to Shine: Auditions Are Coming Back Soon!
      </h1>
      <p className="mt-10">
        {`Mark your calendars! The next audition period for the 2025 season will run from `}{" "}
        <span className="beCareful">{formatDate(startDate)}</span> {` to `}{" "}
        <span className="beCareful">{formatDate(deadline)}</span>{" "}
        {`. This is your chance to showcase your talent and be part of something amazing. Don’t miss out!`}
      </p>

      <p className="mt-3">
        Stay connected with us on social media for updates, tips, and more. We
        can't wait to see what you bring to the stage this season!
      </p>
      <p className="mt-3">
        Got questions? We're here to help! Head over to our{" "}
        <Link className="beCareful" to="/contact">
          Contact page
        </Link>{" "}
        for any inquiries.
      </p>
    </>
  );
};

export default UpcomingAuditions;
