const Repertoire = ({ programme }) => {
  return (
      <div className="col-md-12 mt-5 mb-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-3 text-white text-4xl">Repertoire</h1>
          {programme.map((piece) => (
            <h4 key={piece.id} className="m-4">
              <span className="beCareful">{piece.composer}</span> <br />
              <span className="text-white margin-top">
                {piece.title}
              </span> <br />
              {piece.soloists && (
                <small className="text-gray-300">
                {`Soloists: ${piece.soloists}`}
              </small>
              )}
            </h4>
          ))}
        </div>
      </div>
  );
};

export default Repertoire;
