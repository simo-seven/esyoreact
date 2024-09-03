import ScrollToTopLink from "../reusable/ScrollToTopLink";

const HomeBiography = ({ title, bio }) => {
  return (
    <div className="container-xxl py-5 bckblack">
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <h1 className="mb-3 text-white text-5xl">{title}</h1>
          <p>
            {bio.map(
              (paragraph) =>
                paragraph.id === "1" &&
                paragraph.body.split(" ").slice(0, 77).join(" ") + "..."
            )}
          </p>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <ScrollToTopLink
              to="/orchestra"
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
            >
              Our History
            </ScrollToTopLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBiography;
