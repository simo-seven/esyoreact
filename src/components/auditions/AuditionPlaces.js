const AuditionPlaces = ({ places, formatDate }) => {
  return (
    <>
      <div className="morespace">
        <p className="text-justify">
          <span className="beCareful">Live Auditions</span> will be held in the
          following Countries and Cities.{" "}
          <span className="beCareful">
            If you don't see your city don't panic, you can always send us a
            link to one of your videos in the form below
          </span>{" "}
          (select the option "Online" in the "Audition Place" field).
        </p>
      </div>
      <div className="row g-4">
        {places.map((audition) => (
          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-delay="0.1s"
            key={audition.id}
          >
            <div className="feature-item bg-light rounded text-center p-4">
              <h4 className="mb-3 margintop2vh text-2xl">
                {audition.location}
              </h4>
              <h5>{formatDate(audition.date)}</h5>
              {new Date(audition.date) > new Date() ? ( // Check if date is in the future
                <div className="notExpired">
                  <p className="m-o">From {audition.time}</p>
                  <p className="m-0">{audition.place}</p>
                </div>
              ) : (
                <p className="m-0 beCareful">
                  Expired! <br />
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuditionPlaces;
