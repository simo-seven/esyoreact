const SponsorSchools = ({ schools, title }) => {
  return (
    <>
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="text-center mb-5 text-white text-capitalize margintopfiverem text-4xl">
          {title}
        </h1>
      </div>
      <ul className="dots">
        <p className="mt-2 mb-2"> INDENT THE li ELEMENTS!!!! You'll need this also in the auditions, privacypolicy page</p>
        {schools.map((school) => (
          <li key={school.id}>
            <span className="beCareful">{school.country}</span> {school.name},
            in {school.city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SponsorSchools;
