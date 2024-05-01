const MainSponsors = ({ data, title }) => {
  return (
    <>
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="text-center mb-5 text-white text-capitalize">
          {title}
        </h1>
      </div>
      <section className="my-4">
        <div className="row">
          {data.map((sponsor) => (
            <div className="col-md-4 mb-3" key={sponsor.id}>
              <div className="card text-center bkgtrans">
                <img
                  src={sponsor.src}
                  className="card-img-top"
                  alt={sponsor.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainSponsors;
