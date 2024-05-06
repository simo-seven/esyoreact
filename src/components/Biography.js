import ScrollToTopLink from "../ScrollToTopLink";

const Biography = () => {
  return (
    <div className="container-xxl py-5 bckblack">
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <h1 className="mb-3 text-white text-5xl">The ESYO Orchestra</h1>
          <p className="text-white">
            The European Spirit of Youth Orchestra (ESYO) is a symphonic
            ensemble that, through its sound, captures the European spirit of
            the youth. It is the exemplary proof that the European dream is
            possible, youthful, and has a symphonic soul that resonates
            perfectly in harmony, thanks to the diversity of its voices,
            cultures, and traditions.
          </p>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <ScrollToTopLink
              to="/orchestra"
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
            >
              Our History
            </ScrollToTopLink>
            {/* href="/about/orchestra.html"
                className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
                style="margin-top: 0 !important"
                >Our History</a */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
