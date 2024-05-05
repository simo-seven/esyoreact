const DesktopConcerts = ({ concerts }) => {
  return (
    <div className="container-xxl py-5 hideOnMobile">
      <div className="container py-5 px-lg-5">
        <div className="container">
          <div className="row">
            {concerts.map((concert) => (
              <div className="col-12">
                <div className="card mb-3 nobordertransparent">
                  {concert.id % 2 === 0 ? (
                    // ouput if the concert.id is odd (aligned to the right)
                    <div className="row g-0" key={concert.id}>
                      <div className="col-md-6 nobkg">
                        <div className="card-body text-end nobkg">
                          <h1 className="card-title text-uppercase text-white fw-bold">
                            {concert.city}
                          </h1>
                          <h1 className="card-text text-white">
                            <span className="concertDate">{concert.date}</span>
                          </h1>
                          <p className="card-text text-white">
                            {concert.venue}
                          </p>
                          <p className="card-text">
                            <i className="fa-solid fa-clock"></i> {concert.time}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 concertCardDetailsRight">
                        <div className="card-body">
                          <p className="card-text">{concert.description}</p>
                          <p className="card-text">{concert.program}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // ouput if the concert.id is even (aligned to the left)
                    <div className="row g-0" key={concert.id}>
                      <div className="col-md-6 concertCardDetailsLeft">
                        <div className="card-body">
                          <p className="card-text">{concert.description}</p>
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
                          <p className="card-text text-white">
                            {concert.venue}
                          </p>
                          <p className="card-text">
                            <i className="fa-solid fa-clock"></i> {concert.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopConcerts;
