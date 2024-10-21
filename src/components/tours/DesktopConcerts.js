const DesktopConcerts = ({ concerts, bcg }) => {
  return (
    <div className={`container-xxl py-5 hideOnMobile ${bcg}`}>
      <div className="container py-5 px-lg-5">
        <div className="row">
          {concerts.map((concert) => (
            <div className="col-12" key={concert.id}>
              <div className="card mb-3 nobordertransparent">
                <div className="row g-0">
                  {concert.id % 2 === 0 ? (
                    // Output if the concert.id is even (aligned to the right)
                    <>
                      <div className="col-md-6 nobkg">
                        <div className="card-body text-end nobkg">
                          <h1 className="card-title text-uppercase text-white fw-bold">
                            {concert.city}
                          </h1>
                          <h1 className="card-text text-white">
                            <span className="concertDate">{concert.date}</span>
                          </h1>
                          <p className="card-text text-white m-1">
                            {concert.venue}
                          </p>
                          {!concert.private && (
                            <p className="card-text">
                              {concert.time}{" "}
                              <i className="fa-solid fa-clock"></i>
                            </p>
                          )}
                          {concert.private && (
                            <p className="card-text">
                              Private event <i className="fa-solid fa-lock"></i>
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 concertCardDetailsRight d-flex align-items-center justify-content-center">
                        <div className="card-body">
                          <p className="card-text mb-3">
                            {concert.description}
                          </p>
                          {concert.special_guest && (
                            <p className="card-text mb-3 ml-2">
                              <i className="fa-solid fa-user"></i> {concert.special_guest}
                            </p>
                          )}
                          <p className="card-text">{concert.program}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Output if the concert.id is odd (aligned to the left)
                    <>
                      <div className="col-md-6 concertCardDetailsLeft d-flex align-items-center justify-content-center">
                        <div className="card-body">
                          <p className="card-text mb-3">
                            {concert.description}
                          </p>
                          {concert.special_guest && (
                            <p className="card-text mb-3">
                              {concert.special_guest} <i className="fa-solid fa-user"></i>
                            </p>
                          )}
                          <p className="card-text">{concert.program}</p>
                        </div>
                      </div>
                      <div className="col-md-6 nobkg">
                        <div className="card-body nobkg">
                          <h1 className="card-title text-uppercase text-white fw-bold">
                            {concert.city}
                          </h1>
                          <h1 className="card-text text-white">
                            <span className="concertDate">{concert.date}</span>
                          </h1>
                          <p className="card-text text-white m-1">
                            {concert.venue}
                          </p>
                          {!concert.private && (
                            <p className="card-text">
                              <i className="fa-solid fa-clock"></i>{" "}
                              {concert.time}
                            </p>
                          )}
                          {concert.private && (
                            <p className="card-text">
                              <i className="fa-solid fa-lock"></i> Private event
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopConcerts;
