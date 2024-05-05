const AuditionsCard = ({ auditions }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" }; // Formatting options
    return new Intl.DateTimeFormat("en-US", options).format(date); // Format the date
  }

  return (
    <div className="row g-4">
      {auditions.map((audition) => (
        <div
          className="col-lg-4 wow fadeInUp"
          data-wow-delay="0.1s"
          key={audition.id}
        >
          <div className="feature-item bg-light rounded text-center p-4">
            <h4 className="mb-3 margintop2vh text-2xl">{audition.location}</h4>
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
  );
};

export default AuditionsCard;
