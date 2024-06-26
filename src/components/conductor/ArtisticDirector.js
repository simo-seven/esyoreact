import Questions from "./Questions";

const ArtisticDirector = ({ bio, renderBody }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div
          className="animate__animated animate__fadeInUp"
          data-wow-delay="0.1s"
        >
          <p className="text-secondary text-center text-uppercase">
            {bio.role}
          </p>
          <h1 className="text-center mb-5 text-white text-4xl">
            M<sup>o</sup> {bio.name}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-4">
          <div className="md:w-1/2 mx-auto">
            <img
              src={bio.image}
              alt={bio.name}
              className="profile-image grayscale-to-color"
            />
          </div>
          <div className="col-md-6 text-justify hidden md:block">
            <Questions bio={bio} min={0} max={3} />
          </div>
        </div>
        <div className="col text-justify hidden md:block">
          <Questions bio={bio} min={2} max={7} />
        </div>
        <div className="row mt-4 py-4 text-justify">{renderBody(bio.body)}</div>
      </div>
    </div>
  );
};

export default ArtisticDirector;
