const Repertoire = ({ programme }) => {
  return (
    <div className="container-xxl py-3">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5 text-white text-4xl">The Repertoire</h1>
          {programme.map((piece) => (
            <h4 key={piece.id} className="m-4">
              <span className="beCareful">{piece.composer}</span> <br />
              <span className="text-white margin-top">
                {piece.title}
              </span> <br />
              {piece.soloists && (
                <small className="text-gray-300 ml-5">
                {`Soloists: ${piece.soloists}`}
              </small>
              )}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repertoire;
