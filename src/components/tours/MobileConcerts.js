const MobileConcerts = ({ concerts }) => {
  return (
    <div className="container-xxl py-3 onlyMobile bckblack pt-5 pb-5">
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
                <h4 className="beCareful">
                  {concert.date}{!concert.private && (`, ${concert.time}`)}
                </h4>
                {concert.private && (
                  <p className="card-text mt-2">
                    <i className="fa-solid fa-lock"></i> Private event
                  </p>
                )}
                {concert.special_guest && (
                  <p className="card-text mt-2">
                    <i className="fa-solid fa-user"></i> {concert.special_guest}
                  </p>
                  )}
                <p className="m-0 mt-2 text-white">
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
