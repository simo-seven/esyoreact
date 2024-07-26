const MobileConcerts = ({ concerts }) => {
  return (
    <div className="container-xxl py-3 onlyMobile">
      <div className="container py-1 px-lg-3">
        <div className="row g-4">
          {concerts.map((concert) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={concert.id}
            >
              <div className="d-flex flex-column text-center rounded bg-grey py-4">
                <i className="fa fa-calendar fa-2x beCareful py-4"></i>
                <h4 className="mb-3 beCareful">
                  {concert.date}, {concert.time}
                </h4>
                <p className="m-0 text-white">
                  {concert.venue} <br />
                  <span className="fw-bold">{concert.city}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileConcerts;
