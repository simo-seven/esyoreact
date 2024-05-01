const SponsorSchools = ({ schools, title }) => {
  return (
    <>
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="text-center mb-5 text-white text-capitalize margintopfiverem">
          {title}
        </h1>
      </div>
      <ul>
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
